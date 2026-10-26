# MUNCore — Fikirler (v1 kapsamı dışı)

Buraya yazılan hiçbir şey v1'de yapılmaz. Amaç fikirleri kaybetmemek, kapsamı korumak.
Her madde neden ertelendiğiyle birlikte duruyor — sırası geldiğinde gerekçe tekrar tartışılır.

**Son güncelleme:** 22 Ekim 2026

---

## Karar bekleyenler

### Kriz komitesi desteği
Direktif gönderimi (kişisel / ortak / kabine), onay-ret-revizyon, delege ile arka oda arasında gizli mesajlaşma, aciliyet seviyeli kriz güncellemeleri, tam işlem kaydı.

**Durum:** MUN Command'de kriz için hiçbir özellik bulunamadı; boşluk gerçek görünüyor. Advisor görüşü bekleniyor.

**Mimari not:** Bir direktif yapısal olarak senin görev modelinin özel hali — sahibi, değerlendirenleri, sonucu ve gizli notu olan bir gönderi. `tasks` + `task_participants` + `task_reviews` bunu zaten karşılıyor. **v1'de model buna açık tasarlanacak**, arayüz sonra eklenebilir.

---

## Komite oturumu — v1'den çıkarıldı (22 Ekim)

**Neden çıktı:** Kulüp oturumda MUN Command'i zaten kullanıyor ve bu işi iyi yapıyor. MUNCore'un farkı konferansı düzenleyen ekibin iç işleyişinde. Rekabet edilmeyen alana zaman harcamak yerine organizasyon tarafı eksiksiz yapıldı. Ayrıca takvim: Kasım hedefi bu kapsamla tutmuyordu.

**Geri geldiğinde neye dikkat edilecek:** Aşağıdaki tasarım 6 Eylül tartışmasında Zeynep'in alan bilgisiyle **[Z]** netleşti; kaybolmasın diye burada duruyor.

### Oturum yapısı: bölümler ve modlar
Oturum birbirini takip eden bölümlerden oluşur, her bölümün modu hangi sayaçların çalıştığını belirler.

| Mod | Bireysel süre | Toplam süre | Nasıl başlar |
|---|---|---|---|
| GSL | ✓ | ✗ | Varsayılan hal |
| Moderated caucus | ✓ | ✓ | Motion geçerse |
| Unmoderated caucus | ✗ | ✓ | Motion geçerse |
| Chair'in özel ayarı | elle | elle | Chair başlatır |

- Opening speech ayrı mod değil, GSL içinde 1 dakikalık bireysel süre
- Akış dayatılmaz, chair modu kendisi seçer; uygulama kapanıp açılınca kaldığı yerden devam eder
- Toplam süre konuşmacılar arasında durur; bireysel süre sıfırda durur, eksiye geçmez; süre uyarısını chair sözlü verir
- Model: `sessions`, `session_segments` (mod, bireysel süre, toplam süre, konu, sıra)

### Yoklama
Oturumun başlama koşulu. `attendance` tablosu. Delege kendi kaydını göremez.

### Motion akışı
- Alanlar: veren ülke, tip (moderated / unmoderated), konu, toplam süre, konuşma süresi
- Usul motion'ları sözlü geçer, uygulamaya girilmez
- Chair girişi temel yol; delege gönderimi isteğe bağlı hızlandırıcı (ortaokul MUN'larında delegelerin cihazı olmayabilir)
- Uygulama resmî cümleyi kalıptan kurar
- Oylama öncesi tam metin okunabilir; sonucu chair işaretler, ülke ülke oy kaydı yok (plakard)
- Oylama sırasında usul notu, delegelere açık
- Model: `motions`

### Karar tasarısı oylaması
Gönderim v1'de var; oylama sonucunu chair işaretler.

### Performans notları ve ödül forumu
- Chair delegeler hakkında not tutar, delege göremez; etkinlik kapanınca 30 gün sonra silinir
- Ödül forumunda chair'ler tartışır, hiçbir delege göremez
- Ödül istatistikleri: verilen motion, geçen motion, toplam konuşma süresi, konuşma sayısı
- Ödül ölçütü motion'lar ve konuşmalar; oy verme davranışı ölçüt değil **[Z]**
- Model: `speaking_records`, `performance_notes`, `award_nominations`, `forum_posts`
- Geri geldiğinde güvenlik değişmezleri de geri gelir: "delege kendi performans notunu ve ödül forumunu göremez", "delege kendi yoklama ve konuşma kaydını göremez"

---

## Oturum tarafı — ileri özellikler

### Elektronik oylama
Delegelerin kendi cihazlarından oy vermesi. Türkiye'de plakardla yapılıyor, gerek yok. **ABD'de elektronik cihaz kullanımı daha yaygın olduğu için orada işe yarayabilir.**

### Gelişmiş istatistik ekranları
Grafikler, zaman çizelgeleri, oturumlar arası karşılaştırma, eğilim analizi.
*(Basit istatistik — delege başına toplam süre, konuşma sayısı, verilen ve geçen motion sayısı — v1'de var, ödül değerlendirmesi için zorunlu.)*

### Çevrimdışı çalışma
Konferans salonlarında internet kötü olabiliyor. MUN Command bunu çözmüş. Zor iş.
**v1 karşılığı:** Demo mekânının interneti önceden test edilecek, yedek hotspot hazır olacak. Yazılım işi değil, hazırlık işi.

### Geniş motion ve müzakere modu desteği
21 motion tipi, 11 müzakere modu. v1'de sadece moderated ve unmoderated caucus var; usul motion'ları zaten sözlü geçiyor.

### P5 vetosu
Sadece UNSC'de ve sadece esasa ilişkin oylamalarda geçerli. v1'de oylama sonucu chair tarafından girildiği için (ülke ülke oy kaydı yok) veto mantığına gerek kalmıyor.

---

## Belge tarafı

### Yapılandırılmış clause yazımı
Preambular ve operative maddelerin uygulamada ayrı alanlar olarak girilmesi.

**Not:** Bu, ortak metin editörü yapmak değil — Google Docs ile rekabet etmiyor, farklı bir şey. v1'de karar tasarısı dışarıda yazılıp yükleniyor.

### Ortak metin editörü (karar tasarısının uygulama içinde yazılması)
**Reddedildi, zaman yüzünden değil.** Aynı anda birden fazla yazar, çakışma çözümü, biçimlendirme, çevrimdışı dayanıklılık gerektirir. Yarım kalmış bir editör delegelere Google Docs'tan daha kötü deneyim verir. Yetişse bile yapılmamalı.

---

## Bildirim ve anlık güncelleme

### Push bildirim
Telefon cepteyken talebin ekip başına ulaşması. iOS'ta ana ekrana eklenmiş PWA'larda mümkün, ama izin akışı ve servis işçisi gerektiriyor.
**v1 karşılığı:** Uygulama kayıt tutar, alarm vermez. Acil işler sesle/telefonla iletilir.

### Supabase Realtime
Talebin anında ekrana düşmesi. Abonelik kurulumu ve RLS'in burada da doğru çalıştığının test edilmesi gerekiyor.
**v1 karşılığı:** Talep ekranı 5 saniyede bir yenileniyor. Ekran tasarımı aynı kaldığı için geçiş kolay.

---

## Büyük fikirler — ilke kararı gerektirir

### MUN portfolyosu
Öğrencinin MUN geçmişi: görevleri, ödülleri, yüklediği sertifikalar, katıldığı konferanslar. Üniversite başvurusunda paylaşılabilir profil.

**İki temel çatışma var:**

1. **Çoklu kiracı izolasyonu.** Tüm veri modeli etkinlik kapsamlı; birinci güvenlik değişmezi etkinlikler arası veri okumayı yasaklıyor. Portfolyo tanımı gereği etkinlikler arası. Kapı sadece kişinin kendi verisine açılabilir ama RLS ciddi şekilde karmaşıklaşır.

2. **Veri minimizasyonu.** Kural: sadece e-posta, görünen ad, ülke. Sertifikaların üstünde tam ad, okul adı, tarih yazıyor — toplamamaya söz verilen verilerin neredeyse hepsi. Üstelik reşit olmayan birinin faaliyet geçmişi dışarı açılıyor.

**Gerekenler:** Yasal metinler, veli onay akışı, hangi verinin dışarı açılacağının tek tek seçilmesi. Teknik zorluk değil, ilke kararı.

### AI tutor
Delegelerin usul sorularını yapay zekâya sorması, chair'in sürekli bölünmemesi.

**Dört sorun:**
- **Maliyet:** İstek başına ücret. Altyapı bütçesi yılda 50 doların altı, hepsi ücretsiz katman. 100 delegeli konferans bunu aşar.
- **Doğruluk:** MUN kuralları konferanstan konferansa değişiyor. Yanlış usul cevabı komiteyi bozar.
- **Reşit olmayan kullanıcı:** 13-17 yaşa açık serbest sohbet, moderasyon ve güvenlik yükümlülüğü getirir.
- **Mantık sorunu:** Soruların chair onayından geçmesi güvenli ama chair'i meşgul etmeme amacını ortadan kaldırır.

**v1 karşılığı:** Aranabilir usul rehberi — clauses menüsünün genişletilmiş hali. Sık sorulan usul soruları, motion nasıl verilir, çekimser ne demek, point of order ne zaman kullanılır. Sıfır maliyet, sıfır risk, sorunun büyük kısmını çözer.

---

## Kapsam dışı — ürün tezinin parçası değil

### Ödeme işleme ve konferans pazar yeri
Kart bilgisi, Stripe, para transferi, konferans keşfi. mymun'un alanı.
*(v1'de sadece organizatörün elle onayı var — finansal veri girmiyor.)*

### Mağaza sürümü mobil uygulama
v1 PWA olarak dağıtılıyor.
