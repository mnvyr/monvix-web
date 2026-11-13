import { useEffect, useRef, useState } from 'react'
import iconSmall from '@/assets/monvix-icon-128.webp'
import { Close, Menu } from '@/components/icons'
import { DownloadButton } from '@/components/DownloadButton'
import { ThemeToggle } from '@/components/ThemeToggle'
import { navItems } from '@/config/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/cn'

const sectionIds = navItems.map((item) => item.target)

/** `home` true di halaman utama: tautan menggulir ke section. Di halaman lain tautan kembali ke beranda. */
export function Navbar({ home }: { home: boolean }) {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds, home)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const href = (target: string) => (home ? `#${target}` : `/#${target}`)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
        scrolled || open ? 'border-rule bg-paper/90 backdrop-blur-md' : 'border-transparent',
      )}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href={home ? '#home' : '/'} className="flex min-h-11 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={iconSmall} alt="" width={40} height={40} className="h-10 w-10 rounded-[10px]" />
          <span className="font-heading text-xl font-extrabold tracking-tight">Monvix</span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const current = active === item.target
              return (
                <li key={item.target}>
                  <a
                    href={href(item.target)}
                    aria-current={current ? 'location' : undefined}
                    className={cn(
                      'inline-flex min-h-11 items-center px-3 text-[0.9375rem] font-medium underline-offset-[10px] transition-colors hover:text-link',
                      current && 'text-link underline decoration-2',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden lg:block">
            <DownloadButton label="Download APK" className="min-h-11 px-4 py-2 text-sm" />
          </div>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
            className="flex min-h-11 items-center gap-2 rounded-md border border-ink px-3 font-heading text-sm font-semibold lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="menu-in border-t border-rule lg:hidden">
          <nav aria-label="Navigasi utama" className="wrap pb-5 pt-2">
            <ul>
              {navItems.map((item) => (
                <li key={item.target} className="border-b border-rule">
                  <a
                    href={href(item.target)}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.target ? 'location' : undefined}
                    className={cn('flex min-h-12 items-center font-heading text-lg font-semibold', active === item.target && 'text-link')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <DownloadButton label="Download APK" wrapperClassName="mt-5 flex w-full" className="w-full" />
          </nav>
        </div>
      )}
    </header>
  )
}
