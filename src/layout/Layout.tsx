import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout({ home, children }: { home: boolean; children: ReactNode }) {
  return (
    <>
      <a
        href="#konten"
        className="btn btn-primary fixed left-3 top-3 z-[60] -translate-y-24 focus:translate-y-0"
      >
        Lewati ke konten
      </a>
      <Navbar home={home} />
      <main id="konten" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer home={home} />
    </>
  )
}
