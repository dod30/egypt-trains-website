export type Governorate =
  | 'cairo'
  | 'giza'
  | 'alexandria'
  | 'gharbia'
  | 'qalyubia'
  | 'sharqia'
  | 'dakahlia'
  | 'damietta'
  | 'beheira'
  | 'kafr_el_sheikh'
  | 'menoufia'
  | 'ismailia'
  | 'port_said'
  | 'suez'
  | 'fayoum'
  | 'beni_suef'
  | 'minya'
  | 'assiut'
  | 'sohag'
  | 'qena'
  | 'luxor'
  | 'aswan'
  | 'red_sea'
  | 'matrouh'
  | 'new_valley';

export type Region = 'cairo' | 'delta' | 'upper' | 'canal' | 'coast';

export const REGION_BY_GOVERNORATE: Record<Governorate, Region> = {
  cairo: 'cairo',
  giza: 'cairo',
  alexandria: 'delta',
  gharbia: 'delta',
  qalyubia: 'delta',
  sharqia: 'delta',
  dakahlia: 'delta',
  damietta: 'delta',
  beheira: 'delta',
  kafr_el_sheikh: 'delta',
  menoufia: 'delta',
  ismailia: 'canal',
  port_said: 'canal',
  suez: 'canal',
  fayoum: 'upper',
  beni_suef: 'upper',
  minya: 'upper',
  assiut: 'upper',
  sohag: 'upper',
  qena: 'upper',
  luxor: 'upper',
  aswan: 'upper',
  red_sea: 'upper',
  new_valley: 'upper',
  matrouh: 'coast',
};

export const regionFor = (gov: Governorate): Region =>
  REGION_BY_GOVERNORATE[gov] ?? 'cairo';

export interface Station {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  governorate: Governorate;
  region?: Region;
  lat?: number;
  lng?: number;
  majorHub?: boolean;
}

export type TrainType =
  | 'vip_premium'
  | 'vip'
  | 'talgo'
  | 'spanish_ac'
  | 'french_ac'
  | 'russian_ac'
  | 'russian_first'
  | 'russian'
  | 'improved'
  | 'mix'
  | 'sleeper'
  | 'ordinary';

export type ClassKey =
  | 'vip_premium'
  | 'vip'
  | 'first_ac'
  | 'second_ac'
  | 'third_ac'
  | 'third'
  | 'sleeper';

export interface TrainFare {
  classKey: ClassKey;
  priceEGP: number;
}

export interface Stop {
  stationId: string;
  arrival: string | null;
  departure: string | null;
}

export interface Train {
  number: string;
  type: TrainType;
  nameAr?: string;
  nameEn?: string;
  runsOn: number[];
  stops: Stop[];
  fares: TrainFare[];
  notes?: string;
}

export interface ScheduleResult {
  train: Train;
  fromStop: Stop;
  toStop: Stop;
  durationMinutes: number;
}
