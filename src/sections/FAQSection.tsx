import { Accordion } from '@/components/Accordion'
import { Reveal } from '@/components/Reveal'
import { SectionLabel } from '@/components/SectionLabel'
import { faqItems } from '@/data/faq'

const entries = faqItems.map((item) => ({ id: item.id, title: item.question, content: item.answer }))

export default function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
      <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionLabel>FAQ</SectionLabel>
          <h2 id="faq-title" className="text-3xl font-bold sm:text-4xl">
            Pertanyaan tentang Monvix.
          </h2>
          <p className="mt-4 text-soft">
            Jawaban mengikuti fungsi aplikasi saat ini. Hal yang belum pasti sengaja tidak dijawab.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Accordion items={entries} defaultOpen={['apa-itu']} />
        </Reveal>
      </div>
    </section>
  )
}
