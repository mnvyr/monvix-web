import { existsSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * APK_FILE_NAME harus sama dengan `apk.fileName` di src/config/site.ts.
 * Ukuran dibaca dari public/download/ saat build, jadi tidak pernah ada angka palsu.
 * Jika APK belum ada, tombol download tampil nonaktif dan bukan link rusak.
 */
const APK_FILE_NAME = 'monvix.apk'
const root = fileURLToPath(new URL('.', import.meta.url))
const apkPath = fileURLToPath(new URL(`./public/download/${APK_FILE_NAME}`, import.meta.url))
const apkExists = existsSync(apkPath)
const apkSizeBytes = apkExists ? statSync(apkPath).size : null

if (!apkExists) {
  console.warn(`\n[monvix] ${APK_FILE_NAME} belum ada di public/download/. Letakkan APK di sana agar tombol download aktif.\n`)
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __APK_AVAILABLE__: JSON.stringify(apkExists),
    __APK_SIZE_BYTES__: JSON.stringify(apkSizeBytes),
  },
  resolve: {
    alias: { '@': `${root}src` },
  },
  build: {
    target: 'es2020',
  },
})
