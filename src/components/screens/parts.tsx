import type { ReactNode } from 'react'
import { ArrowLeftRight, BarChart3, BatteryFull, Home, Signal, Target, User, Wifi } from '@/components/icons'
import { cn } from '@/lib/cn'

/** Status bar Android: jam di kiri, ikon di kanan, kamera di tengah. */
export function StatusBar({ light = false }: { light?: boolean }) {
  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-between px-5 pb-1 pt-[9px] text-[10px] font-bold',
        light ? 'text-white' : 'text-navy',
      )}
    >
      <span>9:41</span>
      <span className="flex items-center gap-1" aria-hidden="true">
        <Signal className="h-[10px] w-[10px]" />
        <Wifi className="h-[10px] w-[10px]" />
        <BatteryFull className="h-[11px] w-[11px]" />
      </span>
    </div>
  )
}

const navItems = [
  { label: 'Home', icon: Home },
  { label: 'Transaksi', icon: ArrowLeftRight },
  { label: 'Laporan', icon: BarChart3 },
  { label: 'Goals', icon: Target },
  { label: 'Profil', icon: User },
] as const

export type NavLabel = (typeof navItems)[number]['label']

/** Navigasi bawah 5 tab sesuai aplikasi. */
export function BottomNav({ active }: { active: NavLabel }) {
  return (
    <div className="flex shrink-0 justify-around border-t border-brand-line bg-white px-1.5 pb-[16px] pt-2">
      {navItems.map(({ label, icon: Icon }) => (
        <span
          key={label}
          className={cn(
            'flex flex-col items-center gap-0.5 text-[9px] font-bold',
            label === active ? 'text-brand' : 'text-brand-muted',
          )}
        >
          <Icon className="h-[17px] w-[17px]" strokeWidth={label === active ? 2.4 : 2} />
          {label}
        </span>
      ))}
    </div>
  )
}

export function ScreenTitle({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div className="shrink-0 px-4 pb-2 pt-1">
      <div className="font-heading text-[17px] font-extrabold leading-tight text-navy">{children}</div>
      {sub && <div className="mt-0.5 text-[10px] text-brand-muted">{sub}</div>}
    </div>
  )
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('rounded-2xl bg-white p-3 shadow-[0_1px_0_rgba(11,31,92,0.04)]', className)}>{children}</div>
}

export function Progress({ value, tone = 'brand' }: { value: number; tone?: 'brand' | 'warn' | 'income' }) {
  const bar = tone === 'warn' ? 'bg-expense' : tone === 'income' ? 'bg-income' : 'bg-brand'
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-brand-line/70" role="presentation">
      <div className={cn('h-full rounded-full', bar)} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  )
}
