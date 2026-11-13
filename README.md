# Monvix Website

Website resmi Monvix. React 19, Vite 6, TypeScript, Tailwind CSS v4. Arah desain ada di `DESIGN.md`.

## Menjalankan

```bash
npm install
npm run dev          # pengembangan
npm run typecheck    # tsc -b --noEmit
npm run lint         # ESLint
npm run build        # tsc -b lalu vite build, hasil di dist/
npm run preview      # uji hasil build
```

Butuh Node 20.19 atau lebih baru.

## Yang perlu Anda isi sebelum rilis

1. **File APK**: taruh di `public/download/monvix.apk`. Ukuran file dibaca saat build. Selama file belum ada, tombol download tampil nonaktif dan tidak mengarah ke tautan rusak.
2. **Versi aplikasi**: ubah `apk.version` di `src/config/site.ts`.
3. **Domain**: ganti `https://monvix.vercel.app` (placeholder) di `src/config/site.ts`, `index.html`, `public/robots.txt`, dan `public/sitemap.xml`.
4. **Halaman hukum**: `/privacy` dan `/terms` adalah draf berdasarkan fitur yang ada. Periksa dan sesuaikan sebelum dipublikasikan.

## Struktur

```
src/config      data situs (nama, APK, navigasi)
src/data        fitur, FAQ, mockup, data contoh
src/sections    section halaman utama
src/layout      Navbar, Footer, Layout
src/components  komponen bersama dan 11 layar mockup
src/pages       Home, Privacy, Terms, 404
src/hooks       tema, scroll, ukuran
```

Routing tanpa library: `src/App.tsx` membaca `window.location.pathname`. Untuk hosting statis, `vercel.json` sudah mengarahkan semua path ke `index.html`.

## Catatan

Semua angka dan tampilan di mockup adalah data contoh dan diberi label itu di halaman. Tema mengikuti pengaturan sistem dan bisa diganti lewat tombol di navbar.
