import { ArrowLeftRight, Gauge, Minus, Plus, Target } from '@/components/icons'
import { monthSummary, totalBalance, weeklySpending } from '@/data/dummy'
import { cn } from '@/lib/cn'
import { rupiah } from '@/lib/format'
import { BottomNav, Card, StatusBar } from './parts'

const quick = [
  { label: 'Income', icon: Plus },
  { label: 'Expense', icon: Minus },
  { label: 'Transfer', icon: ArrowLeftRight },
  { label: 'Budget', icon: Gauge },
  { label: 'Goal', icon: Target },
] as const

export function DashboardScreen() {
  const max = Math.max(...weeklySpending.map((d) => d.amount))
  const peak = weeklySpending.findIndex((d) => d.amount === max)

  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <div className="flex flex-1 flex-col gap-3 overflow-hidden px-3.5 pb-2 pt-1">
        <div className="text-[13px] font-bold text-navy">Halo!</div>

        <div className="rounded-[22px] bg-brand-gradient p-4 text-white">
          <div className="text-[9px] tracking-[0.14em] opacity-80">TOTAL BALANCE</div>
          <div className="mb-3 mt-0.5 font-heading text-[25px] font-extrabold leading-tight">{rupiah(totalBalance)}</div>
          <div className="flex gap-2.5 text-[10px]">
            <span className="flex-1 opacity-90">
              Income
              <strong className="block text-[12px]">{rupiah(monthSummary.income)}</strong>
            </span>
            <span className="flex-1 opacity-90">
              Expense
              <strong className="block text-[12px]">{rupiah(monthSummary.expense)}</strong>
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          {quick.map(({ label, icon: Icon }) => (
            <span key={label} className="flex flex-col items-center gap-1 text-[9px] font-bold text-brand-muted">
              <span className="grid h-[42px] w-[42px] place-items-center rounded-[14px] bg-[#E3ECFF] text-brand">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              {label}
            </span>
          ))}
        </div>

        <Card>
          <h4 className="mb-2 font-heading text-[12px] font-bold">Pengeluaran minggu ini</h4>
          <div className="flex h-[54px] items-end gap-1.5">
            {weeklySpending.map((d, i) => (
              <i
                key={i}
                className={cn('flex-1 rounded-t-[5px] rounded-b-[2px]', i === peak ? 'bg-brand' : 'bg-[#E3ECFF]')}
                style={{ height: `${Math.round((d.amount / max) * 100)}%` }}
              />
            ))}
          </div>
          <div className="mt-1 flex gap-1.5 text-center text-[9px] text-brand-muted">
            {weeklySpending.map((d, i) => (
              <span key={i} className="flex-1">
                {d.day}
              </span>
            ))}
          </div>
        </Card>
      </div>
      <BottomNav active="Home" />
    </div>
  )
}
