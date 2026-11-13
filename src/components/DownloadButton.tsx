import { apk } from '@/config/site'
import { Download } from '@/components/icons'
import { cn } from '@/lib/cn'
import { formatBytes } from '@/lib/format'

interface Props {
  label?: string
  variant?: 'primary' | 'light'
  /** Tampilkan versi dan ukuran berkas di bawah tombol. */
  showMeta?: boolean
  className?: string
  /** Kelas untuk pembungkus tombol, mis. untuk melebarkan tombol di ponsel. */
  wrapperClassName?: string
  /** Rata tengah untuk teks keterangan. */
  align?: 'start' | 'center'
}

/** Teks versi dan ukuran, mis. "v1.0.0 · 24,3 MB · Android". Ukuran hanya tampil jika berkasnya ada. */
export function apkMeta(): string {
  return [`v${apk.version}`, 'Android'].filter(Boolean).join(' · ')
}

/**
 * Tombol download APK. Mengarah langsung ke berkas di public/download/.
 * Jika berkas belum ada saat build, tombol tampil nonaktif dengan keterangan jujur.
 */
export function DownloadButton({ label = 'Download for Android', variant = 'primary', showMeta = false, className, wrapperClassName, align = 'start' }: Props) {
  const tone = variant === 'light' ? 'btn-light' : 'btn-primary'
  return (
    <div className={cn('inline-flex flex-col gap-2', align === 'center' ? 'items-center' : 'items-start', wrapperClassName)}>
      {apk.available ? (
        <a href={apk.path} download={apk.fileName} className={cn('btn', tone, className)}>
          <Download className="h-5 w-5" />
          {label}
        </a>
      ) : (
        <button type="button" disabled className={cn('btn', variant === 'light' && 'btn-on-dark', className)}>
          <Download className="h-5 w-5" />
          APK belum tersedia
        </button>
      )}
      {showMeta && (
        <span className={cn('text-sm', variant === 'light' ? 'text-[#C9D6F5]' : 'text-soft')}>
          {apk.available ? apkMeta() : `Versi ${apk.version} · berkas APK belum diunggah`}
        </span>
      )}
    </div>
  )
}
