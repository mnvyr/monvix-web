import { cn } from '@/lib/cn'

/** Blok skeleton. Dipakai hanya saat menunggu chunk halaman yang dimuat belakangan. */
export function Skeleton({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn('skeleton rounded-md', className)} />
}

export function PageSkeleton() {
  return (
    <div role="status" aria-label="Memuat halaman" className="wrap pb-20 pt-32">
      <div className="mx-auto max-w-3xl space-y-4">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-4 w-40" />
        <Skeleton className="mt-8 h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-2/3" />
      </div>
    </div>
  )
}
