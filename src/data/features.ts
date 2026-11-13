import type { FeatureGroup } from '@/types'

/**
 * Sumber tunggal daftar fitur. Teks mengikuti fungsi aplikasi apa adanya.
 * Jangan menambah atau mengubah klaim fitur tanpa konfirmasi.
 */
export const featureGroups: FeatureGroup[] = [
  {
    id: 'money',
    title: 'Money Management',
    summary: 'Catat dan atur uang harianmu dari satu tempat.',
    items: [
      {
        title: 'Multiple Wallet',
        description: 'Kelola kas, rekening bank, dan e-wallet dalam satu aplikasi.',
      },
      {
        title: 'Transaction Management',
        description: 'Catat pemasukan, pengeluaran, dan transfer antar dompet.',
      },
      {
        title: 'Receipt Attachment',
        description: 'Lampirkan foto struk pada transaksi.',
      },
      {
        title: 'Categories',
        description: 'Kategori transaksi yang dapat disesuaikan dengan kebutuhanmu.',
      },
      {
        title: 'Budget Management',
        description: 'Tetapkan batas pengeluaran per kategori.',
      },
      {
        title: 'Savings Goals',
        description: 'Buat target tabungan dengan fitur setor dan tarik.',
      },
    ],
  },
  {
    id: 'planning',
    title: 'Financial Planning',
    summary: 'Rencanakan tagihan, cicilan, dan target ke depan.',
    items: [
      {
        title: 'Debt & Receivables',
        description: 'Kelola utang dan piutang.',
      },
      {
        title: 'Recurring Transactions',
        description: 'Transaksi berulang otomatis.',
      },
      {
        title: 'Subscription Manager',
        description: 'Manajemen langganan bulanan dan tahunan.',
      },
      {
        title: 'Financial Calendar',
        description: 'Kalender tagihan dan jatuh tempo.',
      },
      {
        title: 'Financial Planner',
        description: 'Proyeksi tabungan dan estimasi pencapaian target.',
      },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Reports',
    summary: 'Pahami ke mana uangmu pergi dengan laporan yang jelas.',
    items: [
      {
        title: 'Financial Reports',
        description: 'Laporan dan grafik berdasarkan periode.',
      },
      {
        title: 'Spending Analysis',
        description: 'Lihat kategori pengeluaran terbesar.',
      },
      {
        title: 'Monthly Comparison',
        description: 'Bandingkan pengeluaran dari bulan ke bulan.',
      },
      {
        title: 'Spending Habits',
        description: 'Analisis waktu dan hari paling boros.',
      },
      {
        title: 'Saving Rate',
        description: 'Persentase kemampuan menabung.',
      },
      {
        title: 'Net Worth',
        description: 'Perhitungan aset dikurangi utang.',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & Backup',
    summary: 'Akses aman, backup terenkripsi, dan data tetap milikmu.',
    items: [
      { title: 'Google Login', description: 'Masuk dengan akun Google sebagai identitas pengguna.' },
      { title: 'Guest Mode', description: 'Coba Monvix tanpa harus langsung membuat akun.' },
      { title: 'PIN Security 6 Digit', description: 'Kunci aplikasi dengan PIN 6 digit.' },
      { title: 'Biometric Authentication', description: 'Buka aplikasi dengan autentikasi biometrik.' },
      { title: 'Google Drive Backup', description: 'Simpan backup data di Google Drive milikmu.' },
      { title: 'AES-256-GCM Backup Encryption', description: 'Backup dienkripsi dengan AES-256-GCM.' },
      { title: 'Manual Backup', description: 'Backup kapan saja dengan sekali tekan.' },
      { title: 'Automatic Backup', description: 'Backup otomatis agar data tetap terlindungi.' },
      { title: 'Backup History', description: 'Lihat riwayat backup yang pernah dibuat.' },
      { title: 'Secure Restore', description: 'Pulihkan data dengan proses restore yang aman.' },
      { title: 'CSV Import & Export', description: 'Impor dan ekspor data transaksi dalam format CSV.' },
      { title: 'Local .monvix Backup & Restore', description: 'Backup dan restore lokal dengan berkas .monvix.' },
    ],
  },
]

export const featureCount = featureGroups.reduce((sum, group) => sum + group.items.length, 0)
