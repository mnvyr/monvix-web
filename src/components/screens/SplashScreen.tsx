import logo from '@/assets/monvix-logo.webp'
import { site } from '@/config/site'

export function SplashScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-white to-[#DDE9FF] text-center">
      <img
        src={logo}
        alt="Logo Monvix"
        width={176}
        height={176}
        className="h-[176px] w-[176px] rounded-[36px] shadow-[0_18px_40px_rgba(10,60,214,0.25)]"
        decoding="async"
      />
      <p className="mt-4 text-[13px] font-medium text-navy">{site.tagline}</p>
      <div aria-hidden="true" className="mt-10 h-[22px] w-[22px] rounded-full border-[3px] border-brand/20 border-t-brand" />
    </div>
  )
}
