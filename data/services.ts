import { images } from './images';

export type ServiceCategoryKey =
  | 'cam-aluminyum'
  | 'cam'
  | 'aluminyum'
  | 'pvc'
  | 'golgelendirme'
  | 'guvenlik'
  | 'otomatik-kapi'
  | 'aksesuar';

export type ServiceStruct = {
  slug: string;
  category: ServiceCategoryKey;
  image: string;
};

// Yapısal veri (görsel + kategori). Metinler messages/{locale}.json → "svc" altında.
export const services: ServiceStruct[] = [
  { slug: 'kis-bahcesi', category: 'cam-aluminyum', image: images.services['kis-bahcesi'] },
  { slug: 'bioklimatik-pergola', category: 'golgelendirme', image: images.services['bioklimatik-pergola'] },
  { slug: 'ofis-bolme', category: 'aluminyum', image: images.services['ofis-bolme'] },
  { slug: 'aluminyum-dograma', category: 'aluminyum', image: images.services['aluminyum-dograma'] },
  { slug: 'zip-perde', category: 'golgelendirme', image: images.services['zip-perde'] },
  { slug: 'giyotin-cam', category: 'cam', image: images.services['giyotin-cam'] },
  { slug: 'isi-camli-surme', category: 'cam', image: images.services['isi-camli-surme'] },
  { slug: 'pvc-pencere', category: 'pvc', image: images.services['pvc-pencere'] },
  { slug: 'pvc-surme', category: 'pvc', image: images.services['pvc-surme'] },
  { slug: 'panjur', category: 'guvenlik', image: images.services['panjur'] },
  { slug: 'kepenk', category: 'guvenlik', image: images.services['kepenk'] },
  { slug: 'aluminyum-cit', category: 'aluminyum', image: images.services['aluminyum-cit'] },
  { slug: 'aluminyum-panel-kapi', category: 'aluminyum', image: images.services['aluminyum-panel-kapi'] },
  { slug: 'aluminyum-katlanir-kapi', category: 'aluminyum', image: images.services['aluminyum-katlanir-kapi'] },
  { slug: 'pergola-tente', category: 'golgelendirme', image: images.services['pergola-tente'] },
  { slug: 'kaldir-sur', category: 'cam', image: images.services['kaldir-sur'] },
  { slug: 'otomatik-kapi', category: 'otomatik-kapi', image: images.services['otomatik-kapi'] },
  { slug: 'pvc-isi-yalitimli', category: 'pvc', image: images.services['pvc-isi-yalitimli'] },
  { slug: 'kasetli-tente', category: 'golgelendirme', image: images.services['kasetli-tente'] },
  { slug: 'cam-balkon', category: 'cam', image: images.services['cam-balkon'] },
  { slug: 'seksiyonel-garaj', category: 'otomatik-kapi', image: images.services['seksiyonel-garaj'] },
  { slug: 'plisseri-sineklik', category: 'aksesuar', image: images.services['plisseri-sineklik'] },
  { slug: 'sundurma', category: 'golgelendirme', image: images.services['sundurma'] },
  { slug: 'havuz-kapama', category: 'cam', image: images.services['havuz-kapama'] },
];

export const serviceCount = services.length;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceCategoryOrder: ServiceCategoryKey[] = [
  'cam-aluminyum',
  'cam',
  'aluminyum',
  'pvc',
  'golgelendirme',
  'guvenlik',
  'otomatik-kapi',
  'aksesuar',
];

export const serviceGroups = serviceCategoryOrder
  .map((category) => ({
    category,
    items: services.filter((s) => s.category === category),
  }))
  .filter((g) => g.items.length > 0);
