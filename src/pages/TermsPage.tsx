import { LegalPage, type LegalSection } from './LegalPage'

const sections: LegalSection[] = [
  {
    heading: 'Penerimaan syarat',
    body: ['Dengan mengunduh atau menggunakan Monvix, kamu menyetujui syarat dan ketentuan ini. Jika tidak setuju, mohon tidak menggunakan aplikasi.'],
  },
  {
    heading: 'Tentang layanan',
    body: [
      'Monvix adalah aplikasi Android untuk mencatat dan memantau keuangan pribadi: pemasukan, pengeluaran, anggaran, tabungan, serta laporan. Monvix adalah alat pencatatan dan bukan layanan nasihat keuangan, investasi, atau pajak.',
    ],
  },
  {
    heading: 'Akun dan Mode Tamu',
    body: [
      'Kamu dapat memakai Monvix sebagai tamu atau melakukan login Google. Fitur tertentu memerlukan login Google. Kamu bertanggung jawab menjaga keamanan perangkat, PIN, dan akun Googlemu.',
    ],
  },
  {
    heading: 'Data dan backup',
    body: [
      'Data transaksi disimpan di perangkatmu. Kamu bertanggung jawab melakukan backup secara berkala, baik ke Google Drive maupun berkas .monvix lokal, dan menyimpan password backup dengan baik.',
    ],
  },
  {
    heading: 'Penggunaan yang diperbolehkan',
    body: ['Gunakan Monvix hanya untuk tujuan yang sah dan untuk keuangan pribadimu. Jangan membongkar, memodifikasi, atau mendistribusikan ulang aplikasi tanpa izin.'],
  },
  {
    heading: 'Ketersediaan dan perubahan',
    body: ['Monvix saat ini ditujukan untuk Android dan didistribusikan melalui berkas APK dari website ini. Fitur dan ketersediaan dapat berubah dari waktu ke waktu.'],
  },
  {
    heading: 'Batas tanggung jawab',
    body: [
      'Monvix disediakan sebagaimana adanya. Sejauh diizinkan oleh hukum yang berlaku, pengembang tidak bertanggung jawab atas kerugian yang timbul dari penggunaan aplikasi, termasuk kehilangan data akibat perangkat rusak, backup yang tidak dibuat, atau password backup yang terlupa.',
    ],
  },
  {
    heading: 'Perubahan syarat',
    body: ['Syarat dan ketentuan ini dapat diperbarui. Versi terbaru selalu tersedia di halaman ini, beserta tanggal pembaruannya.'],
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms"
      updated="12 November 2026"
      intro="Mohon baca syarat berikut sebelum menggunakan Monvix."
      sections={sections}
      other={{ label: 'Privacy Policy', href: '/privacy' }}
    />
  )
}
