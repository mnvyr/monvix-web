import icon from '@/assets/monvix-icon.webp'
import { apkMeta, DownloadButton } from '@/components/DownloadButton'
import { Reveal } from '@/components/Reveal'
import { apk } from '@/config/site'
import { formatBytes } from '@/lib/format'

export default function DownloadSection() {
  const specs = [
    { label: 'Versi', value: apk.version },
    { label: 'Platform', value: 'Android' },
    // ...(apk.sizeBytes ? [{ label: 'Ukuran', value: formatBytes(apk.sizeBytes) }] : []),
    { label: 'Berkas', value: apk.fileName },
  ]

  return (
    <section
      id="download"
      aria-labelledby="download-title"
      className="tear-top on-blue bg-brand-deep pb-20 pt-24 text-white sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-32"
    >
      <div className="wrap grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
        <Reveal>
          <h2
            id="download-title"
            className="text-[clamp(2.25rem,5.2vw+0.2rem,4rem)] font-extrabold leading-[1.05] tracking-tight"
          >
            Start Managing Your Money Smarter.
          </h2>
          <p className="mt-5 max-w-[32rem] text-lg text-[#DBE6FF] sm:text-xl">
            Download Monvix sekarang dan mulai kelola keuangan pribadimu dengan lebih teratur.
          </p>

          <div className="mt-8">
            <DownloadButton
              label="Download Monvix for Android"
              variant="light"
              wrapperClassName="flex w-full sm:inline-flex sm:w-auto"
              className="w-full sm:w-auto"
            />
            {!apk.available && (
              <p className="mt-3 text-sm text-[#DBE6FF]">Berkas APK belum diunggah. {apkMeta()}</p>
            )}
          </div>

          <dl className="mt-8 grid max-w-[32rem] grid-cols-2 gap-x-6 gap-y-4 border-t border-white/30 pt-6 sm:grid-cols-4">
            {specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-sm text-[#DBE6FF]">{spec.label}</dt>
                <dd className="break-words font-heading font-semibold">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 max-w-[32rem] text-[#DBE6FF]">
            Jika Android memintanya, izinkan instalasi aplikasi dari sumber yang dipercaya agar APK dapat dipasang.
          </p>
        </Reveal>

        <Reveal delay={120} className="hidden justify-self-center lg:block">
          <img
            src={icon}
            alt="Ikon aplikasi Monvix"
            width={360}
            height={360}
            loading="lazy"
            decoding="async"
            className="h-auto w-64 rounded-[22%] border border-white/25"
          />
        </Reveal>
      </div>
    </section>
  )
}
