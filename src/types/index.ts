export interface NavItem {
  label: string
  /** id section tujuan (tanpa #) */
  target: string
}

export interface FeatureItem {
  title: string
  description: string
}

export interface FeatureGroup {
  id: string
  title: string
  summary: string
  items: FeatureItem[]
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export type MockupScreenId =
  | 'splash'
  | 'onboarding'
  | 'dashboard'
  | 'transactions'
  | 'budget'
  | 'goals'
  | 'reports'
  | 'networth'
  | 'subscriptions'
  | 'calendar'
  | 'backup'

export interface MockupItem {
  id: MockupScreenId
  title: string
  /** Nama pendek untuk daftar pemilih layar. */
  short: string
  caption: string
}

export interface ApkInfo {
  fileName: string
  url: string
  version: string
}

export interface ReleaseItem {
  title: string
  detail: string
}

export interface ReleaseGroup {
  title: string
  items: ReleaseItem[]
}

export interface Release {
  version: string
  /** Tambahan setelah nomor versi, mis. "dan sebelumnya". */
  label?: string
  /** Catatan jujur tentang status pengujian rilis. */
  status?: string
  groups: ReleaseGroup[]
}
