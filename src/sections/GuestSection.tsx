import { Check } from '@/components/icons'
import { Reveal } from '@/components/Reveal'
import { SectionLabel } from '@/components/SectionLabel'
import { cn } from '@/lib/cn'

const guest = [
  'Bisa membuka Dashboard.',
  'Bisa menambahkan transaksi.',
  'Data tamu tidak hilang ketika kamu login Google.',
  'Fitur tertentu memerlukan login Google.',
] as const

const google = [
  'Identitas pengguna lewat akun Google.',
  'Diperlukan oleh fitur yang membutuhkan identitas akun.',
  'Google bukan tempat menyimpan data transaksi.',
] as const

function Option({ title, items, dark = false }: { title: string; items: readonly string[]; dark?: boolean }) {
  return (
    <div className={cn('rounded-xl p-5 sm:p-6', dark ? 'on-navy bg-navy text-white' : 'border border-rule bg-surface')}>
      {/* Ilustrasi tombol di layar masuk aplikasi, sengaja bukan tombol di situs ini. */}
      <h3
        className={cn(
          'rounded-[10px] border-[1.5px] px-4 py-3 text-center font-heading text-base font-semibold',
          dark ? 'border-transparent bg-white text-navy' : 'border-ink',
        )}
      >
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <Check className={cn('mt-1 h-4 w-4 shrink-0', dark ? 'text-[#5CE1F2]' : 'text-link')} strokeWidth={2.6} />
            <span className={dark ? 'text-[#C9D6F5]' : undefined}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function GuestSection() {
  return (
    <section id="mode-tamu" aria-labelledby="tamu-title" className="py-16 sm:py-20 lg:py-24">
      <div className="wrap grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal>
          <SectionLabel>Mode Tamu dan Google Login</SectionLabel>
          <h2 id="tamu-title" className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Coba dulu, login belakangan.
          </h2>
          <p className="mt-5 max-w-[30rem] text-lg text-soft">
            Kamu bisa mencoba Monvix tanpa harus langsung membuat akun. Login Google diperlukan untuk fitur yang
            membutuhkan identitas akun.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <figure>
            <div className="grid gap-4 sm:grid-cols-2">
              <Option title="Continue as Guest" items={guest} />
              <Option title="Continue with Google" items={google} dark />
            </div>
            <figcaption className="mt-4 text-sm text-soft">Dua pilihan di layar masuk aplikasi (ilustrasi).</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
