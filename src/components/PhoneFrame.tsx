import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/** Ukuran dasar bingkai (px). Semua layar didesain pada ukuran ini lalu di-scale. */
export const PHONE_W = 280
export const PHONE_H = 580

interface Props {
  children: ReactNode
  /** Skala tampilan. Ukuran layout ikut berubah sehingga tidak ada overflow. */
  scale?: number
  className?: string
}

/**
 * Bingkai ponsel Android: sudut membulat, bezel, kamera punch-hole, tombol samping, gesture bar.
 * Isinya ilustrasi, jadi disembunyikan dari pembaca layar dan tidak bisa difokus. Keterangannya
 * ada di teks sekitarnya.
 */
export function PhoneFrame({ children, scale = 1, className }: Props) {
  return (
    <div className={cn('relative shrink-0', className)} style={{ width: PHONE_W * scale, height: PHONE_H * scale }}>
      <div
        className="absolute left-0 top-0 rounded-[40px] bg-navy p-[7px] shadow-phone ring-1 ring-white/25"
        style={{ width: PHONE_W, height: PHONE_H, transform: `scale(${scale})`, transformOrigin: 'top left' }}
      >
        <span aria-hidden="true" className="absolute -right-[3px] top-24 h-14 w-[3px] rounded-r bg-navy" />
        <span aria-hidden="true" className="absolute -right-[3px] top-44 h-8 w-[3px] rounded-r bg-navy" />

        <div
          aria-hidden="true"
          inert
          className="relative flex h-full w-full flex-col overflow-hidden rounded-[34px] bg-[#F3F7FF] text-navy"
        >
          <span className="absolute left-1/2 top-[9px] z-30 h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-navy ring-2 ring-black/10" />
          {children}
          <span className="absolute bottom-[5px] left-1/2 z-30 h-[4px] w-[84px] -translate-x-1/2 rounded-full bg-navy/30" />
        </div>
      </div>
    </div>
  )
}
