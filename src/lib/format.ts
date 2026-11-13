/** Angka ke Rupiah tanpa tanda, mis. Rp12.850.000. */
export function rupiah(value: number): string {
  return `Rp${Math.abs(value).toLocaleString('id-ID')}`
}

/** Nomor baris dua digit untuk daftar bergaya buku kas. */
export function lineNo(n: number): string {
  return String(n).padStart(2, '0')
}
