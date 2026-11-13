# DESIGN.md: Monvix website

Dokumen ini adalah sumber arah visual. Setiap keputusan punya satu baris alasan (R-31).
Antislop dipakai dalam mode DURING.

## Design Read

Reading this as: landing page produk aplikasi keuangan pribadi untuk pengguna Android di Indonesia yang ingin mencatat uang tanpa menyerahkan datanya, dengan bahasa visual **buku kas dan struk**, dial **ENERGY 2 / RHYTHM 3 / MOTION 2**.

- ENERGY 2: cukup tegas untuk produk uang (tipografi besar, satu panel navy sebagai fokus), tapi tidak berisik. Pengunjung sedang menimbang apakah layak menaruh data keuangan di aplikasi ini; ketenangan membangun kepercayaan.
- RHYTHM 3: komposisi tiap section berbeda sesuai isinya (panel + ponsel, indeks bernomor, carousel gelap, tiga pernyataan tipografis, dua pilihan berdampingan, dashboard, akordeon, penutup biru). Tidak ada satu template yang diulang.
- MOTION 2: reveal sekali saat scroll, satu animasi masuk di hero, transisi hover dan akordeon. Tidak ada animasi yang berulang tanpa henti.

## Brand identity

Monvix: "Kelola uang, capai tujuan." Aplikasi Android pencatat keuangan pribadi, data tersimpan di perangkat (SQLite), backup ke Google Drive. Arah: modern, tenang, jujur soal data. Logo dan ikon asli dari pemilik dipakai apa adanya (R-23).

## Visual personality

Buku kas yang dirapikan. Angka Rupiah adalah tokoh utama, ditulis dengan angka tabular. Garis tipis antar baris seperti buku besar, nomor baris seperti jurnal, dan garis titik-titik penghubung seperti struk belanja.

## Motif identitas (satu, diulang)

**Baris buku kas**: baris dengan garis pemisah tipis, nomor baris bertabular, dan garis titik-titik (leader) yang menghubungkan label ke nilai. Dipakai di daftar fitur (baris 01 sampai 29), ringkasan angka di hero, diagram arsitektur, dan riwayat backup. Alasan: produknya mencatat uang, dan bentuk ini langsung dikenali sebagai catatan uang. Satu aksen tambahan: tepi sobekan struk (perforasi) di awal section download, sebagai penanda "tahap akhir".

## Design philosophy

1. Tunjukkan produk nyata (layar aplikasi) sebelum mengklaim apa pun.
2. Jangan mengatakan hal yang tidak benar tentang data: tidak ada database cloud, tidak ada sinkronisasi otomatis antarperangkat.
3. Satu fokus per layar.
4. Angka dan klaim hanya dari fakta aplikasi; data pada mockup selalu diberi keterangan sebagai contoh.

## Color palette (R-29)

Inti: **Navy** dan **Biru**. Aksen: **Cyan**. Netral: kertas dan putih. Hijau dan merah hanya untuk nilai uang (pemasukan dan pengeluaran), tidak pernah untuk dekorasi.

| Token | Terang | Gelap | Alasan |
|---|---|---|---|
| `paper` | #EEF3FF | #050B20 | latar utama, dari identitas Monvix |
| `surface` | #FFFFFF | #0B1636 | section selang-seling, naik satu tingkat dari paper |
| `ink` | #0B1F5C | #EAF0FF | teks utama; navy adalah warna merek |
| `soft` | #3F5185 | #A3B4DC | teks sekunder, lolos 4.5:1 di atas paper dan surface |
| `rule` | #C9D6F2 | #1E2F66 | garis buku kas |
| `link` | #0A3FD6 | #7DB0FF | biru untuk teks (biru #0A6CFF terlalu terang di atas paper) |
| Biru aksi | #0A6CFF | sama | tombol utama, putih di atasnya 4.56:1 |
| Navy panel | #0B1F5C | sama | section gelap tetap navy di kedua tema |
| Cyan | #00C8E0 (di atas navy: #5CE1F2) | sama | satu-satunya aksen: garis titik dan fokus di atas navy |
| Hijau/Merah uang | #16A34A / #E11D48 (di atas navy: #4ADE80 / #FB7185) | sama | semantik uang saja |

Tema: situs mengikuti sistem dan punya tombol ganti tema yang berfungsi (aplikasinya sendiri punya mode terang dan gelap). Kedua tema diperiksa (R-34).

Gradien: hanya dua, keduanya bagian dari UI aplikasi di dalam ponsel (kartu saldo), karena meniru aplikasi asli. Situs sendiri tidak memakai gradien sebagai latar.

## Typography

- **Sora** untuk judul: bentuk geometris lebar, angka besar terbaca tegas. Ditentukan pemilik merek.
- **DM Sans** untuk teks: nyaman di ukuran kecil, mudah dibaca di layar ponsel. Ditentukan pemilik merek.
- Angka uang: `font-variant-numeric: tabular-nums` agar kolom lurus seperti buku kas.
- Judul `clamp()` fluid; teks isi 16px (18px di lead). Tidak ada huruf kapital berjarak lebar.
- Skala: 14 / 16 / 18 / 22 / 28 / clamp(36..72). Judul `text-wrap: balance`.

## Spacing

Skala 4px. Ritme vertikal section sengaja berbeda: hero 112/144, section padat (fitur, FAQ) 64/96, section lega (privasi, download) 96/128. Di ponsel dikecilkan sekitar sepertiga. Kolom isi maksimum 1200px, gutter 16/24/32.

## Layout principles

- Mobile-first, breakpoint mengikuti isi: 640 (dua kolom kecil), 768 (indeks fitur dua kolom), 1024 (navigasi penuh dan layout dua kolom besar), 1280 (lebar maksimum).
- Tidak ada grid kartu seragam. Fitur dibaca sebagai indeks, bukan kartu.
- Satu panel navy di hero menjadi titik fokus; ponsel menembus tepi atasnya untuk memberi kedalaman.

## Component principles

- Aksi adalah `<button>`, navigasi adalah `<a href>` ke tujuan nyata. Tidak ada kontrol palsu: dua pilihan "Continue as Guest / Continue with Google" digambarkan sebagai ilustrasi layar masuk, bukan tombol.
- Setiap kontrol punya nama aksesibel, area sentuh minimal 44px, status hover, active, disabled, dan fokus terlihat.
- Satu komponen satu tanggung jawab; ikon hanya di tempat yang relevan.

## Border, radius, elevation

- Radius: 6px (baris, input kecil), 10px (tombol), 12px (panel). Lingkaran hanya untuk ponsel dan bulatan status nyata.
- Garis 1px `rule` sebagai struktur utama. Bayangan hanya untuk dua hal yang memang terangkat: ponsel dan dialog.
- Blur (kaca) hanya pada navbar setelah scroll.

## Iconography

Set ikon sendiri (garis 2px, sudut membulat) yang digambar untuk kebutuhan aplikasi: tombol, status bar ponsel, navigasi bawah ponsel. Daftar fitur sengaja tanpa ikon: nomor baris sudah menjadi penanda, dan tidak ada ikon yang menambah arti. Tidak memakai library ikon populer.

## Motion direction

- Reveal sekali saat masuk viewport (naik 14px, 600ms), tanpa pengulangan.
- Hero: ponsel naik sekali saat dimuat, baris ringkasan muncul bergantian.
- Hover: perubahan warna dan garis, bukan lompatan.
- Akordeon dan menu mobile bertransisi 200 sampai 250ms.
- `prefers-reduced-motion: reduce`: semua animasi dan scroll halus dimatikan.
- Tidak ada parallax, tidak ada float, tidak ada gradien bergerak.

## Responsive behavior

320 sampai 1920px tanpa overflow horizontal. Ponsel di-scale agar muat (hook ukur-lalu-skala). Carousel layar memakai scroll-snap dengan tombol sebelumnya/berikutnya dan daftar layar. Navigasi menjadi menu berlabel "Menu" di bawah 1024px. Target sentuh 44px.

## Visual hierarchy

1. H1 hero dan ponsel di panel navy.
2. Tombol Download (biru aksi) selalu satu-satunya elemen biru solid di layar.
3. Judul section, lalu isi.
4. Garis, nomor baris, dan teks sekunder berada di tingkat terendah.
