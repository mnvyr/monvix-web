import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export interface LegalSection {
  heading: string
  body: string[]
}

interface Props {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
  /** Halaman dokumen lain yang berpasangan. */
  other: { label: string; href: string }
}

/** Kerangka halaman dokumen hukum: judul, tanggal pembaruan, dan bagian bernomor. */
export function LegalPage({ title, updated, intro, sections, other }: Props) {
  useDocumentTitle(`${title} | Monvix`)

  return (
    <div className="wrap pb-24 pt-28 sm:pt-36">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-3 text-soft">Terakhir diperbarui: {updated}</p>
        <p className="mt-6 text-lg">{intro}</p>

        <div className="mt-10 space-y-10">
          {sections.map((section, i) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold sm:text-2xl">
                <span className="num mr-3 text-soft">{String(i + 1).padStart(2, '0')}</span>
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-soft">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-14 border-t border-rule pt-6">
          Baca juga: <a href={other.href} className="font-semibold text-link underline underline-offset-4">{other.label}</a>
        </p>
      </article>
    </div>
  )
}
