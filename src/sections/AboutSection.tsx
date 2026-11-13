import { ChevronDown, ChevronRight } from '@/components/icons'
import { Reveal } from '@/components/Reveal'
import { SectionLabel } from '@/components/SectionLabel'
import { cn } from '@/lib/cn'
import { lineNo } from '@/lib/format'

const points = [
  'Bisa digunakan tanpa koneksi internet untuk aktivitas pencatatan lokal.',
  'Tidak membutuhkan server database untuk menyimpan transaksi.',
  'Login Google digunakan untuk identitas pengguna.',
  'Google Drive digunakan sebagai tempat penyimpanan backup.',
  'Pengguna memiliki kendali atas data keuangannya sendiri.',
] as const

function Node({ title, hint, strong = false }: { title: string; hint: string; strong?: boolean }) {
  return (
    <li
      className={cn(
        'flex-1 rounded-md px-4 py-3',
        strong ? 'bg-navy text-white' : 'border border-rule bg-surface',
      )}
    >
      <div className="font-heading font-semibold">{title}</div>
      <div className={cn('text-sm', strong ? 'text-[#C9D6F5]' : 'text-soft')}>{hint}</div>
    </li>
  )
}

function Flow() {
  return (
    <li aria-hidden="true" role="presentation" className="grid place-items-center text-soft">
      <ChevronDown className="h-5 w-5 sm:hidden" />
      <ChevronRight className="hidden h-5 w-5 sm:block" />
    </li>
  )
}

/** Alur data: transaksi tidak keluar dari perangkat. Google hanya untuk identitas dan file backup. */
function ArchitectureDiagram() {
  return (
    <figure className="rounded-xl border border-rule bg-paper p-5 sm:p-7">
      <figcaption className="sr-only">
        Diagram arsitektur Monvix. Pengguna memakai aplikasi Monvix, yang menyimpan data transaksi di SQLite lokal pada
        perangkat. Google Account dipakai untuk identitas pengguna. Google Drive dipakai untuk backup dan restore.
      </figcaption>

      <div className="rounded-lg border-[1.5px] border-ink p-4 sm:p-5">
        <p className="mb-4 font-heading text-sm font-semibold">Di perangkatmu</p>
        <ol className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
          <Node title="Pengguna" hint="Mencatat transaksi" />
          <Flow />
          <Node title="Aplikasi Monvix" hint="Dibuat dengan Flutter" strong />
          <Flow />
          <Node title="SQLite lokal" hint="Data transaksi" />
        </ol>
      </div>

      <dl className="mt-7 space-y-3">
        <div className="leader">
          <dt>Google Account</dt>
          <dd className="font-semibold">Identitas pengguna</dd>
        </div>
        <div className="leader">
          <dt>Google Drive</dt>
          <dd className="font-semibold">Backup dan restore</dd>
        </div>
      </dl>
      <p className="mt-6 text-sm text-soft">
        Transaksi tetap berada di perangkat. Google hanya dipakai untuk identitas dan untuk menyimpan file backup.
      </p>
    </figure>
  )
}

export default function AboutSection() {
  return (
    <section id="tentang" aria-labelledby="tentang-title" className="bg-surface py-16 sm:py-20 lg:py-28">
      <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
        <Reveal>
          <SectionLabel>Tentang Monvix</SectionLabel>
          <h2 id="tentang-title" className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Your Personal Finance, Simplified.
          </h2>
          <p className="mt-5 max-w-[34rem] text-lg text-soft">
            Monvix merupakan aplikasi pencatat keuangan pribadi berbasis Android yang dibuat menggunakan Flutter. Seluruh
            data transaksi disimpan secara lokal di perangkat menggunakan SQLite.
          </p>
          <ol className="mt-8 max-w-[34rem] border-b border-rule">
            {points.map((point, i) => (
              <li key={point} className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-t border-rule py-3.5">
                <span className="num pt-0.5 font-heading text-sm text-soft">{lineNo(i + 1)}</span>
                {point}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={120}>
          <ArchitectureDiagram />
        </Reveal>
      </div>
    </section>
  )
}
