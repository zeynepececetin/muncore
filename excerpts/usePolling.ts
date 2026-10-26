// Excerpt from MUNCore, shown for review only. Not runnable on its own.
// Copyright (c) 2026 Zeynep Ece Cetin. All rights reserved.

// Request screens refresh every 5 seconds and pause while the tab is in the background.
"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";

// Talep ekranı için periyodik yenileme (karar: 5 saniye, Realtime yok).
// Kurallar:
// 1) Sadece bu hook'u kullanan ekranda çalışır.
// 2) Sekme arka plandayken durur; geri gelince hemen bir kez çalışır.
// 3) fetcher'a son başarılı kontrol zamanı verilir → sadece değişenleri çek
//    (Faz 1: .gt("updated_at", since)).
export function usePolling(fetcher: (since: Date | null) => Promise<void>, intervalMs = 5000) {
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const since = useRef<Date | null>(null);
  // Her turda fetcher'ın en güncel halini çağırır; zamanlayıcıyı yeniden kurdurmaz
  const fetchLatest = useEffectEvent(fetcher);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;

    async function tick() {
      try {
        const now = new Date();
        await fetchLatest(since.current);
        since.current = now;
        setLastUpdated(now);
      } catch {
        // Ağ hatası: sessizce bir sonraki turu bekle
      }
    }

    function start() {
      stop();
      tick();
      timer = setInterval(tick, intervalMs);
    }
    function stop() {
      if (timer) clearInterval(timer);
      timer = undefined;
    }
    function onVisibility() {
      if (document.visibilityState === "visible") start();
      else stop();
    }

    if (document.visibilityState === "visible") start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [intervalMs]);

  return lastUpdated;
}
