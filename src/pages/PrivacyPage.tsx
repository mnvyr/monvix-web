import { LegalPage, type LegalSection } from './LegalPage'

const sections: LegalSection[] = [
  {
    heading: 'Ringkasan',
    body: [
      'Monvix adalah aplikasi Android pencatat keuangan pribadi. Data transaksi yang kamu catat disimpan secara lokal di perangkatmu menggunakan SQLite. Monvix tidak memakai server database untuk menyimpan transaksi, dan transaksi tidak disinkronkan otomatis ke cloud.',
    ],
  },
  {
    heading: 'Data yang disimpan di perangkat',
    body: [
      'Data yang kamu masukkan ke aplikasi, seperti dompet, transaksi, kategori, anggaran, target tabungan, utang dan piutang, serta lampiran foto struk, disimpan di perangkatmu. Karena disimpan secara lokal, pencatatan transaksi dapat dilakukan tanpa koneksi internet.',
    ],
  },
  {
    heading: 'Login Google',
    body: ['Login Google digunakan untuk identitas pengguna. Login Google tidak digunakan sebagai tempat menyimpan data transaksi.'],
  },
  {
    heading: 'Mode Tamu',
    body: [
      'Kamu dapat mencoba Monvix sebagai tamu tanpa login Google. Data yang dicatat sebagai tamu tidak hilang ketika kamu kemudian melakukan login Google. Fitur tertentu memerlukan login Google.',
    ],
  },
  {
    heading: 'Backup ke Google Drive',
    body: [
      'Google Drive digunakan sebagai tempat penyimpanan file backup. Backup Google Drive dilindungi enkripsi AES-256-GCM menggunakan password yang kamu tentukan. Simpan passwordmu dengan baik.',
      'Monvix juga menyediakan backup dan restore lokal dengan berkas .monvix, serta impor dan ekspor CSV. Berkas tersebut berada di tempat yang kamu pilih dan menjadi tanggung jawabmu untuk menyimpannya.',
    ],
  },
  {
    heading: 'Keamanan perangkat',
    body: [
      'Kamu dapat mengunci aplikasi dengan PIN 6 digit dan autentikasi biometrik. Keamanan perangkat dan akun Googlemu tetap menjadi tanggung jawabmu.',
    ],
  },
  {
    heading: 'Kendali atas datamu',
    body: [
      'Karena data transaksi berada di perangkatmu, kamu memegang kendali atasnya, termasuk berkas backup lokal, hasil ekspor CSV, dan backup di Google Drive milikmu.',
    ],
  },
  {
    heading: 'Perubahan kebijakan',
    body: ['Kebijakan ini dapat diperbarui seiring perkembangan aplikasi. Versi terbaru selalu tersedia di halaman ini, beserta tanggal pembaruannya.'],
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="12 November 2026"
      intro="Halaman ini menjelaskan bagaimana Monvix memperlakukan data keuanganmu."
      sections={sections}
      other={{ label: 'Terms & Conditions', href: '/terms' }}
    />
  )
}
