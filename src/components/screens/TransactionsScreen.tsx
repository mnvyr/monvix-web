import { Plus, Search } from '@/components/icons'
import { transactionsToday, transactionsYesterday, type Tx } from '@/data/dummy'
import { cn } from '@/lib/cn'
import { rupiah } from '@/lib/format'
import { BottomNav, Card, ScreenTitle, StatusBar } from './parts'

function Row({ tx }: { tx: Tx }) {
  const sign = tx.kind === 'income' ? '+' : tx.kind === 'expense' ? '−' : ''
  const tone = tx.kind === 'income' ? 'text-income-ink' : tx.kind === 'expense' ? 'text-expense-ink' : 'text-navy'
  const tile =
    tx.kind === 'income' ? 'bg-income/15' : tx.kind === 'expense' ? 'bg-expense/15' : 'bg-brand/15 text-brand'
  return (
    <div className="flex items-center gap-2.5 py-[5px]">
      <span className={cn('grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[10px] text-[14px]', tile)}>{tx.emoji}</span>
      <span className="min-w-0 flex-1">
        <b className="block truncate text-[12px] font-bold">{tx.title}</b>
        <small className="block truncate text-[10px] text-brand-muted">{tx.meta}</small>
      </span>
      <span className={cn('text-[12px] font-bold tabular-nums', tone)}>
        {sign}
        {rupiah(tx.amount)}
      </span>
    </div>
  )
}

const chips = ['Semua', 'Income', 'Expense', 'Transfer'] as const

export function TransactionsScreen() {
  return (
    <div className="flex h-full flex-col">
      <StatusBar />
      <ScreenTitle>Transaksi</ScreenTitle>
      <div className="flex flex-1 flex-col gap-3 overflow-hidden px-3.5 pb-2">
        <div className="flex h-9 shrink-0 items-center gap-2 rounded-xl border border-brand-line bg-white px-3 text-[12px] text-brand-muted">
          <Search className="h-3.5 w-3.5" /> Cari transaksi
        </div>
        <div className="flex gap-1">
          {chips.map((c, i) => (
            <span
              key={c}
              className={cn(
                'rounded-full px-[9px] py-[5px] text-[10px] font-bold',
                i === 0 ? 'bg-brand text-white' : 'bg-[#E3ECFF] text-brand-muted',
              )}
            >
              {c}
            </span>
          ))}
        </div>

        <div className="text-[10px] font-bold uppercase tracking-[0.06em] text-brand-muted">Hari ini</div>
        <Card className="py-1.5!">
          {transactionsToday.map((t) => (
            <Row key={t.title} tx={t} />
          ))}
        </Card>

        <div className="text-[10px] font-bold uppercase tracking-[0.06em] text-brand-muted">Kemarin</div>
        <Card className="py-1.5!">
          {transactionsYesterday.map((t) => (
            <Row key={t.title} tx={t} />
          ))}
        </Card>
      </div>
      <span className="absolute bottom-[66px] right-4 z-20 grid h-[46px] w-[46px] place-items-center rounded-2xl bg-brand-gradient text-white shadow-[0_8px_18px_rgba(10,108,255,0.4)]">
        <Plus className="h-6 w-6" />
      </span>
      <BottomNav active="Transaksi" />
    </div>
  )
}
