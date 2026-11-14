import type { Release } from '@/types'

/** Terbaru di atas. Tanggal rilis sengaja tidak dicantumkan karena belum ada datanya. */
export const releases: Release[] = [
  {
    version: '1.1.0',
    status: 'Production',
    groups: [
      {
        title: 'Fitur baru',
        items: [
          { title: 'Mode Tamu', detail: 'Bisa dipakai tanpa login. Saat nanti login Google, data tamu tidak hilang.' },
          { title: 'Login Google', detail: 'Fitur yang butuh akun menampilkan pesan minta login.' },
          { title: 'PIN 6 digit', detail: 'Ada batas percobaan gagal dengan kunci bertahap. PIN lama 4 sampai 6 digit dimigrasikan.' },
          {
            title: 'Backup Google Drive',
            detail:
              'Dienkripsi AES-256-GCM dengan password dari kamu. Backup manual dan otomatis, riwayat, pulihkan, hapus. Menyimpan 10 backup terakhir.',
          },
          {
            title: 'Pulihkan aman',
            detail: 'Divalidasi dulu, ada backup pengaman, dan dikembalikan otomatis jika gagal.',
          },
          { title: 'Kalender Keuangan', detail: 'Tagihan, langganan, dan jatuh tempo per tanggal.' },
          {
            title: 'Manajer Langganan',
            detail: 'Bulanan atau tahunan, transaksi otomatis tanpa ganda, pengingat.',
          },
          {
            title: 'Analisis Pengeluaran',
            detail: 'Kategori terbesar, perbandingan bulan, jam dan hari paling boros, saving rate.',
          },
          { title: 'Net Worth', detail: 'Aset (dompet, tabungan, piutang) dikurangi utang, dengan tren.' },
          { title: 'Perencana Keuangan', detail: 'Proyeksi tabungan dan estimasi waktu mencapai target.' },
        ],
      },
      {
        title: 'Perbaikan bug',
        items: [
          { title: 'Izin notifikasi', detail: 'Alurnya diperbaiki dan ada saklar utama.' },
          { title: 'Utang', detail: 'Bisa diedit, termasuk riwayat cicilannya.' },
          { title: 'Transaksi berulang', detail: 'Bisa diedit.' },
          { title: 'Hapus goal', detail: 'Dana tabungan tidak lagi tersangkut.' },
          { title: 'Hapus data', detail: 'Semua penghapusan memakai konfirmasi dan Undo.' },
          { title: 'Loading dan error', detail: 'Status loading, kosong, dan error ditampilkan konsisten.' },
        ],
      },
    ],
  },
  {
    version: '1.0.0',
    label: 'dan sebelumnya',
    groups: [
      {
        title: 'Fitur yang sudah ada',
        items: [
          { title: 'Dompet', detail: 'Beberapa dompet (kas, bank, e-wallet). Saldo dihitung dari catatan transaksi.' },
          {
            title: 'Transaksi',
            detail:
              'Pemasukan, pengeluaran, dan transfer antar dompet, dengan foto struk. Ada detail transaksi, duplikat, dan edit.',
          },
          { title: 'Kategori', detail: 'Kategori bawaan yang bisa ditambah atau diubah.' },
          { title: 'Anggaran (budget)', detail: 'Batas pengeluaran per kategori dengan peringatan.' },
          { title: 'Goals tabungan', detail: 'Target menabung, setor dan tarik.' },
          { title: 'Utang dan piutang', detail: 'Pembayaran cicilan.' },
          { title: 'Transaksi berulang', detail: 'Terbit otomatis saat jatuh tempo.' },
          { title: 'Laporan', detail: 'Ringkasan dan grafik per periode.' },
          { title: 'Impor dan ekspor CSV', detail: 'Pindahkan data masuk dan keluar lewat berkas CSV.' },
          { title: 'Backup dan pulihkan', detail: 'Berkas .monvix.' },
          { title: 'Keamanan', detail: 'PIN dan biometrik.' },
          { title: 'Notifikasi', detail: 'Pengingat harian, tagihan, utang, dan ringkasan.' },
        ],
      },
    ],
  },
]
