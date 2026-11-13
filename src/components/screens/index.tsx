import type { ComponentType } from 'react'
import type { MockupScreenId } from '@/types'
import { BackupScreen } from './BackupScreen'
import { BudgetScreen } from './BudgetScreen'
import { CalendarScreen } from './CalendarScreen'
import { DashboardScreen } from './DashboardScreen'
import { GoalsScreen } from './GoalsScreen'
import { NetWorthScreen } from './NetWorthScreen'
import { OnboardingScreen } from './OnboardingScreen'
import { ReportsScreen } from './ReportsScreen'
import { SplashScreen } from './SplashScreen'
import { SubscriptionsScreen } from './SubscriptionsScreen'
import { TransactionsScreen } from './TransactionsScreen'

const screens: Record<MockupScreenId, ComponentType> = {
  splash: SplashScreen,
  onboarding: OnboardingScreen,
  dashboard: DashboardScreen,
  transactions: TransactionsScreen,
  budget: BudgetScreen,
  goals: GoalsScreen,
  reports: ReportsScreen,
  networth: NetWorthScreen,
  subscriptions: SubscriptionsScreen,
  calendar: CalendarScreen,
  backup: BackupScreen,
}

export function AppScreen({ id }: { id: MockupScreenId }) {
  const Screen = screens[id]
  return <Screen />
}
