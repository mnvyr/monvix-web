import { calendarBills } from '@/data/dummy'
import { cn } from '@/lib/cn'
import { rupiah } from '@/lib/format'
import { BottomNav, Card, ScreenTitle, StatusBar } from './parts'

const weekdays = ['M', 'S', 'S', 'R', 'K', 'J', 'S'] as const
/** November 2026: 1 Nov = Minggu, 30 hari. */
const DAYS_IN_MONTH = 30
const FIRST_WEEKDAY = 0
const TODAY = 12

export function CalendarScreen() {
  const billDays = new Set<number>(calendarBills.map((b) => b.day))
  const cells: (number | null)[] = [
    ...Array.from({ length: FIRST_WEEKDAY }, () => null),
    ...Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1),
  ]

  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <ScreenTitle sub="Tagihan dan jatuh tempo">Financial Calendar</ScreenTitle>
      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-3.5 pb-2">
        <Card>
          <div className="mb-2 text-center font-heading text-[12px] font-bold">November 2026</div>
          <div className="grid grid-cols-7 gap-y-1 text-center text-[10px]">
            {weekdays.map((d, i) => (
              <span key={i} className="font-bold text-brand-muted">
                {d}
              </span>
            ))}
            {cells.map((day, i) => (
              <span key={i} className="grid h-[26px] place-items-center">
                {day && (
                  <span
                    className={cn(
                      'relative grid h-6 w-6 place-items-center rounded-full font-semibold',
                      day === TODAY && 'bg-brand text-white',
                      day !== TODAY && billDays.has(day) && 'bg-expense/15 text-expense-ink',
                    )}
                  >
                    {day}
                  </span>
                )}
              </span>
            ))}
          </div>
        </Card>

        <div className="text-[10px] font-bold uppercase tracking-[0.06em] text-brand-muted">Tagihan bulan ini</div>
        <Card className="py-1.5!">
          {calendarBills.map((b) => (
            <div key={b.name} className="flex items-center gap-2.5 py-1.5 text-[11px]">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-expense/10 text-[10px] font-extrabold text-expense-ink">
                {b.day}
              </span>
              <span className="flex-1 font-bold">{b.name}</span>
              <b className="tabular-nums">{rupiah(b.amount)}</b>
            </div>
          ))}
        </Card>
      </div>
      <BottomNav active="Home" />
    </div>
  )
}
