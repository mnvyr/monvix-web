import { Reveal } from '@/components/Reveal'
import { SectionLabel } from '@/components/SectionLabel'
import { featureCount, featureGroups } from '@/data/features'
import { cn } from '@/lib/cn'
import { lineNo } from '@/lib/format'
import type { FeatureGroup } from '@/types'

/** Grup dengan banyak item memakai dua kolom padat; grup kecil memakai baris lebar. */
function GroupLedger({ group, dense }: { group: FeatureGroup; dense: boolean }) {
  const titleId = `fitur-${group.id}-title`
  return (
    <section id={`fitur-${group.id}`} aria-labelledby={titleId} className="scroll-mt-24">
      <header className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 id={titleId} className="text-2xl font-bold">
          {group.title}
        </h3>
        <p className="text-soft">{group.summary}</p>
      </header>
      <dl className={cn('border-b border-rule', dense && 'md:grid md:grid-cols-2 md:gap-x-12')}>
        {group.items.map((item) => (
          <div
            key={item.title}
            className={cn(
              'line-row -mx-2 grid content-start gap-x-3 rounded-sm border-t border-rule px-2 py-4 transition-colors hover:bg-surface',
              dense
                ? 'grid-cols-[2.25rem_minmax(0,1fr)]'
                : 'grid-cols-[2.25rem_minmax(0,1fr)] sm:grid-cols-[3rem_minmax(0,15rem)_minmax(0,1fr)] sm:gap-x-4',
            )}
          >
            <dt className="font-heading font-semibold">{item.title}</dt>
            <dd className={cn('col-start-2 text-soft', !dense && 'sm:col-start-3')}>{item.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default function FeaturesSection() {
  return (
    <section id="fitur" aria-labelledby="fitur-title" className="py-16 sm:py-20 lg:py-24">
      <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionLabel>Fitur</SectionLabel>
            <h2 id="fitur-title" className="text-3xl font-bold sm:text-4xl">
              {featureCount} fitur untuk mencatat, merencanakan, dan melindungi uangmu.
            </h2>
            <p className="mt-4 text-soft">Daftar ini mengikuti fungsi aplikasi apa adanya.</p>
            <nav aria-label="Kelompok fitur" className="mt-8">
              <ol className="border-b border-rule">
                {featureGroups.map((group, i) => (
                  <li key={group.id} className="border-t border-rule">
                    <a href={`#fitur-${group.id}`} className="flex min-h-12 items-center justify-between gap-3 py-2 hover:text-link">
                      <span className="font-heading font-semibold">
                        <span className="num mr-3 text-sm text-soft">{lineNo(i + 1)}</span>
                        {group.title}
                      </span>
                      <span className="num text-sm text-soft">{group.items.length}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        </div>

        <div className="ledger space-y-14 sm:space-y-16">
          {featureGroups.map((group) => (
            <Reveal key={group.id}>
              <GroupLedger group={group} dense={group.items.length > 8} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
