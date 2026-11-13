import { Reveal } from '@/components/Reveal'
import { SectionLabel } from '@/components/SectionLabel'

const pillars = [
  {
    title: 'Data tersimpan di perangkat',
    body: 'Data transaksi tersimpan di perangkat. SQLite lokal digunakan sebagai database aplikasi.',
  },
  {
    title: 'Tetap bisa mencatat offline',
    body: 'Pencatatan transaksi dapat dilakukan secara offline, tanpa koneksi internet.',
  },
  {
    title: 'Google hanya untuk identitas dan backup',
    body: 'Google Login hanya untuk identitas pengguna. Google Drive digunakan untuk backup, dilindungi enkripsi AES-256-GCM dengan password yang kamu tentukan.',
  },
] as const

const steps = [
  { title: 'Kamu mencatat transaksi', body: 'Bisa dilakukan tanpa internet.' },
  { title: 'Tersimpan di SQLite', body: 'Database lokal di perangkatmu.' },
  { title: 'Kamu menjalankan backup', body: 'Manual atau otomatis, ke Google Drive milikmu.' },
  { title: 'File backup terenkripsi', body: 'Dilindungi AES-256-GCM dengan passwordmu.' },
] as const

export default function PrivacySection() {
  return (
    <section id="keunggulan" aria-labelledby="privasi-title" className="bg-surface py-20 sm:py-28 lg:py-32">
      <div className="wrap">
        <Reveal>
          <SectionLabel>Privasi dan offline first</SectionLabel>
          <h2
            id="privasi-title"
            className="max-w-3xl text-[clamp(2.25rem,5.6vw+0.2rem,4.5rem)] font-extrabold leading-[1.04] tracking-tight"
          >
            <span className="block">Your Data.</span>
            <span className="block">Your Device.</span>
            <span className="block text-link">Your Control.</span>
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-20">
          {pillars.map((pillar, i) => (
            <li key={pillar.title}>
              <Reveal delay={i * 90} className="border-t-2 border-ink pt-5">
                <h3 className="text-xl font-bold">{pillar.title}</h3>
                <p className="mt-3 text-soft">{pillar.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-20 lg:mt-28">
          <h3 className="text-2xl font-bold">Alur penyimpanan data</h3>
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t border-dotted border-ink pt-4">
                <span className="num font-heading text-sm text-soft">Langkah {i + 1}</span>
                <h4 className="mt-1 text-lg font-bold">{step.title}</h4>
                <p className="mt-1 text-soft">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-soft">
            Tidak ada database cloud untuk transaksi dan tidak ada sinkronisasi otomatis antarperangkat. Google Drive
            hanya menyimpan file backup.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
