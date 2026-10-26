// Excerpt from MUNCore, shown for review only. Not runnable on its own.
// Copyright (c) 2026 Zeynep Ece Cetin. All rights reserved.

// Position paper review form: what the delegate will see and the chair-only private note are kept apart.
"use client";

import { useState } from "react";
import { submitReview, useDemoState } from "@/lib/demo-store";
import { delegatePaper, type Outcome } from "@/lib/mock-data";
import { EyeIcon, LockIcon } from "./icons";

const outcomes: { value: Outcome; label: string }[] = [
  { value: "accepted", label: "Accept" },
  { value: "revision_requested", label: "Ask to revise" },
  { value: "rejected", label: "Reject" },
];

// Değerlendirme formu: iki yazı alanı bilerek farklı görünüyor.
// En olası hata: chair'in gizli notu yanlışlıkla görünür kutuya yazması.
export function ReviewForm() {
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [feedback, setFeedback] = useState("");
  const [note, setNote] = useState("");
  const { version, review } = useDemoState().paper;

  // Revizyon isteniyorsa delegenin neyi düzelteceğini bilmesi gerekir
  const feedbackRequired = outcome === "revision_requested" || outcome === "rejected";
  const canSend = outcome !== null && (!feedbackRequired || feedback.trim().length > 0);

  function send() {
    if (!outcome) return;
    submitReview({ outcome, feedback: feedback.trim(), reviewer: delegatePaper.reviewer }, note);
    setOutcome(null);
    setFeedback("");
    setNote("");
  }

  // Henüz yüklenmiş belge yoksa değerlendirilecek bir şey yok
  if (version === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-line px-4 py-5 text-center text-sm text-muted">
        The review opens when the delegate submits a paper.
      </p>
    );
  }

  // Bu sürüm değerlendirildiyse form kapanır; yeni sürüm gelince tekrar açılır
  if (review) {
    return (
      <div className="rounded-2xl bg-ok-soft px-4 py-5 text-ok">
        <p className="font-semibold">Review sent for version {version}</p>
        <p className="text-sm">
          The delegate can now see the outcome and your feedback.
          {review.outcome === "revision_requested" && " This page opens again when a new version arrives."}
        </p>
      </div>
    );
  }

  return (
    <>
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 text-[15px] font-semibold">Outcome</legend>
        <div className="grid grid-cols-3 gap-1.5">
          {outcomes.map((o) => {
            const on = outcome === o.value;
            return (
              <button
                key={o.value}
                type="button"
                aria-pressed={on}
                onClick={() => setOutcome(o.value)}
                className={`h-12 rounded-xl text-sm ${
                  on ? "border-2 border-ink bg-ink font-semibold text-white" : "border border-line bg-white font-medium"
                }`}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Dil uyarısı iki yazı alanının da ÜSTÜNDE durur (SPEC §10.4) */}
      <p className="rounded-xl bg-navy-soft px-3 py-2.5 text-[13px] leading-snug text-navy">
        These notes are about real people. Write only what you would be comfortable saying to the
        delegate’s face and in front of your team. Comment on the work — research, structure,
        sources — never on personality, appearance, or background. Every note records who wrote it.
      </p>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="feedback" className="text-[15px] font-semibold">
            Feedback{feedbackRequired && <span className="text-accent"> *</span>}
          </label>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-navy">
            <EyeIcon className="size-3.5" />
            Delegate will see this
          </span>
        </div>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="What should they fix or keep?"
          className="h-24 resize-none rounded-xl border-2 border-navy bg-white px-3 py-2.5 text-base leading-snug outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="note" className="text-[15px] font-semibold">
            Private note
          </label>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-accent-dark">
            <LockIcon className="size-3.5" />
            Delegate can’t see this
          </span>
        </div>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="For chairs only"
          className="h-20 resize-none rounded-xl border border-dashed border-accent bg-accent-soft px-3 py-2.5 text-base leading-snug outline-none"
        />
      </div>

      <button
        type="button"
        disabled={!canSend}
        onClick={send}
        className="h-12 rounded-xl bg-accent text-base font-semibold text-white disabled:opacity-40"
      >
        Send review
      </button>
    </>
  );
}
