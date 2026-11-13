/**
 * Data ilustrasi untuk mockup (bukan data pengguna sungguhan).
 * Semua angka saling konsisten antar layar:
 *  - Total saldo  = jumlah seluruh dompet
 *  - Net worth    = total saldo − total utang
 *  - Saving rate  = (pemasukan − pengeluaran) / pemasukan bulan ini
 */

export const wallets = [
  { name: 'Kas', balance: 650_000 },
  { name: 'Rekening Bank', balance: 9_800_000 },
  { name: 'E-Wallet', balance: 2_400_000 },
] as const

export const totalBalance = wallets.reduce((sum, w) => sum + w.balance, 0) // 12.850.000

export const monthSummary = { income: 5_500_000, expense: 2_300_000 } as const

export const savingRate = Math.round(
  ((monthSummary.income - monthSummary.expense) / monthSummary.income) * 100,
) // 58

/** Pengeluaran 7 hari terakhir, Senin–Minggu. */
export const weeklySpending = [
  { day: 'S', amount: 85_000 },
  { day: 'S', amount: 142_000 },
  { day: 'R', amount: 68_000 },
  { day: 'K', amount: 210_000 },
  { day: 'J', amount: 124_000 },
  { day: 'S', amount: 52_000 },
  { day: 'M', amount: 96_000 },
] as const

export type TxKind = 'income' | 'expense' | 'transfer'

export interface Tx {
  title: string
  meta: string
  amount: number
  kind: TxKind
  emoji: string
}

export const transactionsToday: Tx[] = [
  { title: 'Makan siang', meta: 'Makanan · Kas', amount: 35_000, kind: 'expense', emoji: '🍜' },
  { title: 'Ojek ke kantor', meta: 'Transportasi · E-Wallet', amount: 18_000, kind: 'expense', emoji: '🛵' },
]

export const transactionsYesterday: Tx[] = [
  { title: 'Proyek freelance', meta: 'Pekerjaan · Rekening Bank', amount: 1_500_000, kind: 'income', emoji: '💼' },
  { title: 'Bank ke E-Wallet', meta: 'Transfer', amount: 200_000, kind: 'transfer', emoji: '⇄' },
]

export const budgets = [
  { name: 'Makanan', limit: 1_200_000, spent: 780_000 },
  { name: 'Transportasi', limit: 500_000, spent: 320_000 },
  { name: 'Hiburan', limit: 400_000, spent: 385_000 },
  { name: 'Belanja', limit: 600_000, spent: 210_000 },
] as const

export const goals = [
  { name: 'Dana Darurat', saved: 6_000_000, target: 15_000_000, emoji: '🛟' },
  { name: 'Liburan Bali', saved: 2_500_000, target: 8_000_000, emoji: '🏝️' },
  { name: 'Laptop Baru', saved: 4_200_000, target: 12_000_000, emoji: '💻' },
] as const

export const monthlyComparison = [
  { month: 'Agu', income: 5_000_000, expense: 3_100_000 },
  { month: 'Sep', income: 5_200_000, expense: 2_900_000 },
  { month: 'Okt', income: 5_500_000, expense: 2_600_000 },
  { month: 'Nov', income: 5_500_000, expense: 2_300_000 },
] as const

export const debts = [{ name: 'Cicilan ponsel', amount: 2_500_000 }] as const
export const totalDebt = debts.reduce((sum, d) => sum + d.amount, 0)
export const netWorth = totalBalance - totalDebt // 10.350.000

export const subscriptions = [
  { name: 'Streaming Video', cycle: 'Bulanan', price: 54_000, next: '15 Nov', emoji: '🎬' },
  { name: 'Musik Premium', cycle: 'Bulanan', price: 55_000, next: '22 Nov', emoji: '🎧' },
  { name: 'Penyimpanan Cloud', cycle: 'Tahunan', price: 149_000, next: '3 Feb', emoji: '☁️' },
] as const

/** Hari yang memiliki tagihan pada Nov 2026 (1 Nov 2026 = Minggu). */
export const calendarBills = [
  { day: 5, name: 'Listrik', amount: 320_000 },
  { day: 15, name: 'Streaming Video', amount: 54_000 },
  { day: 20, name: 'Cicilan ponsel', amount: 500_000 },
  { day: 22, name: 'Musik Premium', amount: 55_000 },
  { day: 25, name: 'Internet', amount: 350_000 },
] as const

export const backupHistory = [
  { when: '12 Nov 2026 · 08:00', type: 'Otomatis' },
  { when: '05 Nov 2026 · 08:00', type: 'Otomatis' },
  { when: '29 Okt 2026 · 19:42', type: 'Manual' },
] as const
