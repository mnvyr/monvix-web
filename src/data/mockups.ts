import type { MockupItem } from '@/types'

/** Urutan tampil di carousel. Empat pertama adalah layar utama. */
export const mockups: MockupItem[] = [
  { id: 'splash', title: 'Splash Screen', short: 'Splash', caption: 'Logo dan tagline saat aplikasi dibuka' },
  { id: 'onboarding', title: 'Onboarding', short: 'Onboarding', caption: 'Pengenalan singkat dengan indikator halaman' },
  { id: 'dashboard', title: 'Dashboard', short: 'Dashboard', caption: 'Saldo, aksi cepat, dan grafik pengeluaran mingguan' },
  { id: 'transactions', title: 'Transaksi', short: 'Transaksi', caption: 'Cari, filter, dan kelompok per hari' },
  { id: 'budget', title: 'Budget', short: 'Budget', caption: 'Batas pengeluaran per kategori' },
  { id: 'goals', title: 'Savings Goals', short: 'Goals', caption: 'Target tabungan dengan setor dan tarik' },
  { id: 'reports', title: 'Financial Reports', short: 'Laporan', caption: 'Laporan dan saving rate per periode' },
  { id: 'networth', title: 'Net Worth', short: 'Net Worth', caption: 'Aset dikurangi utang' },
  { id: 'subscriptions', title: 'Subscription Manager', short: 'Langganan', caption: 'Langganan bulanan dan tahunan' },
  { id: 'calendar', title: 'Financial Calendar', short: 'Kalender', caption: 'Tagihan dan jatuh tempo' },
  { id: 'backup', title: 'Google Drive Backup', short: 'Backup', caption: 'Backup terenkripsi dan riwayatnya' },
]
