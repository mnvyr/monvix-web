import { releases } from '@/data/changelog'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function ChangelogPage() {
  usePageMeta({
    title: 'Changelog | Monvix',
    description: 'Riwayat pembaruan aplikasi Monvix: fitur baru dan perbaikan bug di setiap versi.',
    path: '/update/changelog',
  })

  return (
    <div className="wrap pb-24 pt-28 sm:pt-36">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Changelog</h1>
        <p className="mt-4 text-lg text-soft">Daftar pembaruan Monvix, dari versi terbaru ke yang lebih lama.</p>
      </header>

      <div className="mt-12">
        {releases.map((release) => {
          const id = `v${release.version.replaceAll('.', '-')}`
          return (
            <article
              key={release.version}
              aria-labelledby={id}
              className="grid grid-cols-1 gap-6 border-t border-rule py-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12"
            >
              <div>
                <h2 id={id} className="num font-heading text-3xl font-extrabold text-link lg:sticky lg:top-24">
                  v{release.version}
                  {release.label && <span className="mt-1 block text-base font-semibold text-soft">{release.label}</span>}
                </h2>
              </div>

              <div className="min-w-0 space-y-10">
                {release.status && <p className="max-w-2xl text-soft">{release.status}</p>}
                {release.groups.map((group) => (
                  <section key={group.title}>
                    <h3 className="text-xl font-bold">{group.title}</h3>
                    <dl className="mt-4 divide-y divide-rule border-y border-rule">
                      {group.items.map((item) => (
                        <div key={item.title} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6">
                          <dt className="font-heading font-semibold">{item.title}</dt>
                          <dd className="text-soft">{item.detail}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
