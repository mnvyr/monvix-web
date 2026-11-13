import { useId, useState } from 'react'
import { ChevronDown } from '@/components/icons'
import { cn } from '@/lib/cn'

export interface AccordionEntry {
  id: string
  title: string
  content: string
}

/** Akordeon dengan tombol dan region yang dihubungkan ARIA. Beberapa item boleh terbuka bersamaan. */
export function Accordion({ items, defaultOpen = [] }: { items: readonly AccordionEntry[]; defaultOpen?: string[] }) {
  const [open, setOpen] = useState<ReadonlySet<string>>(new Set(defaultOpen))
  const base = useId()

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <ul className="border-b border-rule">
      {items.map((item, i) => {
        const isOpen = open.has(item.id)
        const panelId = `${base}-panel-${item.id}`
        const buttonId = `${base}-btn-${item.id}`
        return (
          <li key={item.id} className="border-t border-rule">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="group flex min-h-14 w-full items-start gap-4 py-4 text-left"
              >
                <span className="num w-7 shrink-0 pt-0.5 font-heading text-sm text-soft">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-1 font-heading text-base font-semibold group-hover:text-link sm:text-lg">{item.title}</span>
                <ChevronDown className={cn('mt-1 h-5 w-5 shrink-0 transition-transform duration-200', isOpen && 'rotate-180')} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn('grid transition-[grid-template-rows] duration-200 ease-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="max-w-[60ch] pb-5 pl-11 pr-8 text-soft">{item.content}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
