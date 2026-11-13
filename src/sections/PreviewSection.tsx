import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from '@/components/icons'
import { Lightbox } from '@/components/Lightbox'
import { PhoneFrame } from '@/components/PhoneFrame'
import { Reveal } from '@/components/Reveal'
import { AppScreen } from '@/components/screens'
import { SectionLabel } from '@/components/SectionLabel'
import { mockups } from '@/data/mockups'
import { cn } from '@/lib/cn'

const CARD_SCALE = 0.9
const CARD_WIDTH = 280 * CARD_SCALE

function motion(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

const controlClass =
  'grid h-11 w-11 place-items-center rounded-md border border-white/40 text-white transition-colors hover:bg-white hover:text-navy disabled:border-white/20 disabled:text-white/40 disabled:hover:bg-transparent disabled:hover:text-white/40'

export default function PreviewSection() {
  const [active, setActive] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const scroller = useRef<HTMLUListElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])

  const lockUntil = useRef(0)

  useEffect(() => {
    const root = scroller.current
    if (!root) return
    const nearestToCenter = () => {
      if (performance.now() < lockUntil.current) return
      const mid = root.getBoundingClientRect().left + root.clientWidth / 2
      let best = 0
      let bestDistance = Infinity
      itemRefs.current.forEach((el, i) => {
        if (!el) return
        const box = el.getBoundingClientRect()
        const distance = Math.abs(box.left + box.width / 2 - mid)
        if (distance < bestDistance) {
          best = i
          bestDistance = distance
        }
      })
      setActive(best)
    }
    root.addEventListener('scroll', nearestToCenter, { passive: true })
    return () => root.removeEventListener('scroll', nearestToCenter)
  }, [])

  const goTo = (i: number) => {
    const clamped = Math.min(mockups.length - 1, Math.max(0, i))
    setActive(clamped)
    lockUntil.current = performance.now() + 900
    itemRefs.current[clamped]?.scrollIntoView({ behavior: motion(), inline: 'center', block: 'nearest' })
  }

  return (
    <section id="preview" aria-labelledby="preview-title" className="on-navy bg-navy py-16 text-white sm:py-24 lg:py-28">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <SectionLabel onDark>Preview Aplikasi</SectionLabel>
          <h2 id="preview-title" className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Lihat Monvix dari dekat.
          </h2>
          <p className="mt-4 text-lg text-[#C9D6F5]">
            {mockups.length} layar dalam bingkai ponsel Android. Pilih salah satu untuk memperbesarnya.
          </p>
        </Reveal>

        <div className="mt-10 flex items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Pilih layar"
            className="no-scrollbar -mx-4 flex min-w-0 flex-1 gap-2 overflow-x-auto px-4 py-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-wrap lg:px-0"
          >
            {mockups.map((m, i) => (
              <button
                key={m.id}
                type="button"
                aria-current={i === active ? 'true' : undefined}
                onClick={() => goTo(i)}
                className={cn(
                  'min-h-11 shrink-0 whitespace-nowrap rounded-md border px-3.5 text-sm font-semibold transition-colors',
                  i === active ? 'border-white bg-white text-navy' : 'border-white/35 text-white hover:border-white hover:bg-white/10',
                )}
              >
                {m.short}
              </button>
            ))}
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button type="button" className={controlClass} onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Layar sebelumnya">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className={controlClass}
              onClick={() => goTo(active + 1)}
              disabled={active === mockups.length - 1}
              aria-label="Layar berikutnya"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <ul
          ref={scroller}
          aria-label="Daftar layar aplikasi"
          className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-7 overflow-x-auto px-4 pb-6 pt-3 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          {mockups.map((m, i) => (
            <li
              key={m.id}
              ref={(el) => {
                itemRefs.current[i] = el
              }}
              className="shrink-0 snap-center"
            >
              <figure className="flex flex-col items-center gap-5" style={{ width: CARD_WIDTH }}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`Perbesar tampilan ${m.title}`}
                  className="rounded-[40px] transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <PhoneFrame scale={CARD_SCALE}>
                    <AppScreen id={m.id} />
                  </PhoneFrame>
                </button>
                <figcaption className="text-center">
                  <span className="block font-heading font-semibold">{m.title}</span>
                  <span className="mt-1 block text-sm text-[#C9D6F5]">{m.caption}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm text-[#BBCBF2]">
          Tampilan memakai data contoh dalam Rupiah, bukan data pengguna sungguhan.
        </p>
      </div>

      <Lightbox items={mockups} index={openIndex} onIndexChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </section>
  )
}
