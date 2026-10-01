import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { eventos } from "@/data/content"
import PageDetail from "@/components/PageDetail"
import { buildMetadata, buildJsonLd } from "@/lib/seo"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return eventos.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const evento = eventos.find((e) => e.slug === slug)
  if (!evento) return {}
  return buildMetadata("eventos", evento)
}

export default async function EventoPage({ params }: Props) {
  const { slug } = await params
  const evento = eventos.find((e) => e.slug === slug)
  if (!evento) notFound()
  const related = eventos.filter((x) => x.slug !== slug).map(({ slug, title, shortDesc }) => ({ slug, title, shortDesc }))
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd("eventos", evento)) }}
      />
      <PageDetail item={evento} backHref="/#eventos" backLabel="Eventos" tipo="Evento" related={related} />
    </>
  )
}
