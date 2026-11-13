import { debts, netWorth, totalBalance, totalDebt, wallets } from '@/data/dummy'
import { rupiah } from '@/lib/format'
import { BottomNav, Card, ScreenTitle, StatusBar } from './parts'

export function NetWorthScreen() {
  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <ScreenTitle sub="Aset dikurangi utang">Net Worth</ScreenTitle>
      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-3.5 pb-2">
        <div className="rounded-[20px] bg-brand-gradient p-4 text-white">
          <div className="text-[9px] tracking-[0.14em] opacity-80">NET WORTH</div>
          <div className="my-0.5 font-heading text-[25px] font-extrabold">{rupiah(netWorth)}</div>
          <div className="text-[10px] opacity-90">
            {rupiah(totalBalance)} − {rupiah(totalDebt)}
          </div>
        </div>

        <Card>
          <div className="mb-1.5 flex items-center justify-between">
            <h4 className="font-heading text-[12px] font-bold">Aset</h4>
            <b className="text-[12px] text-income-ink">{rupiah(totalBalance)}</b>
          </div>
          {wallets.map((w) => (
            <div key={w.name} className="flex justify-between py-1 text-[11px]">
              <span className="text-brand-muted">{w.name}</span>
              <b className="tabular-nums">{rupiah(w.balance)}</b>
            </div>
          ))}
        </Card>

        <Card>
          <div className="mb-1.5 flex items-center justify-between">
            <h4 className="font-heading text-[12px] font-bold">Utang</h4>
            <b className="text-[12px] text-expense-ink">{rupiah(totalDebt)}</b>
          </div>
          {debts.map((d) => (
            <div key={d.name} className="flex justify-between py-1 text-[11px]">
              <span className="text-brand-muted">{d.name}</span>
              <b className="tabular-nums">{rupiah(d.amount)}</b>
            </div>
          ))}
        </Card>
      </div>
      <BottomNav active="Laporan" />
    </div>
  )
}
