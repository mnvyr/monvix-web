import type { ReactNode, SVGProps } from 'react'

type IconProps = Omit<SVGProps<SVGSVGElement>, 'children'>

/** Ikon garis 24x24 yang digambar untuk kebutuhan Monvix. Ukuran diatur lewat className. */
function icon(paths: ReactNode) {
  return function Icon({ strokeWidth = 2, ...props }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        {...props}
      >
        {paths}
      </svg>
    )
  }
}

export const Plus = icon(<path d="M12 5v14M5 12h14" />)
export const Minus = icon(<path d="M5 12h14" />)
export const Check = icon(<path d="M5 12.5l4.5 4.5L19 7.5" />)
export const Close = icon(<path d="M6 6l12 12M18 6L6 18" />)
export const Menu = icon(<path d="M4 7h16M4 12h16M4 17h16" />)
export const Download = icon(<path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M5 20h14" />)
export const ChevronLeft = icon(<path d="M14.5 6l-6 6 6 6" />)
export const ChevronRight = icon(<path d="M9.5 6l6 6-6 6" />)
export const ChevronDown = icon(<path d="M6 9.5l6 6 6-6" />)
export const Sun = icon(
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6L7 7M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
  </>,
)
export const Moon = icon(<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" />)

export const ArrowLeftRight = icon(<path d="M7 7h13M16 3l4 4-4 4M17 17H4M8 13l-4 4 4 4" />)
export const Gauge = icon(
  <>
    <path d="M4 17a8 8 0 1 1 16 0" />
    <path d="M12 17l4-5" />
  </>,
)
export const Target = icon(
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </>,
)
export const Search = icon(
  <>
    <circle cx="11" cy="11" r="6" />
    <path d="M20 20l-4.5-4.5" />
  </>,
)
export const Receipt = icon(<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3zM9 8h6M9 12h6" />)
export const TrendingUp = icon(<path d="M3 17l6-6 4 4 7-8M15 7h5v5" />)
export const CloudUpload = icon(<path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9.5a4.2 4.2 0 0 1-.5 8.5M12 19v-7M9 14.5l3-3 3 3" />)
export const LockKeyhole = icon(
  <>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15.5" r="1" />
  </>,
)
export const RotateCcw = icon(<path d="M4 12a8 8 0 1 0 3-6.2M4 4v5h5" />)
export const Signal = icon(<path d="M4 20v-3M9 20v-6M14 20v-9M19 20V5" />)
export const Wifi = icon(
  <>
    <path d="M4 10a12 12 0 0 1 16 0M7 13.5a8 8 0 0 1 10 0M10 17a4 4 0 0 1 4 0" />
    <circle cx="12" cy="20" r="0.6" />
  </>,
)
export const BatteryFull = icon(
  <>
    <rect x="2" y="8" width="18" height="8" rx="2" />
    <path d="M22 11v2" />
    <rect x="4" y="10" width="14" height="4" rx="0.5" fill="currentColor" stroke="none" />
  </>,
)
export const Home = icon(<path d="M4 11l8-7 8 7M6 10v10h12V10" />)
export const BarChart3 = icon(<path d="M5 20V10M12 20V4M19 20v-7" />)
export const User = icon(
  <>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20a8 8 0 0 1 16 0" />
  </>,
)
