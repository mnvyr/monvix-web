import { budgets } from '@/data/dummy'
import { rupiah } from '@/lib/format'
import { BottomNav, Card, Progress, ScreenTitle, StatusBar } from './parts'

export function BudgetScreen() {
  const totalLimit = budgets.reduce((s, b) => s + b.limit, 0)
  const totalSpent = budgets.reduce((s, b) => s + b.spent, 0)
  const pct = Math.round((totalSpent / totalLimit) * 100)

  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <ScreenTitle sub="November 2026">Budget</ScreenTitle>
      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-3.5 pb-2">
        <div className="rounded-[20px] bg-brand-gradient p-4 text-white">
          <div className="text-[9px] tracking-[0.14em] opacity-80">TERPAKAI BULAN INI</div>
          <div className="mt-0.5 font-heading text-[22px] font-extrabold">{rupiah(totalSpent)}</div>
          <div className="mb-2 text-[10px] opacity-90">dari {rupiah(totalLimit)} · {pct}%</div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/25">
            <div className="h-full rounded-full bg-white" style={{ width: `${pct}%` }} />
          </div>
        </div>

        {budgets.map((b) => {
          const p = Math.round((b.spent / b.limit) * 100)
          return (
            <Card key={b.name}>
              <div className="mb-1.5 flex items-baseline justify-between">
                <b className="text-[12px]">{b.name}</b>
                <span className="text-[10px] font-bold text-brand-muted">{p}%</span>
              </div>
              <Progress value={p} tone={p >= 90 ? 'warn' : 'brand'} />
              <div className="mt-1.5 flex justify-between text-[10px] text-brand-muted">
                <span>{rupiah(b.spent)}</span>
                <span>Batas {rupiah(b.limit)}</span>
              </div>
            </Card>
          )
        })}
      </div>
      <BottomNav active="Home" />
    </div>
  )
}
