import type { Metadata } from "next"

const baseUrl = "https://safed.com.br"

type Item = {
  slug: string
  title: string
  shortDesc: string
  description: string
  image: string
}

type Tipo = "cursos" | "eventos"

export function seoTitle(tipo: Tipo, title: string) {
  if (tipo === "eventos") return `${title} | Eventos Automotivos`
  return /^treinamento/i.test(title) ? title : `Curso de ${title}`
}

export function seoDescription(item: Item, max = 158) {
  const full = `${item.shortDesc} ${item.description}`.replace(/\s+/g, " ").trim()
  if (full.length <= max) return full
  const cut = full.slice(0, max - 1)
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:\s]+$/, "") + "…"
}

export function buildMetadata(tipo: Tipo, item: Item): Metadata {
  const title = seoTitle(tipo, item.title)
  const description = seoDescription(item)
  const path = `/${tipo}/${item.slug}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "SafeD Cursos e Eventos",
      url: `${baseUrl}${path}`,
      title,
      description,
      images: [{ url: item.image }],
    },
    twitter: { card: "summary_large_image", title, description, images: [item.image] },
  }
}

export function buildJsonLd(tipo: Tipo, item: Item) {
  const path = `/${tipo}/${item.slug}`
  const provider = { "@type": "Organization", name: "SafeD Cursos e Eventos", url: baseUrl }
  const main =
    tipo === "cursos"
      ? {
          "@type": "Course",
          name: item.title,
          description: item.description,
          url: `${baseUrl}${path}`,
          image: `${baseUrl}${item.image}`,
          inLanguage: "pt-BR",
          provider,
        }
      : {
          "@type": "Service",
          name: item.title,
          serviceType: "Eventos automotivos",
          description: item.description,
          url: `${baseUrl}${path}`,
          image: `${baseUrl}${item.image}`,
          areaServed: "América Latina",
          provider,
        }
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: tipo === "cursos" ? "Cursos" : "Eventos",
        item: `${baseUrl}/#${tipo}`,
      },
      { "@type": "ListItem", position: 3, name: item.title, item: `${baseUrl}${path}` },
    ],
  }
  return { "@context": "https://schema.org", "@graph": [main, breadcrumb] }
}
