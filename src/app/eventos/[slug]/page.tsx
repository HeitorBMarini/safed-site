import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { eventos } from "@/data/content"
import PageDetail from "@/components/PageDetail"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return eventos.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const evento = eventos.find((e) => e.slug === slug)
  if (!evento) return {}
  return {
    title: evento.title,
    description: evento.shortDesc,
    openGraph: { title: evento.title, description: evento.shortDesc, images: [{ url: evento.image }] },
  }
}

export default async function EventoPage({ params }: Props) {
  const { slug } = await params
  const evento = eventos.find((e) => e.slug === slug)
  if (!evento) notFound()
  return <PageDetail item={evento} backHref="/#eventos" backLabel="Eventos" tipo="Evento" />
}
