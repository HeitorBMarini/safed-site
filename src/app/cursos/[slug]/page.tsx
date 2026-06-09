import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { cursos } from "@/data/content"
import PageDetail from "@/components/PageDetail"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return cursos.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const curso = cursos.find((c) => c.slug === slug)
  if (!curso) return {}
  return {
    title: curso.title,
    description: curso.shortDesc,
    openGraph: { title: curso.title, description: curso.shortDesc, images: [{ url: curso.image }] },
  }
}

export default async function CursoPage({ params }: Props) {
  const { slug } = await params
  const curso = cursos.find((c) => c.slug === slug)
  if (!curso) notFound()
  return <PageDetail item={curso} backHref="/#cursos" backLabel="Cursos" tipo="Curso" />
}
