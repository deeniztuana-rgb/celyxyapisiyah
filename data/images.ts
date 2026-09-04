/**
 * Merkezi görsel yönetimi.
 * Tüm görsel URL'leri burada tutulur; kendi görsellerinizle kolayca değiştirebilirsiniz.
 * Yüksek kaliteli mimari fotoğraflar (Unsplash) kullanılmıştır.
 */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // Hero — modern lüks mimari
  hero: u('photo-1600585154340-be6161a56a0c', 2000),
  heroAlt: u('photo-1600607687939-ce8a6c25118c', 2000),

  // Öne çıkan sistem (kış bahçesi / cam)
  featuredWinterGarden: u('photo-1600566753086-00f18fb6b3ea', 1400),

  // Kurumsal
  aboutStudio: u('photo-1503387762-592deb58ef4e', 1600),
  aboutTeam: u('photo-1600880292203-757bb62b4baf', 1400),
  aboutProduction: u('photo-1504307651254-35680f356dfd', 1400),
  aboutDetail: u('photo-1497366216548-37526070297c', 1400),

  // Hizmet görselleri
  services: {
    'kis-bahcesi': u('photo-1600566753086-00f18fb6b3ea', 1200),
    'bioklimatik-pergola': u('photo-1600607687920-4e2a09cf159d', 1200),
    'ofis-bolme': u('photo-1497366216548-37526070297c', 1200),
    'aluminyum-dograma': u('photo-1489171078254-c3365d6e359f', 1200),
    'zip-perde': u('photo-1615529182904-14819c35db37', 1200),
    'giyotin-cam': u('photo-1600585154526-990dced4db0d', 1200),
    'isi-camli-surme': u('photo-1600210492486-724fe5c67fb0', 1200),
    'pvc-pencere': u('photo-1558618666-fcd25c85cd64', 1200),
    'pvc-surme': u('photo-1600585154340-be6161a56a0c', 1200),
    'panjur': u('photo-1600566752355-35792bedcfea', 1200),
    'kepenk': u('photo-1581092160562-40aa08e78837', 1200),
    'aluminyum-cit': u('photo-1523217582562-09d0def993a6', 1200),
    'aluminyum-panel-kapi': u('photo-1558036117-15d82a90b9b1', 1200),
    'aluminyum-katlanir-kapi': u('photo-1600607687939-ce8a6c25118c', 1200),
    'pergola-tente': u('photo-1600585153490-76fb20a32601', 1200),
    'kaldir-sur': u('photo-1512917774080-9991f1c4c750', 1200),
    'otomatik-kapi': u('photo-1497215728101-856f4ea42174', 1200),
    'pvc-isi-yalitimli': u('photo-1503387762-592deb58ef4e', 1200),
    'kasetli-tente': u('photo-1600607687920-4e2a09cf159d', 1200),
    'cam-balkon': u('photo-1600210492486-724fe5c67fb0', 1200),
    'seksiyonel-garaj': u('photo-1558036117-15d82a90b9b1', 1200),
    'plisseri-sineklik': u('photo-1449844908441-8829872d2607', 1200),
    'sundurma': u('photo-1523217582562-09d0def993a6', 1200),
    'havuz-kapama': u('photo-1580587771525-78b9dba3b914', 1200),
    'pvc-kapi-pencere': u('photo-1558618666-fcd25c85cd64', 1200),
  } as Record<string, string>,

  // Proje görselleri
  projects: {
    p1: u('photo-1600585154340-be6161a56a0c', 1400),
    p2: u('photo-1600607687939-ce8a6c25118c', 1400),
    p3: u('photo-1600566753086-00f18fb6b3ea', 1400),
    p4: u('photo-1600210492486-724fe5c67fb0', 1400),
    p5: u('photo-1600585153490-76fb20a32601', 1400),
    p6: u('photo-1512917774080-9991f1c4c750', 1400),
    p7: u('photo-1523217582562-09d0def993a6', 1400),
    p8: u('photo-1449844908441-8829872d2607', 1400),
    p9: u('photo-1580587771525-78b9dba3b914', 1400),
  } as Record<string, string>,

  // Blog görselleri
  blog: {
    b1: u('photo-1503387762-592deb58ef4e', 1200),
    b2: u('photo-1600566753086-00f18fb6b3ea', 1200),
    b3: u('photo-1600585153490-76fb20a32601', 1200),
    b4: u('photo-1600585154526-990dced4db0d', 1200),
    b5: u('photo-1489171078254-c3365d6e359f', 1200),
  } as Record<string, string>,

  // Genel doku / arka plan
  ctaBackground: u('photo-1497366811353-6870744d04b2', 1800),
};

export type Images = typeof images;
