import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

/** Penanda section: garis pendek dan nama bagian. Teks biasa, bukan lencana. */
export function SectionLabel({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p className={cn('mb-4 flex items-center gap-3 font-heading text-sm font-semibold', onDark ? 'text-[#5CE1F2]' : 'text-link')}>
      <span aria-hidden="true" className="h-0.5 w-8 bg-current" />
      {children}
    </p>
  )
}
