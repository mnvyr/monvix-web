import { Reveal } from '@/components/Reveal'
import { SectionLabel } from '@/components/SectionLabel'
import { backupHistory } from '@/data/dummy'

const controls = [
  { title: 'PIN 6 digit', body: 'Kunci aplikasi dengan PIN 6 digit.' },
  { title: 'Biometric Authentication', body: 'Buka aplikasi dengan autentikasi biometrik.' },
  { title: 'Google Drive Backup', body: 'Backup manual dan otomatis ke Google Drive milikmu.' },
  { title: 'Backup terenkripsi password', body: 'Backup Google Drive dienkripsi AES-256-GCM memakai password dari kamu.' },
  { title: 'Safe Restore', body: 'Pulihkan data dengan proses restore yang aman.' },
  { title: 'Backup History', body: 'Lihat riwayat backup yang pernah dibuat.' },
] as const

export default function SecuritySection() {
  return (
    <section id="keamanan" aria-labelledby="keamanan-title" className="on-navy bg-navy py-16 text-white sm:py-24 lg:py-28">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <SectionLabel onDark>Security dan Backup</SectionLabel>
          <h2 id="keamanan-title" className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Kunci aplikasi, lindungi backup.
          </h2>
          <p className="mt-4 text-lg text-[#C9D6F5]">
            Enam pengaman yang menjaga akses ke aplikasi dan file backup milikmu.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <Reveal>
            <dl className="border-b border-white/20">
              {controls.map((control) => (
                <div
                  key={control.title}
                  className="grid gap-x-6 border-t border-white/20 py-4 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]"
                >
                  <dt className="font-heading font-semibold text-white">{control.title}</dt>
                  <dd className="text-[#C9D6F5]">{control.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <figure className="rounded-xl border border-white/20 bg-[#0A1A4E] p-6 sm:p-8">
              <p className="text-sm text-[#C9D6F5]">Enkripsi backup Google Drive</p>
              <p className="mt-1 break-words font-heading text-3xl font-extrabold text-[#5CE1F2] sm:text-4xl">AES-256-GCM</p>

              <h3 className="mt-8 font-heading text-base font-semibold">Riwayat backup</h3>
              <dl className="mt-4 space-y-3 text-[#C9D6F5]">
                {backupHistory.map((entry) => (
                  <div key={entry.when} className="leader leader-cyan">
                    <dt>{entry.when}</dt>
                    <dd className="font-semibold text-white">{entry.type}</dd>
                  </div>
                ))}
              </dl>
              <figcaption className="mt-6 text-sm text-[#BBCBF2]">Contoh tampilan riwayat backup, bukan data pengguna.</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
