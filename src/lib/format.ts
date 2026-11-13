/** Format byte ke teks yang mudah dibaca, mis. 24,3 MB. */
export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  const units = ['KB', 'MB', 'GB']
  let value = bytes / 1024
  let i = 0
  while (value >= 1024 && i < units.length - 1) {
    value /= 1024
    i += 1
  }
  return `${value.toLocaleString('id-ID', { maximumFractionDigits: 1 })} ${units[i]}`
}

/** Angka ke Rupiah tanpa tanda, mis. Rp12.850.000. */
export function rupiah(value: number): string {
  return `Rp${Math.abs(value).toLocaleString('id-ID')}`
}

/** Nomor baris dua digit untuk daftar bergaya buku kas. */
export function lineNo(n: number): string {
  return String(n).padStart(2, '0')
}
