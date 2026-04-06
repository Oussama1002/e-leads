import type { LText } from '../i18n/morocco'

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'won' | 'lost'
export type LeadTag = 'hot' | 'warm' | 'cold' | 'premium'

export interface Lead {
  id: string
  name: string
  service: LText
  location: LText
  budget: LText
  score: number
  status: LeadStatus
  assignedTo: LText
  tags: LeadTag[]
  need: LText
  urgency: 'low' | 'medium' | 'high'
  phone: string
  email: string
  company?: LText
  receivedAt: string
}

export interface Provider {
  id: string
  name: string
  rating: number
  speciality: LText
  performance: number
  conversion: number
  responseMin: number
  badges: ('top' | 'fast' | 'revenue')[]
}

const unassigned: LText = { fr: 'Non assigné', ar: 'غير معين' }

export const leads: Lead[] = [
  {
    id: '1',
    name: 'Amine Alami',
    service: {
      fr: 'CVC & climatisation tertiaire',
      ar: 'تكييف وتبريد للقطاع الثالث',
    },
    location: { fr: 'Casablanca, Maârif', ar: 'الدار البيضاء، المعاريف' },
    budget: { fr: '120 000 – 250 000 MAD', ar: '120 000 – 250 000 درهم' },
    score: 92,
    status: 'qualified',
    assignedTo: { fr: 'Youssef Idrissi', ar: 'يوسف الإدريسي' },
    tags: ['hot', 'premium'],
    need: {
      fr: 'Remplacement de groupes toiture pour immeuble de bureaux 3 étages avant pic de chaleur.',
      ar: 'استبدال وحدات السطح لمبنى مكاتب من 3 طوابق قبل ذروة الحر.',
    },
    urgency: 'high',
    phone: '+212 6 12 34 56 78',
    email: 'a.alami@anfa-business.ma',
    company: { fr: 'Anfa Business Center', ar: 'أنفا بيزنس سنتر' },
    receivedAt: '2026-04-02T14:20:00',
  },
  {
    id: '2',
    name: 'Kenza Bennani',
    service: { fr: 'Plomberie d’urgence', ar: 'سباكة طارئة' },
    location: { fr: 'Marrakech, Guéliz', ar: 'مراكش، كليز' },
    budget: { fr: '8 000 – 18 000 MAD', ar: '8 000 – 18 000 درهم' },
    score: 78,
    status: 'contacted',
    assignedTo: unassigned,
    tags: ['warm'],
    need: {
      fr: 'Fuite dans la cuisine d’un restaurant — intervention le jour même souhaitée.',
      ar: 'تسرّب في مطبخ مطعم — يُفضّل تدخل في نفس اليوم.',
    },
    urgency: 'high',
    phone: '+212 6 61 22 33 44',
    email: 'k.bennani@riad-restaurant.ma',
    company: { fr: 'Riad Restaurant', ar: 'مطعم الرياض' },
    receivedAt: '2026-04-02T11:05:00',
  },
  {
    id: '3',
    name: 'Omar Tazi',
    service: { fr: 'Solaire résidentiel', ar: 'طاقة شمسية سكنية' },
    location: { fr: 'Rabat, Agdal', ar: 'الرباط، أكدال' },
    budget: { fr: '350 000 MAD +', ar: '350 000 درهم +' },
    score: 88,
    status: 'new',
    assignedTo: { fr: 'Salma Cherkaoui', ar: 'سلمى الشرقاوي' },
    tags: ['premium', 'hot'],
    need: {
      fr: 'Installation solaire complète + batterie de secours, financement préféré.',
      ar: 'تركيب شمسي كامل + بطارية احتياطية، يُفضّل التمويل.',
    },
    urgency: 'medium',
    phone: '+212 6 55 88 99 00',
    email: 'o.tazi@menara-mail.ma',
    receivedAt: '2026-04-03T09:12:00',
  },
  {
    id: '4',
    name: 'Driss El Mansouri',
    service: { fr: 'Nettoyage de bureaux', ar: 'تنظيف مكاتب' },
    location: { fr: 'Tanger, Centre-ville', ar: 'طنجة، وسط المدينة' },
    score: 41,
    status: 'new',
    assignedTo: unassigned,
    tags: ['cold'],
    need: {
      fr: 'Nettoyage récurrent de bureaux — comparaison de 3 prestataires.',
      ar: 'تنظيم دوري للمكاتب — مقارنة بين 3 مقدمي خدمات.',
    },
    urgency: 'low',
    budget: { fr: '7 000 – 11 000 MAD / mois', ar: '7 000 – 11 000 درهم / شهر' },
    phone: '+212 6 39 44 55 66',
    email: 'd.elmansouri@tanger-pro.ma',
    receivedAt: '2026-04-01T16:40:00',
  },
]

export const providers: Provider[] = [
  {
    id: 'p1',
    name: 'Atlas Pro Services',
    rating: 4.9,
    speciality: { fr: 'CVC & génie climatique', ar: 'تكييف وهندسة المناخ' },
    performance: 94,
    conversion: 38,
    responseMin: 12,
    badges: ['top', 'fast'],
  },
  {
    id: 'p2',
    name: 'Rif Urgence Plomberie',
    rating: 4.7,
    speciality: { fr: 'Plomberie d’urgence', ar: 'سباكة طارئة' },
    performance: 89,
    conversion: 33,
    responseMin: 8,
    badges: ['fast'],
  },
  {
    id: 'p3',
    name: 'Soleil Vert Énergie',
    rating: 4.8,
    speciality: { fr: 'Solaire & stockage', ar: 'طاقة شمسية وتخزين' },
    performance: 91,
    conversion: 41,
    responseMin: 22,
    badges: ['top', 'revenue'],
  },
]

/** Chart values (labels come from i18n `chartDays`) */
export const chartLeadValues = [12, 19, 15, 28, 22, 9, 7]

export const analyticsSeries = {
  conversion: [18, 22, 24, 26, 28, 31],
  cpl: [420, 380, 360, 350, 330, 310],
  rpl: [2100, 2400, 2550, 2680, 2800, 2950],
}

export interface Campaign {
  id: string
  name: string
  status: 'active' | 'paused' | 'completed'
  budget: number
  spent: number
  leadsGenerated: number
  cpl: number
  platform: 'facebook' | 'google' | 'tiktok'
}

export const campaigns: Campaign[] = [
  { id: 'c1', name: 'Plomberie Urgence Casa', status: 'active', budget: 15000, spent: 4200, leadsGenerated: 42, cpl: 100, platform: 'facebook' },
  { id: 'c2', name: 'CVC B2B Printemps', status: 'active', budget: 35000, spent: 18500, leadsGenerated: 18, cpl: 1027, platform: 'google' },
  { id: 'c3', name: 'Solaire Résidentiel', status: 'paused', budget: 20000, spent: 20000, leadsGenerated: 85, cpl: 235, platform: 'tiktok' },
]
