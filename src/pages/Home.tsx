import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import AboutSection from '@/sections/AboutSection'
import DownloadSection from '@/sections/DownloadSection'
import FAQSection from '@/sections/FAQSection'
import FeaturesSection from '@/sections/FeaturesSection'
import GuestSection from '@/sections/GuestSection'
import { HeroSection } from '@/sections/HeroSection'
import PreviewSection from '@/sections/PreviewSection'
import PrivacySection from '@/sections/PrivacySection'
import SecuritySection from '@/sections/SecuritySection'

export default function Home() {
  useDocumentTitle('Monvix: Modern Money Management | Personal Finance Tracker')

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PreviewSection />
      <PrivacySection />
      <GuestSection />
      <SecuritySection />
      <FAQSection />
      <DownloadSection />
    </>
  )
}
