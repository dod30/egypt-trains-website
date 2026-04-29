import type { TrainType, ClassKey } from './types';

export const TRAIN_TYPE_META: Record<TrainType, { ar: string; en: string; badgeColor: string }> = {
  vip_premium: { ar: 'VIP بريميوم', en: 'VIP Premium', badgeColor: '#9333EA' },
  vip: { ar: 'VIP', en: 'VIP', badgeColor: '#7C3AED' },
  talgo: { ar: 'تالجو', en: 'Talgo', badgeColor: '#DB2777' },
  spanish_ac: { ar: 'إسباني مكيف', en: 'Spanish AC', badgeColor: '#0EA5E9' },
  french_ac: { ar: 'فرنساوي مطور', en: 'French AC', badgeColor: '#3B82F6' },
  russian_ac: { ar: 'روسي مكيف', en: 'Russian AC', badgeColor: '#06B6D4' },
  russian_first: { ar: 'روسي ثانية فاخرة', en: 'Russian First', badgeColor: '#0891B2' },
  russian: { ar: 'روسي', en: 'Russian', badgeColor: '#0284C7' },
  improved: { ar: 'مطور', en: 'Improved', badgeColor: '#65A30D' },
  mix: { ar: 'مختلط', en: 'Mixed', badgeColor: '#CA8A04' },
  sleeper: { ar: 'قطار نوم', en: 'Sleeper', badgeColor: '#4338CA' },
  ordinary: { ar: 'عادي', en: 'Ordinary', badgeColor: '#9CA3AF' },
};

export const CLASS_META: Record<ClassKey, { ar: string; en: string }> = {
  vip_premium: { ar: 'VIP بريميوم', en: 'VIP Premium' },
  vip: { ar: 'VIP', en: 'VIP' },
  first_ac: { ar: 'أولى مكيفة', en: 'First AC' },
  second_ac: { ar: 'ثانية مكيفة', en: 'Second AC' },
  third_ac: { ar: 'ثالثة مكيفة', en: 'Third AC' },
  third: { ar: 'ثالثة', en: 'Third' },
  sleeper: { ar: 'نوم', en: 'Sleeper' },
};
