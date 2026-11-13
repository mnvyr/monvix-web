import { useCallback, useState } from 'react'

export type Theme = 'light' | 'dark'

function readTheme(): Theme {
  const attr = document.documentElement.dataset.theme
  if (attr === 'light' || attr === 'dark') return attr
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Tema aktif dan fungsi untuk menggantinya. Pilihan disimpan jika penyimpanan browser tersedia. */
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(readTheme)

  const toggle = useCallback(() => {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('monvix-theme', next)
    } catch {
      /* penyimpanan diblokir: tema tetap berlaku untuk sesi ini */
    }
    setTheme(next)
  }, [])

  return [theme, toggle]
}
