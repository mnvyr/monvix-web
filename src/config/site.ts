import type { ApkInfo, NavItem } from '@/types'

/**
 * Satu tempat untuk info situs. Ubah di sini, seluruh website ikut berubah.
 */
export const site = {
  name: 'Monvix',
  fullName: 'Monvix: Modern Money Management',
  tagline: 'Kelola uang, capai tujuan.',
  /** Ganti dengan domain produksi Anda (juga di index.html, robots.txt, sitemap.xml). */
  url: 'https://monvix.raphnix.web.id',
  copyright: '© 2026 Monvix. By Raphnix Studio All rights reserved.',
  description:
    'Monvix adalah aplikasi Android pencatat keuangan pribadi yang membantu pengguna mengelola pemasukan, pengeluaran, anggaran, tabungan, dan kondisi keuangan dalam satu aplikasi.',
} as const

/**
 * Konfigurasi APK. APK di-host di GitHub Releases.
 * Saat merilis versi baru: ubah version dan url (tag di url harus sama dengan versinya).
 */
export const apk: ApkInfo = {
  fileName: 'monvix.apk',
  url: 'https://github.com/mnvyr/monvix-web/releases/download/v1.0.0/monvix.apk',
  version: '1.1.0',
}

export const navItems: NavItem[] = [
  { label: 'Home', target: 'home' },
  { label: 'Fitur', target: 'fitur' },
  { label: 'Preview Aplikasi', target: 'preview' },
  { label: 'Keunggulan', target: 'keunggulan' },
  { label: 'FAQ', target: 'faq' },
]

export const heroFacts = [
  { label: 'Platform', value: 'Android Application' },
  { label: 'Pencatatan', value: 'Offline First' },
  { label: 'Penyimpanan', value: 'Local Data Storage' },
  { label: 'Backup', value: 'Google Drive Backup' },
] as const
