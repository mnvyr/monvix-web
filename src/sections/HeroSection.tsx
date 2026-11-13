import { useRef, type CSSProperties } from 'react'
import { DownloadButton } from '@/components/DownloadButton'
import { PHONE_W, PhoneFrame } from '@/components/PhoneFrame'
import { DashboardScreen } from '@/components/screens/DashboardScreen'
import { heroFacts } from '@/config/site'
import { goals, monthSummary, totalBalance } from '@/data/dummy'
import { featureCount } from '@/data/features'
import { useFitScale } from '@/hooks/useFitScale'
import { rupiah } from '@/lib/format'

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

/** Panel navy dengan ponsel yang menembus tepi atasnya, dan ringkasan angka bergaya buku kas. */
function HeroPanel() {
  const ref = useRef<HTMLDivElement>(null)
  const scale = useFitScale(ref, PHONE_W, 1.12, 40)
  const goal = goals[0]
  const goalPct = Math.round((goal.saved / goal.target) * 100)

  return (
    <div ref={ref} className="on-navy relative mx-auto w-full max-w-[34rem] lg:max-w-none">
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-20 rounded-xl bg-navy sm:top-24" />
      <div className="relative px-5 pb-8 sm:px-8">
        <div className="rise flex justify-center" style={delay(120)}>
          <PhoneFrame scale={scale}>
            <DashboardScreen />
          </PhoneFrame>
        </div>

        <dl className="mx-auto mt-8 max-w-sm space-y-3 text-[#C9D6F5]">
          <div className="leader leader-cyan rise" style={delay(320)}>
            <dt>Total saldo</dt>
            <dd className="num font-heading font-semibold text-white">{rupiah(totalBalance)}</dd>
          </div>
          <div className="leader leader-cyan rise" style={delay(400)}>
            <dt>Pemasukan bulan ini</dt>
            <dd className="num font-heading font-semibold text-[#4ADE80]">{rupiah(monthSummary.income)}</dd>
          </div>
          <div className="leader leader-cyan rise" style={delay(480)}>
            <dt>Pengeluaran bulan ini</dt>
            <dd className="num font-heading font-semibold text-[#FB7185]">{rupiah(monthSummary.expense)}</dd>
          </div>
          <div className="leader leader-cyan rise" style={delay(560)}>
            <dt>{goal.name}</dt>
            <dd className="num font-heading font-semibold text-white">{goalPct}% tercapai</dd>
          </div>
        </dl>
        <p className="mt-6 text-center text-sm text-[#BBCBF2]">Angka pada tampilan ini adalah data contoh.</p>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-title" className="pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="wrap grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12">
        <div>
          <h1
            id="hero-title"
            className="text-[clamp(2.25rem,6.4vw+0.2rem,4.5rem)] font-extrabold leading-[1.04] tracking-tight"
          >
            Take Control of Your Money. <span className="text-link">Build Your Future.</span>
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg text-soft sm:text-xl">
            Kelola keuangan pribadi dengan lebih mudah. Catat setiap pemasukan dan pengeluaran, pantau anggaran, bangun
            tabungan, dan pahami kondisi keuanganmu dalam satu aplikasi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
            <DownloadButton showMeta wrapperClassName="flex w-full sm:inline-flex sm:w-auto" className="w-full sm:w-auto" />
            <a href="#fitur" className="btn btn-quiet w-full sm:w-auto">
              Lihat {featureCount} fitur
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-rule pt-6 sm:max-w-[34rem]">
            {heroFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-soft">{fact.label}</dt>
                <dd className="font-heading font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroPanel />
      </div>
    </section>
  )
}
