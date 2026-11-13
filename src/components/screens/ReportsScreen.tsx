import { monthlyComparison, monthSummary, savingRate } from '@/data/dummy'
import { rupiah } from '@/lib/format'
import { BottomNav, Card, ScreenTitle, StatusBar } from './parts'

export function ReportsScreen() {
  const max = Math.max(...monthlyComparison.flatMap((m) => [m.income, m.expense]))

  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <ScreenTitle sub="4 bulan terakhir">Laporan</ScreenTitle>
      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-3.5 pb-2">
        <Card>
          <div className="mb-2 flex items-center justify-between">
            <h4 className="font-heading text-[12px] font-bold">Pemasukan vs pengeluaran</h4>
          </div>
          <div className="flex h-[96px] items-end gap-3">
            {monthlyComparison.map((m) => (
              <div key={m.month} className="flex h-full flex-1 items-end justify-center gap-1">
                <i className="w-full rounded-t-[4px] bg-income" style={{ height: `${(m.income / max) * 100}%` }} />
                <i className="w-full rounded-t-[4px] bg-expense" style={{ height: `${(m.expense / max) * 100}%` }} />
              </div>
            ))}
          </div>
          <div className="mt-1 flex gap-3 text-center text-[9px] text-brand-muted">
            {monthlyComparison.map((m) => (
              <span key={m.month} className="flex-1">
                {m.month}
              </span>
            ))}
          </div>
          <div className="mt-2 flex gap-3 text-[9px] font-bold text-brand-muted">
            <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-income" />Income</span>
            <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-expense" />Expense</span>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-2.5">
          <Card>
            <div className="text-[10px] text-brand-muted">Saving rate</div>
            <div className="font-heading text-[22px] font-extrabold text-income-ink">{savingRate}%</div>
            <div className="text-[9px] text-brand-muted">November 2026</div>
          </Card>
          <Card>
            <div className="text-[10px] text-brand-muted">Sisa bulan ini</div>
            <div className="font-heading text-[15px] font-extrabold leading-8">
              {rupiah(monthSummary.income - monthSummary.expense)}
            </div>
            <div className="text-[9px] text-brand-muted">Income − Expense</div>
          </Card>
        </div>

        <Card>
          <h4 className="mb-2 font-heading text-[12px] font-bold">Kategori terbesar</h4>
          {[
            ['Makanan', '34%'],
            ['Hiburan', '17%'],
            ['Transportasi', '14%'],
          ].map(([name, pct]) => (
            <div key={name} className="flex items-center justify-between py-1 text-[11px]">
              <span>{name}</span>
              <b>{pct}</b>
            </div>
          ))}
        </Card>
      </div>
      <BottomNav active="Laporan" />
    </div>
  )
}
