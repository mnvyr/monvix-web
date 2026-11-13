import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Close } from '@/components/icons'
import { PHONE_H, PHONE_W, PhoneFrame } from '@/components/PhoneFrame'
import { AppScreen } from '@/components/screens'
import type { MockupItem } from '@/types'

function fitScale(): number {
  return Math.max(0.6, Math.min(1.2, (window.innerHeight - 220) / PHONE_H, (window.innerWidth - 32) / PHONE_W))
}

interface Props {
  items: readonly MockupItem[]
  /** Indeks layar yang dibuka, atau null jika tertutup. */
  index: number | null
  onIndexChange: (index: number) => void
  onClose: () => void
}

/** Pratinjau layar penuh memakai <dialog> bawaan: Escape menutup dan fokus dijaga oleh browser. */
export function Lightbox({ items, index, onIndexChange, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  const [scale, setScale] = useState(fitScale)
  const isOpen = index !== null
  const item = index === null ? null : items[index]

  useEffect(() => {
    const onResize = () => setScale(fitScale())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  const step = (delta: number) => {
    if (index === null) return
    onIndexChange((index + delta + items.length) % items.length)
  }

  return (
    <dialog
      ref={ref}
      className="lightbox on-navy"
      aria-labelledby="lightbox-title"
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') step(-1)
        if (event.key === 'ArrowRight') step(1)
      }}
    >
      {item && index !== null && (
        <div
          className="relative flex min-h-full flex-col items-center justify-center px-4 py-14"
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup pratinjau"
            className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-md border border-white/40 text-white hover:bg-white hover:text-navy"
          >
            <Close className="h-5 w-5" />
          </button>

          <PhoneFrame scale={scale}>
            <AppScreen id={item.id} />
          </PhoneFrame>

          <h2 id="lightbox-title" className="mt-6 text-center font-heading text-xl font-bold text-white">
            {item.title}
          </h2>
          <p className="mt-1 max-w-sm text-center text-[#C9D6F5]">{item.caption}</p>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Layar sebelumnya"
              className="grid h-11 w-11 place-items-center rounded-md border border-white/40 text-white hover:bg-white hover:text-navy"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="num min-w-14 text-center font-heading text-sm text-white" aria-live="polite">
              {index + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Layar berikutnya"
              className="grid h-11 w-11 place-items-center rounded-md border border-white/40 text-white hover:bg-white hover:text-navy"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </dialog>
  )
}
