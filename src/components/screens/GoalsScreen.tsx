import { goals } from '@/data/dummy'
import { rupiah } from '@/lib/format'
import { BottomNav, Card, Progress, ScreenTitle, StatusBar } from './parts'

export function GoalsScreen() {
  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <ScreenTitle sub="Target tabunganmu">Savings Goals</ScreenTitle>
      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-3.5 pb-2">
        {goals.map((g) => {
          const p = Math.round((g.saved / g.target) * 100)
          return (
            <Card key={g.name}>
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#E3ECFF] text-[17px]">{g.emoji}</span>
                <span className="min-w-0 flex-1">
                  <b className="block text-[12px]">{g.name}</b>
                  <small className="text-[10px] text-brand-muted">
                    {rupiah(g.saved)} / {rupiah(g.target)}
                  </small>
                </span>
                <span className="font-heading text-[14px] font-extrabold text-brand">{p}%</span>
              </div>
              <div className="mt-2.5">
                <Progress value={p} tone="income" />
              </div>
              <div className="mt-2.5 flex gap-2 text-[10px] font-bold">
                <span className="flex-1 rounded-lg bg-brand py-1.5 text-center text-white">Setor</span>
                <span className="flex-1 rounded-lg border border-brand-line py-1.5 text-center text-brand-deep">Tarik</span>
              </div>
            </Card>
          )
        })}
      </div>
      <BottomNav active="Goals" />
    </div>
  )
}
