import type { ApkInfo, NavItem } from '@/types'

/**
 * Satu tempat untuk info situs. Ubah di sini, seluruh website ikut berubah.
 */
export const site = {
  name: 'Monvix',
  fullName: 'Monvix: Modern Money Management',
  tagline: 'Kelola uang, capai tujuan.',
  /** Ganti dengan domain produksi Anda (juga di index.html, robots.txt, sitemap.xml). */
  url: 'https://monvix.vercel.app',
  copyright: '© 2026 Monvix. All rights reserved.',
  description:
    'Monvix adalah aplikasi Android pencatat keuangan pribadi yang membantu pengguna mengelola pemasukan, pengeluaran, anggaran, tabungan, dan kondisi keuangan dalam satu aplikasi.',
} as const

/**
 * Konfigurasi APK.
 * - fileName harus identik dengan file di public/download/ dan APK_FILE_NAME di vite.config.ts.
 * - version: ubah setiap kali merilis APK baru.
 * - ukuran & ketersediaan dibaca otomatis dari file saat build.
 */
export const apk: ApkInfo = {
  fileName: 'monvix.apk',
  path: '/download/monvix.apk',
  version: '1.0.0',
  sizeBytes: __APK_SIZE_BYTES__,
  available: __APK_AVAILABLE__,
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
