import { useEffect } from 'react'
import { site } from '@/config/site'

interface PageMeta {
  title: string
  description: string
  /** Path halaman, mis. "/privacy". Dipakai untuk canonical dan og:url. */
  path: string
  noindex?: boolean
}

function setMeta(selector: string, create: () => HTMLElement, attr: 'content' | 'href', value: string) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

function meta(key: 'name' | 'property', name: string) {
  return () => {
    const el = document.createElement('meta')
    el.setAttribute(key, name)
    return el
  }
}

/** Menyetel judul dan metadata SEO per halaman, karena index.html hanya memuat metadata beranda. */
export function usePageMeta({ title, description, path, noindex = false }: PageMeta): void {
  useEffect(() => {
    const url = new URL(path, site.url).href
    document.title = title

    setMeta('meta[name="description"]', meta('name', 'description'), 'content', description)
    setMeta('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url)
    setMeta('meta[property="og:title"]', meta('property', 'og:title'), 'content', title)
    setMeta('meta[property="og:description"]', meta('property', 'og:description'), 'content', description)
    setMeta('meta[property="og:url"]', meta('property', 'og:url'), 'content', url)
    setMeta('meta[name="twitter:title"]', meta('name', 'twitter:title'), 'content', title)
    setMeta('meta[name="twitter:description"]', meta('name', 'twitter:description'), 'content', description)
    if (noindex) setMeta('meta[name="robots"]', meta('name', 'robots'), 'content', 'noindex')
  }, [title, description, path, noindex])
}
