import { subscriptions } from '@/data/dummy'
import { rupiah } from '@/lib/format'
import { BottomNav, Card, ScreenTitle, StatusBar } from './parts'

export function SubscriptionsScreen() {
  const monthly = subscriptions.filter((s) => s.cycle === 'Bulanan').reduce((sum, s) => sum + s.price, 0)

  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <ScreenTitle sub="Langganan aktif">Subscription Manager</ScreenTitle>
      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-3.5 pb-2">
        <div className="rounded-[20px] bg-brand-gradient p-4 text-white">
          <div className="text-[9px] tracking-[0.14em] opacity-80">LANGGANAN BULANAN</div>
          <div className="mt-0.5 font-heading text-[24px] font-extrabold">{rupiah(monthly)}</div>
          <div className="text-[10px] opacity-90">per bulan, belum termasuk langganan tahunan</div>
        </div>

        {subscriptions.map((s) => (
          <Card key={s.name} className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#E3ECFF] text-[18px]">{s.emoji}</span>
            <span className="min-w-0 flex-1">
              <b className="block truncate text-[12px]">{s.name}</b>
              <small className="text-[10px] text-brand-muted">
                {s.cycle} · tagihan berikutnya {s.next}
              </small>
            </span>
            <b className="text-[12px] tabular-nums">{rupiah(s.price)}</b>
          </Card>
        ))}
      </div>
      <BottomNav active="Home" />
    </div>
  )
}
