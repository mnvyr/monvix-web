import type { FaqItem } from '@/types'

/**
 * Hanya berisi hal yang sudah pasti. Untuk hal yang belum ada informasinya
 * (mis. harga), jawaban sengaja tidak membuat klaim.
 */
export const faqItems: FaqItem[] = [
  {
    id: 'apa-itu',
    question: 'Apa itu Monvix?',
    answer:
      'Monvix adalah aplikasi Android pencatat keuangan pribadi untuk mengelola pemasukan, pengeluaran, anggaran, tabungan, dan kondisi keuangan dalam satu aplikasi. Aplikasi ini dibuat dengan Flutter.',
  },
  {
    id: 'gratis',
    question: 'Apakah Monvix gratis?',
    answer:
      'Saat ini Monvix dapat diunduh langsung dalam bentuk APK dari website ini. Informasi lebih lanjut mengenai biaya belum tersedia di halaman ini.',
  },
  {
    id: 'offline',
    question: 'Apakah aplikasi bisa digunakan tanpa internet?',
    answer:
      'Ya, untuk pencatatan lokal. Transaksi disimpan di perangkat menggunakan SQLite, sehingga kamu tetap bisa mencatat tanpa koneksi internet. Koneksi internet dibutuhkan untuk fitur yang memakai akun Google, seperti login dan backup ke Google Drive.',
  },
  {
    id: 'server',
    question: 'Apakah data transaksi disimpan di server?',
    answer:
      'Tidak. Data transaksi disimpan secara lokal di perangkatmu dan Monvix tidak memakai server database untuk menyimpan transaksi. Data tidak otomatis disinkronkan ke cloud.',
  },
  {
    id: 'login',
    question: 'Apakah harus login Google?',
    answer:
      'Tidak harus di awal. Kamu bisa mencoba lewat Mode Tamu: membuka Dashboard dan menambahkan transaksi. Fitur tertentu yang membutuhkan identitas akun memerlukan login Google.',
  },
  {
    id: 'drive',
    question: 'Apa fungsi Google Drive?',
    answer:
      'Google Drive digunakan sebagai tempat penyimpanan backup, bukan sebagai database transaksi. Sementara itu, login Google hanya digunakan sebagai identitas pengguna.',
  },
  {
    id: 'hilang',
    question: 'Apakah data akan hilang ketika login Google?',
    answer:
      'Tidak. Data yang kamu catat saat memakai Mode Tamu tidak hilang ketika kamu melakukan login Google.',
  },
  {
    id: 'backup-restore',
    question: 'Bagaimana cara backup dan restore?',
    answer:
      'Monvix menyediakan backup manual dan otomatis ke Google Drive, riwayat backup, serta restore yang aman. Tersedia juga backup dan restore lokal dengan berkas .monvix, serta impor dan ekspor CSV.',
  },
  {
    id: 'password',
    question: 'Apakah backup dilindungi password?',
    answer:
      'Ya. Backup Google Drive dienkripsi dengan AES-256-GCM menggunakan password yang kamu tentukan.',
  },
  {
    id: 'ios',
    question: 'Apakah Monvix tersedia untuk iOS?',
    answer: 'Saat ini Monvix ditujukan untuk Android.',
  },
]
