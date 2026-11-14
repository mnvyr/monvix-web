import { Suspense, lazy, type ReactNode } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { PageSkeleton } from '@/components/SkeletonLoader'
import { Layout } from '@/layout/Layout'
import Home from '@/pages/Home'

const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'))
const TermsPage = lazy(() => import('@/pages/TermsPage'))
const ChangelogPage = lazy(() => import('@/pages/ChangelogPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function route(pathname: string): { home: boolean; page: ReactNode } {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/') return { home: true, page: <Home /> }
  if (path === '/privacy') return { home: false, page: <PrivacyPage /> }
  if (path === '/terms') return { home: false, page: <TermsPage /> }
  if (path === '/update/changelog') return { home: false, page: <ChangelogPage /> }
  return { home: false, page: <NotFoundPage /> }
}

/**
 * Halaman nyata: /, /privacy, /terms, /update/changelog. Tautan antarhalaman adalah <a href> biasa,
 * jadi tidak perlu router di sisi klien.
 */
export default function App() {
  const { home, page } = route(window.location.pathname)
  return (
    <Layout home={home}>
      <ErrorBoundary label={home ? 'Beranda' : 'Halaman ini'}>
        <Suspense fallback={<PageSkeleton />}>{page}</Suspense>
      </ErrorBoundary>
    </Layout>
  )
}
