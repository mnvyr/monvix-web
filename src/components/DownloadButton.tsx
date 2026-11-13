import { apk } from '@/config/site'
import { Download } from '@/components/icons'
import { cn } from '@/lib/cn'

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

/** Tombol download APK. Mengarah ke berkas di GitHub Releases (lihat apk di config/site.ts). */
export function DownloadButton({ label = 'Download for Android', variant = 'primary', showMeta = false, className, wrapperClassName, align = 'start' }: Props) {
  const tone = variant === 'light' ? 'btn-light' : 'btn-primary'
  return (
    <div className={cn('inline-flex flex-col gap-2', align === 'center' ? 'items-center' : 'items-start', wrapperClassName)}>
      <a href={apk.url} rel="noopener" className={cn('btn', tone, className)}>
        <Download className="h-5 w-5" />
        {label}
      </a>
      {showMeta && <span className={cn('text-sm', variant === 'light' ? 'text-[#C9D6F5]' : 'text-soft')}>v{apk.version} · Android</span>}
    </div>
  )
}
