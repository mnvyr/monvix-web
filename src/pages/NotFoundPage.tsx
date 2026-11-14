import { usePageMeta } from '@/hooks/usePageMeta'

export default function NotFoundPage() {
  usePageMeta({
    title: 'Halaman tidak ditemukan | Monvix',
    description: 'Alamat yang kamu buka tidak ada di website Monvix.',
    path: window.location.pathname,
    noindex: true,
  })
  return (
    <div className="wrap pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-xl">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Halaman tidak ditemukan.</h1>
        <p className="mt-4 text-lg text-soft">Alamat yang kamu buka tidak ada di website Monvix.</p>
        <a href="/" className="btn btn-primary mt-8">
          Kembali ke beranda
        </a>
      </div>
    </div>
  )
}
