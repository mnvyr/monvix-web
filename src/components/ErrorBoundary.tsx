import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  /** Menjelaskan bagian mana yang gagal. */
  label?: string
}

interface State {
  hasError: boolean
}

/** Mencegah satu bagian yang gagal (mis. chunk gagal diunduh) mengosongkan seluruh halaman. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('[Monvix] Gagal merender:', error, info.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children
    return (
      <div role="alert" className="wrap pb-20 pt-32">
        <div className="mx-auto max-w-lg rounded-xl border border-rule bg-surface p-8">
          <h2 className="text-xl font-bold">{this.props.label ?? 'Halaman ini'} gagal dimuat</h2>
          <p className="mt-2 text-soft">Periksa koneksi internetmu, lalu muat ulang halaman.</p>
          <button type="button" className="btn btn-primary mt-6" onClick={() => window.location.reload()}>
            Muat ulang halaman
          </button>
        </div>
      </div>
    )
  }
}
