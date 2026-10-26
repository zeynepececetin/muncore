# MUNCore — Ürün Tanımı

**Sürüm:** 3.2
**Tarih:** 24 Ekim 2026
**Karar veren:** Zeynep
**Önceki sürüm:** 3.1 (22 Ekim). 3.2'de: sıfırdan etkinlik açma, iki aşamalı katılım havuzu, giriş yöntemi, revizyon döngüsü onayı, gizli not silme süresi. 3.1'de ortak istek havuzu eklendi. 3.0, 2.0'a (6 Eylül) göre Kasım kapsamını organizasyon tarafına daraltmıştı; komite oturumu v1 dışına çıkmıştı.

---

## 0. Bu belge nasıl okunur

Bu belge **ne yapılacağını** tanımlar. `docs/SPEC.md` **nasıl kurulacağını** anlatır. Çelişirlerse bu belge geçerlidir; SPEC güncellenir.

**Kaynak işaretleri:**

- **[Z]** — Zeynep'ten öğrenildi, doğrulanmış
- **[?]** — Varsayım, Zeynep tarafından doğrulanmadı. Bunlara güvenilmez, sorulur.

### 3.0'da ne değişti

| Değişiklik | Gerekçe |
|---|---|
| Komite oturumu (yoklama, sayaçlar, motion, oylama) Kasım kapsamından çıktı | MUN Command bu işi zaten yapıyor ve kulüp kullanıyor **[Z]**. MUNCore'un farkı organizasyon tarafında |
| Performans notları ve ödül forumu çıktı | Oturum verisi olmadan ödül istatistiği kurulamaz |
| Akademik hazırlık kaldı (position paper, study guide, karar tasarısı) | Organizasyon görev modelinin aynısı; yeni altyapı gerektirmiyor |
| Etkinlik anında ekipler arası talep akışı merkeze alındı | Organizatörler arası etkileşim ürünün asıl boşluğu |
| Talep ekranı 5 saniyede bir yenileniyor | Push bildirim ve Realtime olmadan "birkaç saniyede ekrana düşme" ihtiyacı **[Z]** |
| Referans kodu bulgusu doğrulandı | Velilerin havalelerinde isim uyuşmazlığı yaşandı **[Z]** |
| Chair'in delegeye görünür geri bildirimi eklendi | Position paper'daki hataların delegeye iletilmesi gerekiyor **[Z]**. Gizli not bunu karşılamıyordu |
| Referans kodu bina girişinde de kullanılıyor | Herkesin tek bir numarası olur, güvenlik ekibi girişi bu numarayla kaydeder **[Z]** |

### 3.1'de ne değişti

| Değişiklik | Gerekçe |
|---|---|
| Ortak istek havuzu (Open pool) eklendi: hangi ekibe gideceği belli olmayan talep havuza düşer, bir ekip başı üstlenir | Hiçbir talep sahipsiz kalmasın; talebi açan kişi "kime söyleyeceğimi bilmiyorum" diye işi bekletmesin **[Z]** |
| Havuzu yalnızca organizasyon tarafı görür; chair'ler ve delegeler göremez | Havuz organizasyon ekiplerinin iç iş dağıtım yeri **[Z]** |
| DSG ve DDG organizasyon başı olarak eklendi; SG, DSG, DG ve DDG aynı yetkide | Dördü de pratikte aynı işi yapıyor, hepsi görev atayabiliyor **[Z]**. "SG ve DG yetkileri farklı mı" açık kararı kapandı |

### 3.2'de ne değişti

| Değişiklik | Gerekçe |
|---|---|
| Uygulama içindeki katılım adımı "Join request" olarak adlandırılır; başvuru içeriği Google Form'da kalır **[Z]** | Uygulama başvuru içeriği toplamıyor; yalnızca katılım isteği onaylanıyor |
| Komite talepleri komite admini tarafından açılır; komite admini, Head of Admin'in komiteye yerleştirdiği Admin ekibi üyesidir. Chair talep işiyle uğraşmaz **[Z]** | Chair komiteye odaklanır; komitenin ihtiyaçları Admin ekibinden biri üzerinden gider |
| Bilgisayar görünümü: işlev aynı, düzen ekrana göre genişler **[Z]** | Organizatörler ve ekip başları işin çoğunu bilgisayarda da yapıyor |
| Finance ekibi advisor görüşüne kadar eklenmedi **[Z]** | Ekibin ödeme takibi dışındaki işi netleşmedi (`YAPILACAKLAR.md`) |

---

## 1. Ürün nedir

MUNCore, bir MUN konferansını **düzenleyen ekibin** işini tek yerde toplar: katılım onayı, ekip içi görev dağılımı, akademik hazırlık ve konferans günü ekipler arası iletişim. Bugün bu işler WhatsApp, Drive, Excel ve kâğıt arasında dağınık.

### Rakiplere göre konum

| | Odağı | MUNCore'la ilişkisi |
|---|---|---|
| **mymun** | Konferans keşfi, başvuru, ödeme | Farklı iş. Pazar yeri olmak MUNCore'un tezi değil |
| **MUN Command** | Komite oturumu: konuşma süresi, oylama, motion'lar | **Rekabet edilmiyor.** Oturum anı onun alanı, kulüp kullanıyor **[Z]** |
| **Kimse** | Konferansı düzenleyen ekibin iç işleyişi | **MUNCore burada** |

**Stratejik karar:** MUNCore komite oturumunu yönetmeye çalışmaz. Chair oturumda MUN Command'i kullanmaya devam eder. MUNCore konferans öncesindeki hazırlığı ve konferans günü organizasyon ekiplerinin birbiriyle çalışmasını yönetir.

---

## 1b. Tasarım ilkeleri

> **Uygulama kayıt tutar ve yardım eder; usulü dayatmaz.**

MUN usulü konferanstan konferansa değişir. Belirli bir akışı zorlayan uygulama, o akışı kullanmayan konferansta bozulur.

> **Uygulama kayıt tutar, alarm vermez.**

Push bildirim yok. Acil işler (sağlık, güvenlik, tahliye) sesle veya telefonla iletilmeye devam eder. Uygulama "kim istedi, kime atandı, karşılandı mı" kaydını tutar. Etkinlik günü nöbetçi ekip başı talep ekranını açık tutar.

> **Toplanmayan veri sızamaz.**

Yalnızca e-posta, görünen ad, temsil edilen ülke. Uygulamaya hiçbir finansal veri girmez.

---

## 2. Kimin hangi derdini çözüyoruz

### Organizatör (SG, DSG, DG, DDG)
**Bugün:** Kimin hangi komitede olduğu tabloda. Ödeme takibi WhatsApp'tan, IBAN elden ele **[Z]**. Havaleyi veli yaptığı için bankadaki isim delegeyle uyuşmuyor, eşleştirme elle yapılıyor **[Z]**. Ekiplere iş sözlü ve dağınık veriliyor.

**MUNCore'da:** Etkinliği kurar, komiteleri ve ekipleri açar, ekip başlarını belirler, tek davet linki üretir, ödemeyi referans koduyla eşleştirip onaylar, duyuru yayınlar, konferans günü binada kim olduğunu görür.

### Ekip başı (Head of PR, Admin, Security...)
**Bugün:** Görev dağılımı WhatsApp'ta, mesaj akışında kayboluyor. Komitelerin ihtiyaçları bağırarak iletiliyor **[Z]**.

**MUNCore'da:** Ekibine görev atar, kimin neyi bitirdiğini görür. Komitelerden gelen talepler ekranına düşer, üyeye atar, karşılanınca kapatır.

### Chair
**Bugün:** Position paper'ları klasörde topluyor, değerlendirme notlarını kendi defterinde tutuyor. Organizasyon ekibinden bir şey lazım olduğunda kime söyleyeceğini bilmiyor.

**MUNCore'da:** Komitesine görev açar (position paper, study guide), gelen belgeleri değerlendirir, gizli notunu sistemde tutar, organizasyon ekiplerine talep gönderir.

### Delege
**Bugün:** Görevini WhatsApp'tan öğreniyor, belgesini Drive'a atıyor, geri bildirimi sözlü alıyor, IBAN'ın doğru olup olmadığını bilemiyor.

**MUNCore'da:** Tek ekranda: bana atanan görevler, teslim ettiklerim, chair'in kararı, duyurular, usul rehberi. Ödeme bilgisini tek doğru kaynaktan görür.

---

## 3. Kasım kapsamı

**Kural:** Bir etkinlik, bir komite, iki organizasyon ekibi, birkaç kullanıcı. Dar ama uçtan uca eksiksiz.

### Katman 1 — Etkinlik, üyelik, katılım onayı

- **Sıfırdan etkinlik açma [Z]:** Hesabı olan herkes etkinlik açabilir; açan kişi o etkinliğin organizasyon başı olur. Kısa bir sihirbaz: ad ve tarihler → komiteler → ekipler ve başları → davet linki. Her adım atlanabilir, sonra kurulum ekranından düzenlenir. Davetsiz kimse etkinliği göremez
- Diğer organizasyon başları (DSG, DG, DDG) herkes gibi davet linkiyle girer; SG onları kabul ederken organizasyon başı yapar. Ayrı yönetici daveti yok **[Z]**
- Bir kişi birden fazla etkinlikte olabilir (birinde delege, ötekinde chair); etkinlik seçici vardır **[Z]**
- Etkinlik kapatılınca salt okunur olur; silme süreleri bu tarihten sayılır **[Z]** (24 Ekim)
- **Komiteler** açar (SOCHUM, UNSC...)
- **Organizasyon ekipleri** açar (PR, Admin, Security...) ve her ekibe **ekip başı** atar
- **Tek davet linki** üretir; delege, chair ve ekip üyeleri aynı linkten girer. Link başvuru formuna eklenir; başvuran herkes linke ulaşır **[Z]**
- **İki aşamalı katılım havuzu [Z]:**
  1. **Başvuru havuzu:** Linkten giren **görünen adını** ("Nisa K." gibi; tam ad toplanmaz) ve e-postasını yazar, "başvurun inceleniyor" ekranını görür. SG başvuruları değerlendirip kabul edilenleri onaylar ve **rolünü seçer**. Link sızsa bile yabancılar burada elenir
  2. **Ödeme havuzu:** Kabul edilen kişi **"ödeme bekleniyor"** ekranını görür:
     - Katılım ücreti
     - IBAN ve hesap sahibi
     - **Kişiye özel referans kodu** (`MUN-4827` gibi; havale açıklamasına yazılır)
     - "Ödeme bilgisinin tek kaynağı bu sayfa" uyarısı
  - Organizatör ödeme havuzunda **referans koduyla ya da adla arar** (havaleyi veli gönderdiyse kod olmayabilir), ödemeyi doğrular ve **onaylar**. Adla aramada birden çok kişi çıkarsa hepsi listelenir **[Z]**
  - **Ücret kuralı [Z]:** Başlar (ekip başları, DSG, DG, DDG) hariç herkes ödeme ekranını görür. Ödemeyecek biri varsa (ör. konferansı düzenleyen okulun öğrencisi) SG kabul ederken "No fee" işaretler; kişi ödeme havuzunu atlar. Neden ücretsiz olduğu kaydedilmez, yalnızca onay durumu değişir
  - Kabul edilmeyen başvurular başvuru dönemi kapandıktan 7 gün sonra otomatik silinir **[Z]** (24 Ekim)
- Onaylanan kişi rolüne göre kendi sayfasına geçer
- **E-postası olmayan küçük katılımcılar** (ortaokul vb.) velisinin e-postasıyla kaydolur; reşit olmayanlarda veli onayını da bu karşılar. Kural: bir e-posta = bir kişi **[Z]**
- **Giriş:** E-postaya giden 6 haneli kod. Şifre yok, her cihazda çalışır, oturum uzun süre açık kalır. Magic link seçilmedi: link yalnızca e-postanın açıldığı cihazda çalışıyor **[Z]** (24 Ekim)
- Referans kodu onaydan sonra da kişinin profilinde görünmeye devam eder; konferans günü **giriş numarası** olarak kullanılır
- Etkinlik organizasyon başları birden fazla olabilir: SG, DSG (Deputy Secretary-General), DG ve DDG (Deputy Director-General) **[Z]**. Dördü de aynı yetkilere sahiptir; hepsi görev atayabilir **[Z]**

**Kesin kural — ödeme:** Uygulamaya hiçbir finansal veri girmez. Tutar yok, dekont yok, tarih yok, "havaleyi gördüm" notu yok. Yalnızca onay durumu.

### Katman 2 — Etkinlik öncesi: görev ve hazırlık

**Ortak görev modeli.** Aşağıdakilerin hepsi aynı yapıyı kullanır: görev → sahipleri → değerlendirenleri → sonuç + gizli not. Yeni özellik değil, aynı mekanizmanın farklı kullanımı.

*Organizasyon tarafı*
- **Ekip başı kendi ekibine görev açar.** Ekip üyeleri birbirine görev atayamaz
- Görevin birden fazla sahibi olabilir
- Görev sahibi gerekiyorsa dosya yükler, görevi teslim eder
- **Göreve bağlı sohbet** — yalnızca göreve dahil olanlar okur

*Akademik taraf*
- **Study guide:** Chair yükler, komitedeki herkesin listesine düşer
- **Position paper:** Chair görev açar, delege yükler, chair değerlendirir. Değerlendirmede üç ayrı alan vardır:
  - **Sonuç** (Accepted / Revision requested / Rejected) — delege görür
  - **Geri bildirim** — delege görür. Hatalar ve düzeltilmesi gerekenler buraya yazılır **[Z]**
  - **Gizli not** — delege hiçbir koşulda göremez. Chair'ler arası değerlendirme için
- **Revizyon:** Sonuç "Revision requested" ise delege yeni sürümü yükler, görev tekrar değerlendirmeye düşer. Önceki sürüm ve önceki geri bildirim silinmez, geçmiş olarak durur. Revizyon sayısında sınır yok; Accepted veya Rejected sonrası yükleme kapanır **[Z]**
- **Gizli notlar** etkinlik kapatıldıktan **30 gün** sonra otomatik ve geri dönüşsüz silinir **[Z]**
- **Diğer bütün veriler** etkinlik kapatıldıktan **6 ay** sonra silinir **[Z]**
- **Değerlendirme ekranında iki yazı alanı açıkça ayrılır:** "Delegate will see this" ve "Delegate can't see this" etiketleri, farklı renk. Chair'in yanlış kutuya yazması bu ekranın en olası hatası
- Dil uyarısı iki alanın da üstünde durur: yalnızca performans hakkında yazılır, kişilik hakkında asla
- **Karar tasarısı gönderimi:** Sponsorlar dışarıda yazar (Google Docs vb.), dosyayı yükler, chair'e gider **[Z]**. Bloktaki herkes görevin sahibidir

*Herkes için*
- **Duyurular:** Tüm etkinliğe, bir komiteye veya bir ekibe hedeflenebilir
- **Usul rehberi:** Statik içerik (clauses menüsü, sık sorulan usul soruları). Veritabanı gerektirmez **[Z — sorun gerçek]**

### Katman 3 — Etkinlik günü: organizasyon akışı

- **Bina girişi kaydı:** Etkinlik seviyesinde, günde tek giriş kaydı
  - Herkesin bir numarası vardır: katılım onayındaki **referans kodu** (`MUN-4827`) **[Z]**
  - **Güvenlik ekibi** kapıda numarayı girer **[Z]**
  - Yazım hatasını yakalamak için ekran, girilen numaranın **görünen adını** gösterir; güvenlik ekibi onaylayınca kayıt düşer
  - Aynı gün ikinci kez girilen numara için "bugün zaten kaydedildi" uyarısı çıkar; yeni kayıt oluşmaz
  - Güvenlik ekibi kayıt **girebilir ama listeyi göremez**. Listeyi yalnızca organizasyon başları (SG, DSG, DG, DDG) görür **[Z]**
- **Talep akışı:**
  - Komite admini (komiteye yerleştirilmiş Admin ekibi üyesi) ya da ekip başı başka bir ekibe talep açar ("3 numaralı odaya su"). Chair talep açmaz **[Z]**
  - Head of Admin her komiteye en fazla bir komite admini yerleştirir
  - Talep hedef ekibin **talep ekranına** düşer
  - Ekip başı talebi bir üyeye atar
  - Karşılanınca kapanır; talebi açan kişi kapandığını görür
  - Ekip başları da birbirine talep açabilir (ör. PR → Admin) **[Z]**
- **Ortak istek havuzu (Open pool) [Z]:** Hangi ekibe gideceği belli olmayan talepler için geçici bekleme yeri. Amaç: hiçbir talep sahipsiz kalmasın; sonunda her talep bir ekibe bağlanır
  - *Adlandırma:* Katılım onayındaki "havuz"dan (onay bekleyen kişiler) ayrı bir şeydir
  - **Kim yazar:** Organizasyon ekibi üyeleri, ekip başları ve organizasyon başları (SG, DSG, DG, DDG). Talep formunda ekiplerin yanında "Not sure, send to open pool" seçeneği vardır **[Z]**
  - Organizasyon ekibi üyesi kimseye görev atayamaz; bir iş tanımlamak isterse talebi yalnızca havuza yazar. Başka bir ekibe doğrudan talebi chair'ler, ekip başları ve organizasyon başları açar **[Z]**
  - **Kim görür:** Yazabilenlerin hepsi. **Delegeler ve chair'ler havuzu göremez ve havuza yazamaz [Z]**. Komite admini Admin ekibinin üyesi olduğu için havuzu görür ve havuza yazabilir
  - **Üstlenme kuralı:** Herhangi bir ekip başı "Take it" ile talebi üstlenir. Talep o ekibin talebi olur, havuzdan çıkar ve normal talep akışına girer: ekip başı bir üyeye atar, karşılanınca kapanır **[Z]**
  - Aynı talebi iki ekip başı aynı anda üstlenmeye çalışırsa ilk davranan alır; talep yalnızca bir ekibe bağlanır
  - Havuzdaki talep kapatılamaz; önce bir ekip üstlenmelidir. Böylece kimse "kapattım" diyerek işi sahipsiz bırakamaz
  - Talebi açan kişi talebin havuzda beklediğini, üstlenilince hangi ekibe geçtiğini görür
  - **Organizasyon başları (SG, DSG, DG, DDG)** üstlenilmemiş talepleri ne kadar süredir beklediğiyle görür (ör. "waiting 12 min") **[Z]**
  - Havuz da talep ekranları gibi 5 saniyede bir yenilenir **[Z]**
- **Talep ekranı 5 saniyede bir yenilenir [Z]:**
  - Yalnızca talep ekranında; diğer ekranlar açıldığında güncellenir
  - Sekme arka plandayken durur, ekrana dönünce hemen yenilenir
  - Her seferinde yalnızca son kontrolden sonra değişenler çekilir

**Kesin kural — bina yoklaması:** Günde tek giriş kaydı. Sürekli giriş-çıkış geçmişi tutulmaz. Acil durumda "binada kim var" cevaplanır, kimsenin gün içi hareketi kaydedilmez.

---

## 4. Rollerin ana ekranları

Her rol girişte kendi ana ekranını görür. **"My tasks" ekranı tüm rollerde aynıdır** ve ürünün tezinin somut karşılığıdır: herkes kendine atananı tek yerde görür.

| Rol | Ana ekranda |
|---|---|
| **Organizatör** | Onaylanan / bekleyen / binadaki kişi sayısı, davet linki, komiteler, ekipler (bekleyen talebi olan ekip öne çıkar), ortak istek havuzunda bekleyen talepler ve bekleme süreleri, duyuru yayınlama |
| **Ekip başı** | Ekibe görev atama, gelen talepler, ortak istek havuzu ve talep üstlenme, başka ekiplere talep açma, ekip görevleri ve durumları, kendi görevleri |
| **Güvenlik ekibi üyesi** | Konferans günü: giriş numarası alanı ve onay. Liste yok |
| **Chair** | Komite üyeleri ve ülkeleri, position paper ilerlemesi ve değerlendirme, study guide, komite görevleri, komitenin komite admini |
| **Komite admini** | Ekip üyesi ekranı + "Committee admin: SOCHUM" etiketi, komite adına ekiplere ya da havuza talep, ortak havuz |
| **Delege** | My tasks (position paper, study guide, karar tasarısı), chair'in kararı, duyurular, usul rehberi |
| **Onay bekleyen** | Referans kodu, ücret, IBAN, güvenlik uyarısı |

Referans arayüz: `ui-reference/` klasörü. Chair ekranındaki "Start with roll call" kartı ve ödül kısayolu Kasım kapsamında **kaldırılacak**.

---

## 5. Demo senaryosu

Yirmi-otuz dakikada oynanır.

1. **Ayşe** (SG) etkinliği kurar; SOCHUM komitesini, PR ve Admin ekiplerini açar; ekip başlarını atar; davet linki üretir
2. **Mehmet** linkten girer → başvuru havuzuna düşer → "başvurun inceleniyor" ekranında `MUN-4827` kodunu görür; IBAN henüz görünmez
3. Ayşe başvuruyu kabul eder ve SOCHUM chair'i seçer; Mehmet ev sahibi okulun öğrencisi olduğu için "No fee" işaretler, Mehmet doğrudan sayfasına geçer
4. **Leyla** aynı linkten girer, Ayşe onu SOCHUM delegesi olarak kabul eder → Leyla IBAN'ı ve kodunu görür → Ayşe ödeme havuzunda kodu arar ve onaylar. (Selin demoda zaten onaylı delege; hikâyenin geri kalanında o var.)
5. **Deniz** aynı linkten girer, PR ekibine üye olarak atanır
6. PR ekip başı Deniz'e görev atar → Deniz kendi "My tasks" ekranında görür
7. **Deniz ekibine görev açmaya çalışır — yapamaz** ← *göster*
8. Mehmet study guide yükler ve position paper görevi açar
9. Selin belgesini yükler; Mehmet **revizyon ister**. Geri bildirime *"2. paragrafta ülkenin resmî tutumuna kaynak ekle"*, gizli notuna *"araştırması yüzeysel"* yazar
10. **Selin sonucu ve geri bildirimi görür, gizli notu göremez** ← *göster*. Düzeltilmiş sürümü yükler, Mehmet kabul eder
11. Konferans günü: Selin binaya girer, kapıdaki güvenlik ekibi üyesi `MUN-5130` numarasını girer, ekranda "Selin" görünür, onaylar. **Ayşe binadaki sayıyı ve listeyi görür; güvenlik ekibi ve Mehmet listeyi göremez** ← *göster*
12. SOCHUM'un komite admini **Ece B.** "3 numaralı odaya su" talebi açar → birkaç saniye içinde Admin ekibinin ekranına "From SOCHUM (Ece B.)" diye düşer → ekip başı bir üyeye atar → karşılanınca kapanır → Ece kapandığını görür
13. Ayşe yalnızca organizasyon ekiplerine bir duyuru yayınlar; delegeler görmez

**Anlatının omurgası:** 7, 10 ve 11. adımlar veritabanı seviyesinde (RLS) korunuyor, arayüzde gizlemekle değil.

---

## 6. Görünürlük matrisi

| Veri | Görebilen | Göremeyen |
|---|---|---|
| Ekip görevleri | Ekip üyeleri, ekip başı, organizasyon başları | Diğer ekipler, delegeler |
| Komite görevleri | Komite üyeleri, chair'ler, organizasyon başları | Diğer komiteler |
| Değerlendirme sonucu (`outcome`) | Sahibi, değerlendiren, organizasyon başları | — |
| Geri bildirim (`feedback`) | Sahibi, değerlendiren, organizasyon başları | — |
| Gizli not (`note`) | Değerlendiren, organizasyon başları | **Görev sahibi** |
| Talepler | Talebi açan grup, hedef ekip, organizasyon başları | Diğer ekipler ve komiteler |
| Ortak istek havuzu (üstlenilmemiş talepler; okuma ve yazma) | Organizasyon ekibi üyeleri, ekip başları, organizasyon başları (SG, DSG, DG, DDG) **[Z]** | **Delegeler, chair'ler** |
| Bina giriş kaydı (liste) | Organizasyon başları (SG, DSG, DG, DDG) **[Z]** | Delegeler, chair'ler, ekipler; **kaydı giren güvenlik ekibi dahil** |
| Bina giriş kaydı (yazma) | Güvenlik ekibi, organizasyon başları | Diğer herkes |
| Katılım havuzu ve referans kodları | Organizasyon başları; kişi yalnızca kendi kodunu | Diğer katılımcılar |
| Duyurular | Hedeflenen grup | Hedef dışındakiler |

### Kasım için güvenlik değişmezleri

Her faz sonunda iki test hesabıyla denenir. Hepsinin cevabı **hayır** olmalı:

1. Etkinlik A'nın yöneticisi, etkinlik B'den veri okuyabiliyor mu?
2. Komite A'daki delege, komite B'nin görevlerini görebiliyor mu?
3. Göreve dahil olmayan üye, o görevin sohbetini okuyabiliyor mu?
4. Görev sahibi, değerlendirenin gizli notunu okuyabiliyor mu?
5. Ekip üyesi, ekibine görev açabiliyor mu? **(yeni)**
6. Organizasyon başı olmayan biri (güvenlik ekibi dahil), bina giriş listesini görebiliyor mu? **(yeni)**
7. Dosya bağlantısı doğrudan girildiğinde yetkisiz indirme mümkün mü?

*Eski 5 ve 6 numaralı değişmezler (performans notu, yoklama ve konuşma süresi) ilgili özellikler kapsam dışı kaldığı için çıktı; özellikler geri geldiğinde değişmezler de geri gelir.*

---

## 7. Faz 1 veri modeli

**Kalan tablolar:** `events`, `groups`, `event_memberships`, `group_memberships`, `invites`, `announcements`, `tasks`, `task_participants`, `task_reviews`, `attachments`, `messages`

**Eklenecek alanlar:**
- `group_memberships` → **grup içi rol** (`head` / `member`). Ekip başı yetkisi buna bağlı
- `event_memberships` → **onay durumu** (`pending` / `approved`)
- `event_memberships` → **referans kodu** (benzersiz)
- `event_memberships` → **organizasyon başı rolü**. Birden fazla olabilir (SG, DSG, DG, DDG) **[Z]**. Dördü de aynı yetkidedir; tek bir `admin` rolü yeterli **[Z]**
- `task_reviews` → **`feedback`** alanı (sahibe görünür). `note` gizli kalır
- `task_reviews.outcome` → position paper için `accepted` / `revision_requested` / `rejected`
- `attachments` → aynı göreve birden fazla sürüm yüklenebilir; eskisi silinmez, en yenisi geçerlidir
- `tasks.kind` → `request` (talep) ve `draft_resolution` eklenir; `motion` Kasım'da kullanılmaz
- `tasks` → talepler için **hedef grup** (görevi açan grup ile işi yapan grup farklı olabilir). Hedef grubu boş talep **ortak istek havuzundadır**; üstlenen ekip başı hedef grubu kendi ekibi yapar
- Havuzda bekleme süresi talebin açılış zamanından hesaplanır (`created_at`); ayrı alan gerekmez
- Etkinlik seviyesinde **bina giriş kaydı** tablosu: kişi + gün + kaydı giren. Kişi ve gün birlikte benzersiz (günde tek kayıt)
- Güvenlik ekibinin numaradan görünen adı alabilmesi için **dar kapsamlı bir veritabanı fonksiyonu** (`SECURITY DEFINER`): yalnızca o etkinliğin güvenlik ekibine ve organizasyon başlarına çalışır, yalnızca görünen adı döndürür. Mentor incelemesinde bakılacak

**Kasım'da kurulmayacak tablolar:** `sessions`, `session_segments`, `motions`, `attendance`, `speaking_records`, `performance_notes`, `award_nominations`, `forum_posts`. Model bunlara açık bırakılır: hepsi `groups` tablosuna bağlanacak, mevcut yapıyı değiştirmeleri gerekmez.

---

## 8. Kasım'da NE OLMAYACAK

Gerekçeleriyle `docs/IDEAS.md`'de. Demoda "bunu bilerek yapmadım" denecek; eksiklik değil, kapsam kararı.

| Dışarıda | Kısa gerekçe |
|---|---|
| **Komite oturumu** (yoklama, sayaçlar, motion, oylama) | MUN Command yapıyor, kulüp kullanıyor. Rekabet edilmeyen alan |
| **Performans notları ve ödül forumu** | Oturum verisi olmadan anlamsız; oturumla birlikte gelir |
| Push bildirim ve Realtime | Talep ekranı 5 saniyede bir yenileniyor; uygulama alarm değil kayıt aracı |
| Kriz komiteleri | Karar ertelendi; görev modeli açık tasarlandı |
| MUN portfolyosu | Veri minimizasyonu kuralıyla çelişiyor |
| AI tutor | Maliyet, doğruluk, reşit olmayan kullanıcı riski. Yerine usul rehberi |
| Uygulama içinde tasarı yazımı | Google Docs'tan daha kötü olur; zaman meselesi değil |
| Ödeme işleme, pazar yeri | mymun'un alanı |
| Gerçek konferansta kullanım | Yasal metinler bitmeden gerçek öğrenci verisi girilmez |

---

## 9. Kesme sırası **[Z]**

Zaman yetmezse **bu sırayla** kesilecek:

1. **Karar tasarısı gönderimi** — position paper akışı aynı şeyi gösteriyor
2. **Göreve bağlı sohbet** — demo hikâyesinde yok
3. **Hedefli duyurular** — tek, herkese açık duyuru kalır
4. **Usul rehberi** — statik ama içerik yazımı zaman alıyor
5. **Bina girişi kaydı** — Bulgu 3'ün tasarım kararı özellik olmadan da anlatılabilir

**Kesilmeyecekler:** Katılım havuzu ve referans kodu, "My tasks" ekranı, ekip başı yetkisi, talep akışı ve 5 saniyelik yenileme, position paper + gizli not. Bunlar hikâyenin omurgası.

---

## 10. Başarı ölçütü

Kasımda şu üç cümle kurulabiliyorsa tanım tutmuştur:

1. "Bir konferansı düzenleyen ekibin işini (katılım onayından konferans günü ekipler arası taleplere kadar) tek uygulamada gösterebiliyorum."
2. "Görmemesi gereken kişiye veriyi veritabanı seviyesinde kapatıyorum ve bunu gösterebilirim."
3. "Kapsamın dışında bıraktıklarımı bilerek bıraktım, gerekçeleriyle listesi burada."

---

## 11. Açık kararlar

- E-postası olmayan küçük katılımcılar için veli e-postası kuralının danışmana da sorulması
- Kriz komitesi desteği: advisor görüşü bekleniyor
