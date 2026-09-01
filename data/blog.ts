import { images } from './images';

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: string;
  cover: string;
  content: string[]; // paragraflar
};

export const posts: Post[] = [
  {
    slug: 'pvc-aluminyum-karsilastirmasi',
    title: 'PVC ve Alüminyum Karşılaştırması: Hangisi Sizin İçin Doğru?',
    category: 'Rehber',
    excerpt:
      'PVC ve alüminyum doğrama sistemlerini ısı yalıtımı, dayanıklılık, estetik ve maliyet açısından karşılaştırıyoruz.',
    date: '2026-08-12',
    readingTime: '6 dk',
    cover: images.blog.b1,
    content: [
      'Pencere ve kapı sistemleri seçiminde en çok karşılaşılan sorulardan biri PVC ile alüminyum arasındaki farktır. Her iki malzemenin de kendine özgü avantajları vardır ve doğru seçim, projenin ihtiyaçlarına bağlıdır.',
      'PVC sistemler, üstün ısı ve ses yalıtımı sunar. Çok odacıklı profil yapısı sayesinde enerji tasarrufu sağlar ve genellikle daha ekonomiktir. Bakım gerektirmeyen yüzeyi ile konut projelerinde sıkça tercih edilir.',
      'Alüminyum sistemler ise yüksek mukavemeti ve ince profil estetiği ile öne çıkar. Büyük cam yüzeyler ve geniş açıklıklar gerektiren modern mimari projelerde idealdir. Isı yalıtımlı (termal bariyerli) seriler ile enerji performansı da güçlüdür.',
      'Özetle: Maksimum yalıtım ve ekonomi öncelikliyse PVC, ince profil ve büyük açıklıklar öncelikliyse alüminyum öne çıkar. Karma projelerde her iki sistemin birlikte kullanıldığı çözümler de mümkündür.',
    ],
  },
  {
    slug: 'kis-bahcesi-secerken-dikkat',
    title: 'Kış Bahçesi Seçerken Nelere Dikkat Edilmeli?',
    category: 'Rehber',
    excerpt:
      'Dört mevsim kullanılabilir bir kış bahçesi için ısı yalıtımı, cam seçimi ve havalandırma detayları.',
    date: '2026-07-28',
    readingTime: '5 dk',
    cover: images.blog.b2,
    content: [
      'Kış bahçesi, yaşam alanınızı doğayla buluşturan ve dört mevsim keyifle kullanabileceğiniz bir alandır. Ancak doğru sistem seçilmezse konfor beklentisi karşılanmayabilir.',
      'İlk dikkat edilmesi gereken nokta ısı yalıtımıdır. Termal bariyerli alüminyum profiller ve Low-E kaplamalı ısı camları, yazın serin kışın sıcak bir ortam sağlar.',
      'Havalandırma da kritik öneme sahiptir. Motorlu çatı pencereleri ve yan açılımlar, iç mekânda ideal hava sirkülasyonu oluşturur ve yoğuşmayı önler.',
      'Son olarak, çatı eğimi ve su tahliyesi doğru projelendirilmeli; kullanılacak camlar güvenlik (temperli/lamine) standartlarına uygun seçilmelidir.',
    ],
  },
  {
    slug: 'pergola-sistemleri-rehberi',
    title: 'Pergola Sistemleri Rehberi: Bioklimatik, Kasetli ve Sabit',
    category: 'Rehber',
    excerpt:
      'Farklı pergola tiplerini, kullanım alanlarını ve seçim kriterlerini bu rehberde ele alıyoruz.',
    date: '2026-07-10',
    readingTime: '7 dk',
    cover: images.blog.b3,
    content: [
      'Pergola sistemleri, dış mekânları yaşanabilir alanlara dönüştüren en etkili çözümlerden biridir. Doğru pergola tipini seçmek, kullanım amacına göre değişir.',
      'Bioklimatik pergolalar, ayarlanabilir lamelleri sayesinde güneş, hava ve yağmuru kontrol eder. Akıllı ev entegrasyonu ile en konforlu seçenektir.',
      'Kasetli ve mafsallı tente sistemleri ise daha ekonomik gölgelendirme sağlar ve dar alanlar için uygundur. Sabit pergolalar ise dekoratif ve kalıcı çözümler sunar.',
      'Seçim yaparken alanın büyüklüğü, kullanım sıklığı, iklim koşulları ve bütçe göz önünde bulundurulmalıdır.',
    ],
  },
  {
    slug: 'giyotin-cam-sistemleri',
    title: 'Giyotin Cam Sistemleri: Modern Kapatmanın Yeni Standardı',
    category: 'Sistemler',
    excerpt:
      'Giyotin cam sistemlerinin avantajları, kullanım alanları ve dikkat edilmesi gereken noktalar.',
    date: '2026-06-22',
    readingTime: '5 dk',
    cover: images.blog.b4,
    content: [
      'Giyotin cam sistemleri, camların dikey olarak yukarı-aşağı hareket ettiği modern kapatma çözümleridir. Alan tasarrufu ve kesintisiz manzara sunmasıyla öne çıkar.',
      'İnce alüminyum profilleri sayesinde maksimum cam yüzeyi elde edilir ve mekân daha ferah görünür. Manuel veya motorlu seçenekleri mevcuttur.',
      'Balkon kapatma, kafe cepheleri ve kış bahçelerinde sıkça tercih edilir. Çok noktalı kilit sistemleri güvenlik ve rüzgâr dayanımı sağlar.',
      'Doğru cam kalınlığı ve kaliteli ray mekanizması, sistemin uzun ömürlü ve sorunsuz çalışması için kritik öneme sahiptir.',
    ],
  },
  {
    slug: 'aluminyum-dograma-rehberi',
    title: 'Alüminyum Doğrama Rehberi: Seri, Cam ve Renk Seçimi',
    category: 'Rehber',
    excerpt:
      'Alüminyum doğrama seçiminde profil serisi, cam paketi ve renk kararlarını nasıl vermelisiniz?',
    date: '2026-06-05',
    readingTime: '6 dk',
    cover: images.blog.b5,
    content: [
      'Alüminyum doğrama, modern mimarinin en çok tercih edilen sistemlerinden biridir. Doğru seçim için birkaç temel kritere dikkat edilmelidir.',
      'Profil serisi, yalıtım ihtiyacına göre belirlenir. Termal bariyerli seriler ısı yalıtımı gereken mekânlar için idealdir.',
      'Cam paketi, iklim ve gürültü koşullarına göre seçilir. Çift veya üçlü ısı camları enerji verimliliği sağlar.',
      'Renk ve yüzey seçenekleri geniştir; elektrostatik toz boya ve ahşap desenli kaplamalar ile mimariye uyum sağlanır.',
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
