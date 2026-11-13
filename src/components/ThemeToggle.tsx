import { Moon, Sun } from '@/components/icons'
import { useTheme } from '@/hooks/useTheme'

/** Ganti tema terang dan gelap. Label menyebut tema tujuan. */
export function ThemeToggle() {
  const [theme, toggle] = useTheme()
  const next = theme === 'dark' ? 'terang' : 'gelap'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Ganti ke tema ${next}`}
      className="grid h-11 w-11 place-items-center rounded-md border border-transparent text-ink transition-colors hover:border-rule hover:bg-surface"
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
