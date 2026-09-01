import { images } from './images';

export type ServiceDetail = {
  slug: string;
  category: string;
  title: string;
  short: string; // kart açıklaması
  intro: string; // detay sayfası giriş
  image: string;
  advantages: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  useCases: string[];
  faq: { q: string; a: string }[];
};

// Yardımcı: standart avantaj/teknik/kullanım blokları
const A = (t: string, d: string) => ({ title: t, description: d });
const S = (label: string, value: string) => ({ label, value });

export const services: ServiceDetail[] = [
  {
    slug: 'kis-bahcesi',
    category: 'Cam & Alüminyum',
    title: 'Kış Bahçesi Sistemleri',
    short: 'Yaşam alanlarınızı dört mevsim kullanılabilir hale getiren modern cam ve alüminyum çözümleri.',
    intro:
      'Kış bahçesi sistemleri; bahçe, teras ve balkon alanlarınızı yılın her mevsimi konforla kullanabileceğiniz yaşam alanlarına dönüştürür. Yüksek ısı yalıtımlı alüminyum profiller ve özel cam paketleriyle estetik ve performansı bir araya getiriyoruz.',
    image: images.services['kis-bahcesi'],
    advantages: [
      A('Isı Yalıtımı', 'Termal bariyerli profiller ve ısı camı ile enerji tasarrufu.'),
      A('Dört Mevsim Kullanım', 'Yazın serin, kışın sıcak; kesintisiz konfor.'),
      A('Modern Mimari', 'İnce profil çizgileri ve geniş cam yüzeyler.'),
      A('Özel Ölçü Üretim', 'Her mekâna özel projelendirme ve üretim.'),
    ],
    specs: [
      S('Profil', 'Isı yalıtımlı alüminyum'),
      S('Cam', 'Çift / üçlü ısı camı, Low-E'),
      S('Çatı', 'Eğimli / düz, motorlu opsiyon'),
      S('Renk', 'RAL renk kartelası'),
    ],
    useCases: ['Villa terasları', 'Restoran & kafe alanları', 'Çatı katı yaşam alanları', 'Otel ve resort projeleri'],
    faq: [
      { q: 'Kış bahçesi ısıtılabilir mi?', a: 'Evet, yerden ısıtma ve klima entegrasyonu ile dört mevsim konforlu kullanım sağlanır.' },
      { q: 'Montaj ne kadar sürer?', a: 'Ortalama bir proje ölçüye bağlı olarak 3–7 iş günü içinde tamamlanır.' },
    ],
  },
  {
    slug: 'bioklimatik-pergola',
    category: 'Gölgelendirme',
    title: 'Bioklimatik Pergola',
    short: 'Ayarlanabilir lameller ile güneş ve yağmuru kontrol eden akıllı gölgelendirme sistemleri.',
    intro:
      'Bioklimatik pergola sistemleri, motorlu ve ayarlanabilir alüminyum lamelleri sayesinde güneş ışığını, havalandırmayı ve yağmuru kontrol etmenizi sağlar. Dış mekânlarınızı akıllı ve konforlu yaşam alanlarına dönüştürür.',
    image: images.services['bioklimatik-pergola'],
    advantages: [
      A('Ayarlanabilir Lameller', 'Güneş açısına göre 0–135° dönebilen lameller.'),
      A('Yağmur Koruması', 'Kapalı konumda tam su tahliyeli su yalıtımı.'),
      A('Motorlu Kontrol', 'Uzaktan kumanda ve akıllı ev entegrasyonu.'),
      A('Dayanıklı Yapı', 'Rüzgâra dayanıklı alüminyum konstrüksiyon.'),
    ],
    specs: [
      S('Malzeme', 'Ekstrüzyon alüminyum'),
      S('Lamel', 'Motorlu, ayarlanabilir'),
      S('Kontrol', 'Kumanda / sensör / akıllı ev'),
      S('Ek Opsiyon', 'Yan cam, zip perde, LED'),
    ],
    useCases: ['Villa bahçeleri', 'Restoran terasları', 'Havuz kenarı', 'Otel dış mekânları'],
    faq: [
      { q: 'Yağmurda su geçirir mi?', a: 'Hayır, kapalı konumda entegre oluk sistemiyle su tahliye edilir.' },
      { q: 'Kışın kullanılabilir mi?', a: 'Yan cam ve ısıtıcı entegrasyonu ile dört mevsim kullanılabilir.' },
    ],
  },
  {
    slug: 'ofis-bolme',
    category: 'Alüminyum',
    title: 'Ofis Bölme Sistemleri',
    short: 'Modern çalışma alanları için ince profilli, ses yalıtımlı cam bölme çözümleri.',
    intro:
      'Ofis bölme sistemleri; açık ofisleri fonksiyonel, ferah ve modern alanlara dönüştürür. İnce alüminyum profiller ve tek/çift cam seçenekleriyle ışığı bölmeden mekânları ayırır, ses yalıtımı sağlar.',
    image: images.services['ofis-bolme'],
    advantages: [
      A('Ferah Görünüm', 'Cam yüzeyler ile bölünmüş ama aydınlık alanlar.'),
      A('Ses Yalıtımı', 'Çift cam ile toplantı odalarında akustik konfor.'),
      A('Modüler Yapı', 'Kolay kurulum, sökülüp yeniden konumlandırma.'),
      A('Şık Tasarım', 'İnce profil ve cama uygulanabilir folyo seçenekleri.'),
    ],
    specs: [
      S('Profil', 'İnce alüminyum bölme profili'),
      S('Cam', 'Tek / çift, temperli'),
      S('Kapı', 'Menteşeli / sürme cam kapı'),
      S('Opsiyon', 'Jaluzi, folyo, akustik cam'),
    ],
    useCases: ['Ofis ve iş merkezleri', 'Toplantı odaları', 'Showroom & mağaza', 'Klinik ve muayenehaneler'],
    faq: [
      { q: 'Camlara gizlilik sağlanabilir mi?', a: 'Buzlu folyo, jaluzi veya akıllı cam ile gizlilik sağlanabilir.' },
      { q: 'Yerleri değiştirilebilir mi?', a: 'Modüler yapı sayesinde bölmeler sökülüp yeniden konumlandırılabilir.' },
    ],
  },
  {
    slug: 'aluminyum-dograma',
    category: 'Alüminyum',
    title: 'Alüminyum Doğrama',
    short: 'Yüksek mukavemetli, ince profilli, modern cephe ve pencere doğrama sistemleri.',
    intro:
      'Alüminyum doğrama sistemleri; dayanıklılığı, ince profil estetiği ve geniş renk seçenekleriyle modern mimarinin vazgeçilmezidir. Isı yalıtımlı seriler ile enerji verimliliği ön plandadır.',
    image: images.services['aluminyum-dograma'],
    advantages: [
      A('Uzun Ömür', 'Korozyona dayanıklı, bakım gerektirmeyen yapı.'),
      A('İnce Profil', 'Geniş cam alanı ve maksimum ışık.'),
      A('Isı Yalıtımı', 'Poliamid bariyerli termal seriler.'),
      A('Tasarım Özgürlüğü', 'Geniş renk ve ahşap görünüm seçenekleri.'),
    ],
    specs: [
      S('Seri', 'Yalıtımlı / yalıtımsız'),
      S('Açılım', 'Sürme, kanatlı, katlanır'),
      S('Cam', 'Çift / üçlü ısı camı'),
      S('Kaplama', 'Elektrostatik toz boya'),
    ],
    useCases: ['Konut projeleri', 'Ofis ve iş merkezleri', 'Cephe uygulamaları', 'Villa pencereleri'],
    faq: [
      { q: 'Ahşap görünümlü olur mu?', a: 'Evet, ahşap desenli kaplama seçenekleri mevcuttur.' },
      { q: 'PVC yerine neden alüminyum?', a: 'Daha ince profil, daha yüksek mukavemet ve büyük açıklıklar için idealdir.' },
    ],
  },
  {
    slug: 'zip-perde',
    category: 'Gölgelendirme',
    title: 'Zip Perde Sistemleri',
    short: 'Rüzgâra dayanıklı, kanallı yapıya sahip modern dış mekân güneşlik çözümleri.',
    intro:
      'Zip perde sistemleri, kumaşın yan kanallara sabitlendiği yapısı sayesinde rüzgârda dahi stabil kalır. Dış mekânlarda güneş, böcek ve rüzgâr kontrolü sağlayan modern bir çözümdür.',
    image: images.services['zip-perde'],
    advantages: [
      A('Rüzgâr Dayanımı', 'Yan kanal (zip) sistemi ile stabil kumaş.'),
      A('Güneş Kontrolü', 'Isı ve UV azaltan teknik kumaşlar.'),
      A('Böcek Koruması', 'Sızdırmaz yapı ile böcek engeli.'),
      A('Motorlu Kullanım', 'Kumanda ve güneş sensörü entegrasyonu.'),
    ],
    specs: [
      S('Kumaş', 'Teknik screen / karartma'),
      S('Kontrol', 'Motorlu / kumandalı'),
      S('Kasa', 'Kapalı alüminyum kaset'),
      S('Genişlik', '4 metreye kadar tek parça'),
    ],
    useCases: ['Pergola yan kapatma', 'Cephe güneşliği', 'Teras & balkon', 'Kafe dış mekânları'],
    faq: [
      { q: 'Kumaş güneşte solar mı?', a: 'UV dayanımlı teknik kumaşlar uzun yıllar rengini korur.' },
      { q: 'Şeffaf kumaş var mı?', a: 'Manzarayı koruyan yarı şeffaf screen kumaş seçenekleri mevcuttur.' },
    ],
  },
  {
    slug: 'giyotin-cam',
    category: 'Cam Sistemleri',
    title: 'Giyotin Cam Sistemleri',
    short: 'Dikey açılan, çerçevesiz görünümlü, alan kazandıran modern cam kapatma çözümleri.',
    intro:
      'Giyotin cam sistemleri, camları dikey olarak yukarı-aşağı hareket ettirerek mekânı zahmetsizce açıp kapatmanızı sağlar. Minimal profil yapısıyla kesintisiz manzara ve modern bir görünüm sunar.',
    image: images.services['giyotin-cam'],
    advantages: [
      A('Alan Tasarrufu', 'Dikey hareket sayesinde ek alan gerektirmez.'),
      A('Kesintisiz Manzara', 'İnce profil ile maksimum cam yüzey.'),
      A('Kolay Kullanım', 'Manuel veya motorlu sessiz çalışma.'),
      A('Isı & Ses Yalıtımı', 'Isı camı ile konforlu iç mekân.'),
    ],
    specs: [
      S('Profil', 'Alüminyum, ince kesit'),
      S('Cam', '8–10 mm temperli / ısı camı'),
      S('Hareket', 'Manuel / motorlu'),
      S('Kilit', 'Çok noktalı güvenlik'),
    ],
    useCases: ['Balkon kapatma', 'Kafe & restoran cepheleri', 'Kış bahçesi', 'Teras kapatma'],
    faq: [
      { q: 'Rüzgârda güvenli mi?', a: 'Çok noktalı kilit ve sağlam ray sistemi ile yüksek rüzgâr dayanımı sağlar.' },
      { q: 'Cam kırılırsa değişir mi?', a: 'Modüler yapı sayesinde tek panel kolayca değiştirilebilir.' },
    ],
  },
  {
    slug: 'isi-camli-surme',
    category: 'Cam Sistemleri',
    title: 'Isı Camlı Sürme Sistemler',
    short: 'Yana kayarak açılan, yüksek ısı yalıtımlı geniş açıklıklı sürme cam sistemleri.',
    intro:
      'Isı camlı sürme sistemler, geniş cam yüzeylerini yana kaydırarak iç ve dış mekânı kesintisiz birleştirir. Yüksek ısı yalıtımı sağlayan çift cam yapısıyla dört mevsim konfor sunar.',
    image: images.services['isi-camli-surme'],
    advantages: [
      A('Geniş Açıklık', 'Büyük cam panellerle ferah geçişler.'),
      A('Isı Yalıtımı', 'Çift ısı camı ile enerji tasarrufu.'),
      A('Kolay Kullanım', 'Sessiz ve akıcı sürgü mekanizması.'),
      A('Modern Görünüm', 'İnce profil ile kesintisiz manzara.'),
    ],
    specs: [
      S('Sistem', 'Sürme (slide) / kaldır-sür'),
      S('Cam', 'Çift ısı camı, Low-E'),
      S('Profil', 'Alüminyum, yalıtımlı'),
      S('Kilit', 'Çok noktalı donanım'),
    ],
    useCases: ['Salon & teras geçişleri', 'Villa cepheleri', 'Kafe & restoran', 'Kış bahçesi'],
    faq: [
      { q: 'Sineklik takılabilir mi?', a: 'Evet, plise veya sürme sineklik entegrasyonu mümkündür.' },
      { q: 'Zemine ray gömülür mü?', a: 'Eşiksiz geçiş için zemine gömülü ray uygulaması yapılabilir.' },
    ],
  },
  {
    slug: 'schuco-pvc',
    category: 'PVC',
    title: 'Schüco PVC Sistemleri',
    short: 'Alman mühendisliğiyle üretilen, üstün yalıtımlı premium PVC pencere ve kapı sistemleri.',
    intro:
      'Schüco PVC sistemleri, Alman mühendislik kalitesiyle üstün ısı ve ses yalıtımı sunar. Çok odacıklı profil yapısı ve yüksek güvenlik donanımlarıyla premium konut projelerinin tercihidir.',
    image: images.services['schuco-pvc'],
    advantages: [
      A('Premium Yalıtım', 'Çok odacıklı profil ile üstün enerji performansı.'),
      A('Alman Kalitesi', 'Yüksek standartlı üretim ve dayanıklılık.'),
      A('Güvenlik', 'Çok noktalı kilit ve güvenlik donanımları.'),
      A('Estetik', 'İnce görünümlü, geniş renk seçenekleri.'),
    ],
    specs: [
      S('Profil', 'Çok odacıklı PVC'),
      S('Cam', 'Çift / üçlü ısı camı'),
      S('Contalar', 'Çift / orta conta'),
      S('Donanım', 'Yüksek güvenlik sınıfı'),
    ],
    useCases: ['Premium konutlar', 'Villa projeleri', 'İş merkezleri', 'Rezidanslar'],
    faq: [
      { q: 'Diğer PVC’den farkı nedir?', a: 'Daha yüksek yalıtım değerleri, kalite standartları ve donanım seçenekleri sunar.' },
      { q: 'Renk seçeneği var mı?', a: 'Ahşap dahil geniş folyo kaplama renk yelpazesi mevcuttur.' },
    ],
  },
  {
    slug: 'kommerling-pvc',
    category: 'PVC',
    title: 'Kömmerling PVC Sistemleri',
    short: 'Yüksek yalıtım ve dayanıklılık sunan, çevre dostu premium PVC profil sistemleri.',
    intro:
      'Kömmerling PVC sistemleri; yüksek ısı-ses yalıtımı, uzun ömür ve çevre dostu üretim anlayışıyla öne çıkar. GreenLine teknolojili profilleriyle sağlıklı ve enerji verimli yaşam alanları oluşturur.',
    image: images.services['kommerling-pvc'],
    advantages: [
      A('Yüksek Yalıtım', 'Çok odacıklı yapı ile enerji tasarrufu.'),
      A('Uzun Ömür', 'UV dayanımlı, renk atmayan yüzey.'),
      A('Çevre Dostu', 'Kurşunsuz, sağlıklı profil teknolojisi.'),
      A('Sessizlik', 'Şehir gürültüsüne karşı etkili ses yalıtımı.'),
    ],
    specs: [
      S('Profil', '70–88 mm çok odacıklı'),
      S('Cam', 'Çift / üçlü ısı camı'),
      S('Contalar', 'Çift / orta conta'),
      S('Renk', 'Beyaz & folyo kaplama'),
    ],
    useCases: ['Konut projeleri', 'Toplu konut', 'Villa pencereleri', 'Yenileme projeleri'],
    faq: [
      { q: 'GreenLine nedir?', a: 'Kurşun içermeyen, çevre ve sağlık dostu profil üretim teknolojisidir.' },
      { q: 'Isı yalıtımı ne kadar?', a: 'Profil serisi ve cam paketine göre yüksek yalıtım değerleri sağlanır.' },
    ],
  },
  {
    slug: 'panjur',
    category: 'Güvenlik',
    title: 'Panjur Sistemleri',
    short: 'Isı, ışık ve güvenlik kontrolü sağlayan motorlu ve manuel panjur çözümleri.',
    intro:
      'Panjur sistemleri; ısı yalıtımı, ışık kontrolü ve güvenlik sağlayan çok yönlü çözümlerdir. Monoblok ve dıştan takma seçenekleriyle hem yeni hem mevcut yapılara uygundur.',
    image: images.services['panjur'],
    advantages: [
      A('Isı Yalıtımı', 'Poliüretan dolgulu lameller ile yalıtım.'),
      A('Işık Kontrolü', 'Tam karartma ve kademeli ışık ayarı.'),
      A('Güvenlik', 'Ekstra güvenlik bariyeri oluşturur.'),
      A('Motorlu Konfor', 'Kumanda ve akıllı ev entegrasyonu.'),
    ],
    specs: [
      S('Lamel', 'Alüminyum, PU dolgulu'),
      S('Tip', 'Monoblok / dıştan takma'),
      S('Kontrol', 'Manuel / motorlu'),
      S('Renk', 'Geniş RAL seçeneği'),
    ],
    useCases: ['Konut pencereleri', 'Villa cepheleri', 'Otel odaları', 'Ticari yapılar'],
    faq: [
      { q: 'Elektrik kesintisinde çalışır mı?', a: 'Akülü opsiyon veya manuel devirme ile kesintisiz kullanım sağlanır.' },
      { q: 'Sineklik ile birlikte olur mu?', a: 'Evet, entegre sineklikli panjur kasetleri mevcuttur.' },
    ],
  },
  {
    slug: 'kepenk',
    category: 'Güvenlik',
    title: 'Kepenk Sistemleri',
    short: 'İş yerleri ve depolar için yüksek güvenlikli otomatik kepenk çözümleri.',
    intro:
      'Kepenk sistemleri, iş yerleri ve ticari alanlar için üst düzey güvenlik ve dayanıklılık sağlar. Otomatik ve manuel seçenekleriyle hızlı ve güvenli açılım-kapanım sunar.',
    image: images.services['kepenk'],
    advantages: [
      A('Yüksek Güvenlik', 'Sağlam çelik/alüminyum lamel yapısı.'),
      A('Otomatik Kullanım', 'Motorlu ve kumandalı hızlı açılım.'),
      A('Dayanıklılık', 'Yoğun kullanıma uygun mekanizma.'),
      A('Acil Kontrol', 'Elektrik kesintisinde manuel açılım.'),
    ],
    specs: [
      S('Lamel', 'Çelik / alüminyum / poliüretan'),
      S('Kontrol', 'Motorlu / manuel'),
      S('Ölçü', 'Projeye özel'),
      S('Opsiyon', 'Delikli lamel, acil çıkış'),
    ],
    useCases: ['Mağazalar', 'Depolar', 'Otoparklar', 'Sanayi tesisleri'],
    faq: [
      { q: 'Delikli lamel var mı?', a: 'Vitrin görünürlüğü için delikli/şeffaf lamel seçenekleri mevcuttur.' },
      { q: 'Ne kadar dayanıklıdır?', a: 'Endüstriyel motorlar yüksek açılış-kapanış döngüsüne uygundur.' },
    ],
  },
  {
    slug: 'aluminyum-cit',
    category: 'Alüminyum',
    title: 'Alüminyum Çit Sistemleri',
    short: 'Bahçe ve site çevreleri için modern, dayanıklı ve bakım gerektirmeyen çit sistemleri.',
    intro:
      'Alüminyum çit sistemleri; korozyona dayanıklı yapısı, modern lamel tasarımları ve geniş renk seçenekleriyle bahçe ve arsa çevrelerine estetik ve güvenli bir sınır oluşturur.',
    image: images.services['aluminyum-cit'],
    advantages: [
      A('Bakım Gerektirmez', 'Paslanmaz, boya istemeyen alüminyum yapı.'),
      A('Modern Tasarım', 'Yatay/dikey lamel ve dolu-boşluk seçenekleri.'),
      A('Uzun Ömür', 'Dış hava koşullarına yüksek dayanım.'),
      A('Özel Ölçü', 'Araziye özel yükseklik ve genişlik.'),
    ],
    specs: [
      S('Malzeme', 'Ekstrüzyon alüminyum'),
      S('Lamel', 'Yatay / dikey'),
      S('Kaplama', 'Elektrostatik toz boya'),
      S('Opsiyon', 'Bahçe kapısı entegrasyonu'),
    ],
    useCases: ['Villa bahçeleri', 'Site çevreleri', 'Havuz alanları', 'Ticari araziler'],
    faq: [
      { q: 'Mahremiyet sağlar mı?', a: 'Dolu lamel veya dar aralıklı tasarımlarla mahremiyet sağlanır.' },
      { q: 'Kapı da yapılıyor mu?', a: 'Uyumlu yaya ve bahçe kapıları birlikte üretilebilir.' },
    ],
  },
  {
    slug: 'aluminyum-panel-kapi',
    category: 'Alüminyum',
    title: 'Alüminyum Panel Kapılar',
    short: 'Villa girişleri için ısı yalıtımlı, güvenli ve prestijli alüminyum panel kapılar.',
    intro:
      'Alüminyum panel kapılar; şık tasarımları, ısı yalıtımlı dolgu panelleri ve yüksek güvenlik donanımlarıyla villa ve konut girişlerine prestij katar. Geniş model ve renk seçenekleri sunar.',
    image: images.services['aluminyum-panel-kapi'],
    advantages: [
      A('Prestijli Giriş', 'Modern panel tasarımları ile şık görünüm.'),
      A('Isı Yalıtımı', 'Dolgulu panel ile enerji tasarrufu.'),
      A('Güvenlik', 'Çok noktalı kilit donanımları.'),
      A('Dayanıklılık', 'Korozyona ve deformasyona dayanıklı.'),
    ],
    specs: [
      S('Panel', 'Isı yalıtımlı dolgulu'),
      S('Kilit', 'Çok noktalı güvenlik'),
      S('Yüzey', 'Düz / desenli, ahşap görünüm'),
      S('Opsiyon', 'Cam detay, parmak izi okuyucu'),
    ],
    useCases: ['Villa girişleri', 'Müstakil konutlar', 'Bina girişleri', 'Ofis girişleri'],
    faq: [
      { q: 'Akıllı kilit takılır mı?', a: 'Parmak izi ve şifreli akıllı kilit seçenekleri entegre edilebilir.' },
      { q: 'Ölçüye özel mi?', a: 'Evet, tüm kapılar mekâna özel ölçülerle üretilir.' },
    ],
  },
  {
    slug: 'aluminyum-katlanir-kapi',
    category: 'Alüminyum',
    title: 'Alüminyum Katlanır Kapılar',
    short: 'Yana katlanarak tam açılan, geniş açıklıklı akordeon tipi cam kapı sistemleri.',
    intro:
      'Alüminyum katlanır (akordeon) kapılar, panelleri yana katlayarak açıklığı tamamen açar. İç ve dış mekânı kesintisiz birleştiren esnek ve modern bir çözümdür.',
    image: images.services['aluminyum-katlanir-kapi'],
    advantages: [
      A('Tam Açılım', 'Paneller katlanarak açıklık tamamen açılır.'),
      A('Geniş Kullanım', 'Büyük açıklıklar için ideal esneklik.'),
      A('Isı Yalıtımı', 'Yalıtımlı profil ve ısı camı seçeneği.'),
      A('Modern Estetik', 'İnce profil ve geniş cam yüzeyler.'),
    ],
    specs: [
      S('Sistem', 'Katlanır (bi-fold)'),
      S('Cam', 'Çift ısı camı / temperli'),
      S('Profil', 'Alüminyum, yalıtımlı'),
      S('Panel', 'İhtiyaca göre panel sayısı'),
    ],
    useCases: ['Salon-teras geçişleri', 'Restoran & kafe', 'Villa cepheleri', 'Kış bahçesi'],
    faq: [
      { q: 'Kaç panel olabilir?', a: 'Açıklığa göre panel sayısı ve katlanma yönü projelendirilir.' },
      { q: 'Eşiksiz olur mu?', a: 'Zemine gömülü ray ile eşiksiz geçiş sağlanabilir.' },
    ],
  },
  {
    slug: 'pergola-tente',
    category: 'Gölgelendirme',
    title: 'Pergola & Tente',
    short: 'Mafsallı, kasetli ve sabit tente sistemleri ile estetik gölgelendirme.',
    intro:
      'Pergola ve tente sistemleri, dış mekânlarınızda güneşe karşı estetik ve fonksiyonel gölgelendirme sağlar. Mafsallı, kasetli ve kutu tip seçenekleriyle her mekâna uygun çözümler sunuyoruz.',
    image: images.services['pergola-tente'],
    advantages: [
      A('Estetik Görünüm', 'Mimariye uyumlu şık tasarımlar.'),
      A('Geniş Açıklık', 'Büyük alanlarda kesintisiz gölge.'),
      A('Dayanıklı Kumaş', 'Su itici, UV korumalı akrilik kumaş.'),
      A('Kolay Kullanım', 'Manuel veya motorlu açılım.'),
    ],
    specs: [
      S('Tip', 'Mafsallı / kasetli / kutu'),
      S('Kumaş', 'Akrilik, su itici'),
      S('Kontrol', 'Manuel / motorlu'),
      S('Genişlik', 'Projeye özel ölçü'),
    ],
    useCases: ['Ev balkonları', 'Kafe & restoran', 'Mağaza cepheleri', 'Villa bahçeleri'],
    faq: [
      { q: 'Yağmurda açık kalabilir mi?', a: 'Su itici kumaşlar hafif yağmura dayanır; yoğun yağışta kapatılması önerilir.' },
      { q: 'Rüzgâr sensörü var mı?', a: 'Motorlu modellerde rüzgâr sensörü ile otomatik kapanma sağlanır.' },
    ],
  },
  {
    slug: 'hebeschiebe-surme',
    category: 'Cam Sistemleri',
    title: 'Hebeschiebe Sürme Sistemler',
    short: 'Kaldır-sür teknolojisiyle çalışan, büyük ve ağır cam panelli premium sürme sistemler.',
    intro:
      'Hebeschiebe (kaldır-sür) sistemler, büyük ve ağır cam panellerin dahi zahmetsizce kaydırılmasını sağlar. Panel kaldırıldığında contalar devreye girerek üstün ısı, ses ve su yalıtımı sunar.',
    image: images.services['hebeschiebe-surme'],
    advantages: [
      A('Büyük Paneller', 'Ağır ve büyük camları kolay hareket.'),
      A('Üstün Yalıtım', 'Kapalıyken sıkışan contalarla tam yalıtım.'),
      A('Konforlu Kullanım', 'Kaldır-sür mekanizması ile akıcı hareket.'),
      A('Kesintisiz Manzara', 'Geniş cam yüzeyi ile ferah geçişler.'),
    ],
    specs: [
      S('Sistem', 'Kaldır-sür (lift & slide)'),
      S('Cam', 'Çift / üçlü ısı camı'),
      S('Profil', 'Alüminyum / PVC, yalıtımlı'),
      S('Eşik', 'Alçak / gömülü ray opsiyonu'),
    ],
    useCases: ['Villa cepheleri', 'Salon-teras geçişleri', 'Deniz manzaralı konutlar', 'Lüks projeler'],
    faq: [
      { q: 'Ne kadar büyük olabilir?', a: 'Sistem, geniş ve ağır panelleri taşıyacak şekilde projelendirilebilir.' },
      { q: 'Kışın soğuk geçirir mi?', a: 'Kapalı konumda contalar sıkışarak yüksek ısı yalıtımı sağlar.' },
    ],
  },
  {
    slug: 'otomatik-kapi',
    category: 'Otomatik Kapı',
    title: 'Fotoselli Otomatik Kapı',
    short: 'Fotoselli, dönel ve sürme otomatik kapılar ile modern ve konforlu geçişler.',
    intro:
      'Otomatik kapı sistemleri; fotoselli sürme, dönel ve endüstriyel modelleriyle yüksek yaya trafiğine sahip alanlarda konfor, hijyen ve enerji verimliliği sağlar.',
    image: images.services['otomatik-kapi'],
    advantages: [
      A('Konforlu Geçiş', 'Temassız, hijyenik otomatik açılım.'),
      A('Enerji Verimliliği', 'Hızlı kapanma ile ısı kaybını azaltır.'),
      A('Güvenlik Sensörleri', 'Sıkışma önleyici emniyet sistemleri.'),
      A('Sessiz Çalışma', 'Düşük gürültülü kaliteli motorlar.'),
    ],
    specs: [
      S('Tip', 'Sürme / dönel / endüstriyel'),
      S('Sensör', 'Fotosel / radar / buton'),
      S('Cam', 'Temperli güvenlik camı'),
      S('Opsiyon', 'UPS, erişim kontrolü'),
    ],
    useCases: ['AVM & mağaza girişleri', 'Hastane & klinikler', 'Oteller', 'Ofis binaları'],
    faq: [
      { q: 'Elektrik kesilince açılır mı?', a: 'UPS opsiyonu veya manuel açılım ile güvenli geçiş sağlanır.' },
      { q: 'Erişim kontrolü eklenebilir mi?', a: 'Kartlı geçiş ve otomasyon sistemleriyle entegre edilebilir.' },
    ],
  },
  {
    slug: 'salamander-pvc',
    category: 'PVC',
    title: 'Salamander PVC Sistemleri',
    short: 'Alman menşeli, yüksek yalıtım ve estetik sunan kaliteli PVC pencere sistemleri.',
    intro:
      'Salamander PVC sistemleri, Alman kalite standartlarıyla üstün ısı-ses yalıtımı ve şık tasarım sunar. Dayanıklı profilleri ve geniş renk seçenekleriyle konfor ve estetiği bir arada verir.',
    image: images.services['salamander-pvc'],
    advantages: [
      A('Yüksek Yalıtım', 'Çok odacıklı profil ile enerji tasarrufu.'),
      A('Alman Kalitesi', 'Uzun ömürlü ve dayanıklı üretim.'),
      A('Şık Tasarım', 'İnce görünüm ve geniş renk yelpazesi.'),
      A('Ses Konforu', 'Etkili ses yalıtımı ile sessiz mekânlar.'),
    ],
    specs: [
      S('Profil', 'Çok odacıklı PVC'),
      S('Cam', 'Çift / üçlü ısı camı'),
      S('Contalar', 'Çift / orta conta'),
      S('Renk', 'Beyaz & folyo kaplama'),
    ],
    useCases: ['Konut projeleri', 'Villa pencereleri', 'Toplu konut', 'Yenileme projeleri'],
    faq: [
      { q: 'Hangi seri uygun?', a: 'İhtiyacınıza göre yalıtım ve estetik önceliğine uygun seri önerilir.' },
      { q: 'Renk seçeneği var mı?', a: 'Ahşap dahil geniş folyo kaplama renkleri mevcuttur.' },
    ],
  },
  {
    slug: 'kasetli-tente',
    category: 'Gölgelendirme',
    title: 'Kasetli Tente',
    short: 'Kumaşı tam koruyan kapalı kaset yapısına sahip şık ve dayanıklı tente sistemleri.',
    intro:
      'Kasetli tente sistemleri, kapalı konumda kumaşı ve mekanizmayı tamamen içine alan kaset yapısıyla uzun ömür ve şık bir görünüm sağlar. Balkon ve cephelerde estetik gölgelendirme sunar.',
    image: images.services['kasetli-tente'],
    advantages: [
      A('Kumaş Koruması', 'Kapalı kaset kumaşı dış etkenlerden korur.'),
      A('Şık Görünüm', 'Kapalıyken gizlenen zarif tasarım.'),
      A('Uzun Ömür', 'Mekanizma korunduğu için dayanıklı.'),
      A('Motorlu Opsiyon', 'Kumanda ve güneş sensörü entegrasyonu.'),
    ],
    specs: [
      S('Tip', 'Tam kasetli / yarı kasetli'),
      S('Kumaş', 'Akrilik, su itici'),
      S('Kontrol', 'Manuel / motorlu'),
      S('Genişlik', 'Projeye özel ölçü'),
    ],
    useCases: ['Ev balkonları', 'Kafe cepheleri', 'Mağaza vitrinleri', 'Teraslar'],
    faq: [
      { q: 'Kumaş kirlenir mi?', a: 'Kapalı kaset sayesinde kumaş toz ve yağmurdan korunur, temiz kalır.' },
      { q: 'Rüzgâr sensörü var mı?', a: 'Motorlu modellerde rüzgâr/güneş sensörü eklenebilir.' },
    ],
  },
  {
    slug: 'cam-balkon',
    category: 'Cam Sistemleri',
    title: 'Cam Balkon Sistemleri',
    short: 'Katlanır ve sürme cam paneller ile balkonunuzu dört mevsim yaşam alanına çevirin.',
    intro:
      'Katlanır cam balkon sistemleri, profilsiz veya ince profilli yapısıyla balkonunuzu rüzgâr, toz ve gürültüden korurken kesintisiz manzara sunar. İstediğinizde tamamen açılabilir esnek yapı.',
    image: images.services['cam-balkon'],
    advantages: [
      A('Katlanabilir Panel', 'Tüm paneller yana katlanarak tam açılım.'),
      A('Rüzgâr & Toz Koruması', 'Balkonunuzu dış etkenlerden korur.'),
      A('Şık Görünüm', 'Çerçevesiz cam ile modern estetik.'),
      A('Kolay Temizlik', 'Panellerin içe dönmesiyle pratik temizlik.'),
    ],
    specs: [
      S('Sistem', 'Katlanır / sürme'),
      S('Cam', '8 mm temperli'),
      S('Ray', 'Alt/üst çift ray'),
      S('Renk', 'RAL renk seçenekleri'),
    ],
    useCases: ['Apartman balkonları', 'Villa terasları', 'Kafe alanları', 'Ofis dinlenme alanları'],
    faq: [
      { q: 'Isı yalıtımı sağlar mı?', a: 'Isı camı opsiyonu ile sıcaklık kontrolü sağlanabilir.' },
      { q: 'Sineklik takılabilir mi?', a: 'Evet, plise sineklik entegrasyonu mümkündür.' },
    ],
  },
  {
    slug: 'seksiyonel-garaj',
    category: 'Otomatik Kapı',
    title: 'Seksiyonel Garaj Kapıları',
    short: 'Isı yalıtımlı, tavana paralel açılan modern ve güvenli garaj kapı sistemleri.',
    intro:
      'Seksiyonel garaj kapıları, tavana paralel açılarak maksimum alan tasarrufu sağlar. Isı yalıtımlı panelleri ve sessiz motorlarıyla modern konutların vazgeçilmez çözümüdür.',
    image: images.services['seksiyonel-garaj'],
    advantages: [
      A('Alan Tasarrufu', 'Tavana paralel açılım, önde yer kaplamaz.'),
      A('Isı Yalıtımı', 'PU dolgulu sandviç paneller.'),
      A('Sessiz Motor', 'Konforlu ve düşük sesli çalışma.'),
      A('Güvenlik', 'Sıkışma sensörü ve parmak korumalı panel.'),
    ],
    specs: [
      S('Panel', '40 mm PU dolgulu'),
      S('Açılım', 'Tavana paralel'),
      S('Motor', 'Sessiz, kumandalı'),
      S('Yüzey', 'Düz / kaset / ahşap desen'),
    ],
    useCases: ['Villa garajları', 'Site otoparkları', 'Ticari garajlar', 'Apartman girişleri'],
    faq: [
      { q: 'Yan kapı eklenebilir mi?', a: 'İçinden geçiş için entegre yaya kapısı opsiyonu mevcuttur.' },
      { q: 'Renk seçeneği var mı?', a: 'Geniş RAL ve ahşap desen seçenekleri sunulmaktadır.' },
    ],
  },
  {
    slug: 'plisseri-sineklik',
    category: 'Aksesuar',
    title: 'Plisseri Sineklik',
    short: 'Katlanabilir plise yapısıyla estetik ve kullanışlı modern sineklik sistemleri.',
    intro:
      'Plisseri (plise) sineklik sistemleri, akordeon şeklinde katlanan zarif yapısıyla pencere ve kapılarınıza estetik bir böcek koruması sunar. Az yer kaplar, kolay kullanılır ve uzun ömürlüdür.',
    image: images.services['plisseri-sineklik'],
    advantages: [
      A('Estetik Yapı', 'Katlanabilir plise ile şık görünüm.'),
      A('Kolay Kullanım', 'Yumuşak ve sessiz açılıp kapanma.'),
      A('Az Yer Kaplar', 'İnce kaset ile minimum alan.'),
      A('Geniş Uyum', 'Pencere ve kapılara uygulanabilir.'),
    ],
    specs: [
      S('Tip', 'Plise (akordeon)'),
      S('Uygulama', 'Pencere / kapı / sürme'),
      S('Tül', 'Fiberglas / özel örgü'),
      S('Renk', 'Kasa renk seçenekleri'),
    ],
    useCases: ['Konut pencereleri', 'Balkon kapıları', 'Sürme sistemler', 'Kafe & restoran'],
    faq: [
      { q: 'Eşiksiz olur mu?', a: 'Alçak profil taban seçenekleriyle rahat geçiş sağlanır.' },
      { q: 'Çift yönlü olur mu?', a: 'Geniş açıklıklar için çift kanatlı plise seçeneği mevcuttur.' },
    ],
  },
  {
    slug: 'sundurma',
    category: 'Gölgelendirme',
    title: 'Sundurma Sistemleri',
    short: 'Giriş, teras ve otopark alanları için dayanıklı cam ve polikarbon sundurma çözümleri.',
    intro:
      'Sundurma sistemleri; giriş, teras ve araç alanlarını yağmur ve güneşten koruyan kalıcı gölgelendirme çözümleridir. Alüminyum taşıyıcı ile cam veya polikarbon örtü seçenekleri sunar.',
    image: images.services['sundurma'],
    advantages: [
      A('Kalıcı Koruma', 'Yağmur ve güneşe karşı sabit örtü.'),
      A('Dayanıklı Yapı', 'Alüminyum taşıyıcı konstrüksiyon.'),
      A('Estetik', 'Mimariyle uyumlu modern tasarım.'),
      A('Özel Ölçü', 'Alana özel projelendirme ve üretim.'),
    ],
    specs: [
      S('Taşıyıcı', 'Alüminyum konstrüksiyon'),
      S('Örtü', 'Cam / polikarbon'),
      S('Montaj', 'Duvara / ayaklı'),
      S('Opsiyon', 'LED, oluk, yan kapama'),
    ],
    useCases: ['Bina girişleri', 'Villa terasları', 'Otopark alanları', 'İş yeri girişleri'],
    faq: [
      { q: 'Cam mı polikarbon mu?', a: 'Estetik için cam, ekonomi ve darbe dayanımı için polikarbon önerilir.' },
      { q: 'Kar yükü taşır mı?', a: 'Konstrüksiyon bölgeye göre kar ve rüzgâr yüküne uygun projelendirilir.' },
    ],
  },
  {
    slug: 'havuz-kapama',
    category: 'Cam Sistemleri',
    title: 'Havuz Kapama Sistemleri',
    short: 'Havuzunuzu dört mevsim kullanılabilir kılan sürme ve teleskopik cam kapama sistemleri.',
    intro:
      'Havuz kapama sistemleri, teleskopik ve sürme yapısıyla havuzunuzu kapatarak dört mevsim kullanım, güvenlik ve temizlik sağlar. Isı kaybını azaltır, bakım maliyetlerini düşürür.',
    image: images.services['havuz-kapama'],
    advantages: [
      A('Dört Mevsim Kullanım', 'Havuzu kapatarak yıl boyu keyif.'),
      A('Güvenlik', 'Çocuk ve evcil hayvanlar için koruma.'),
      A('Temizlik', 'Yaprak ve kirden koruyarak bakım kolaylığı.'),
      A('Isı Koruması', 'Su ısısını koruyarak enerji tasarrufu.'),
    ],
    specs: [
      S('Sistem', 'Teleskopik / sürme'),
      S('Örtü', 'Polikarbon / cam'),
      S('Taşıyıcı', 'Alüminyum ray'),
      S('Yükseklik', 'Alçak / yüksek model'),
    ],
    useCases: ['Villa havuzları', 'Otel & resort', 'Site havuzları', 'Spa & wellness'],
    faq: [
      { q: 'İçinde yüzülebilir mi?', a: 'Yüksek modellerde kapama içinde yüzme ve kullanım mümkündür.' },
      { q: 'Rüzgârda güvenli mi?', a: 'Sağlam ray ve kilit sistemleriyle rüzgâra dayanıklıdır.' },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceCount = `${services.length}+`;

// Navbar mega-menü için kategori bazlı gruplama
export const serviceCategoryOrder = [
  'Cam & Alüminyum',
  'Cam Sistemleri',
  'Alüminyum',
  'PVC',
  'Gölgelendirme',
  'Güvenlik',
  'Otomatik Kapı',
  'Aksesuar',
];

export const serviceGroups = serviceCategoryOrder
  .map((category) => ({
    category,
    items: services.filter((s) => s.category === category),
  }))
  .filter((g) => g.items.length > 0);
