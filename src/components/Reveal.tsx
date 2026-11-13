import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-in')
        observer?.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
  )
  return observer
}

interface Props {
  children: ReactNode
  className?: string
  /** Jeda dalam ms, untuk menyusun urutan baca dalam satu blok. */
  delay?: number
}

/** Memunculkan blok satu kali saat masuk viewport. Tanpa JS atau dengan reduced motion, langsung tampil. */
export function Reveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = getObserver()
    io.observe(el)
    return () => io.unobserve(el)
  }, [])

  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined
  return (
    <div ref={ref} className={cn('reveal', className)} style={style}>
      {children}
    </div>
  )
}
