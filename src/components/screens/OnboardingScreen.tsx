import { Receipt, TrendingUp } from '@/components/icons'
import { StatusBar } from './parts'

export function OnboardingScreen() {
  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <div className="flex flex-1 flex-col items-center px-5 pb-8 text-center">
        <span className="self-end text-[11px] font-bold text-brand-muted">Lewati</span>

        <div className="relative mt-8 grid h-[148px] w-[148px] place-items-center rounded-full bg-brand-gradient shadow-[0_18px_36px_rgba(10,108,255,0.35)]">
          <Receipt className="h-[64px] w-[64px] text-white" strokeWidth={1.6} />
          <span className="absolute -right-2 top-3 grid h-9 w-9 place-items-center rounded-xl bg-white shadow-card">
            <TrendingUp className="h-5 w-5 text-income-ink" />
          </span>
          <span className="absolute -left-3 bottom-4 rounded-lg bg-white px-2 py-1 text-[10px] font-bold text-expense-ink shadow-card">
            −Rp35.000
          </span>
        </div>

        <h3 className="mt-8 font-heading text-[20px] font-extrabold text-navy">Track Your Expenses</h3>
        <p className="mt-2 px-2 text-[12px] leading-relaxed text-brand-muted">
          Catat seluruh pengeluaran dan pemasukanmu dengan cepat dan rapi.
        </p>

        <div className="mt-auto flex items-center gap-1.5" aria-hidden="true">
          <i className="h-[7px] w-[22px] rounded bg-brand" />
          <i className="h-[7px] w-[7px] rounded bg-brand-line" />
          <i className="h-[7px] w-[7px] rounded bg-brand-line" />
        </div>
        <div className="mt-4 flex w-full">
          <span className="grid h-[42px] flex-1 place-items-center rounded-[13px] bg-brand text-[13px] font-bold text-white">
            Lanjut
          </span>
        </div>
      </div>
    </div>
  )
}
