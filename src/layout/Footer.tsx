import iconSmall from '@/assets/monvix-icon-128.webp'
import { navItems, site } from '@/config/site'

export function Footer({ home }: { home: boolean }) {
  const base = home ? '' : '/'
  const links = [
    ...navItems.map((item) => ({ label: item.label, href: `${base}#${item.target}` })),
    { label: 'Download', href: `${base}#download` },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ]

  return (
    <footer className="on-navy bg-navy text-[#C9D6F5]">
      <div className="wrap grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <img src={iconSmall} alt="" width={44} height={44} loading="lazy" className="h-11 w-11 rounded-[10px]" />
            <span className="font-heading text-xl font-extrabold text-white">{site.name}</span>
          </div>
          <p className="mt-4 max-w-sm">
            Aplikasi Android pencatat keuangan pribadi. Data transaksi tersimpan di perangkat, backup lewat Google Drive.
          </p>
          <p className="mt-3 font-heading font-semibold text-white">{site.tagline}</p>
        </div>

        <nav aria-label="Navigasi footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-1 lg:justify-end">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="inline-flex min-h-11 min-w-11 items-center underline-offset-4 hover:text-white hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/15">
        <p className="wrap py-5 text-sm">{site.copyright}</p>
      </div>
    </footer>
  )
}
