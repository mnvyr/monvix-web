import { useLayoutEffect, useState, type RefObject } from 'react'

/** Skala agar elemen selebar `designWidth` muat di dalam wadah, dibatasi `max`. */
export function useFitScale(ref: RefObject<HTMLElement | null>, designWidth: number, max = 1, gutter = 0): number {
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => setScale(Math.min(max, Math.max(0.6, (el.clientWidth - gutter) / designWidth)))
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, designWidth, max, gutter])

  return scale
}
