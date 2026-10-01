import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { cursos } from "@/data/content"
import PageDetail from "@/components/PageDetail"
import { buildMetadata, buildJsonLd } from "@/lib/seo"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return cursos.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const curso = cursos.find((c) => c.slug === slug)
  if (!curso) return {}
  return buildMetadata("cursos", curso)
}

export default async function CursoPage({ params }: Props) {
  const { slug } = await params
  const curso = cursos.find((c) => c.slug === slug)
  if (!curso) notFound()
  const related = cursos.filter((x) => x.slug !== slug).map(({ slug, title, shortDesc }) => ({ slug, title, shortDesc }))
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd("cursos", curso)) }}
      />
      <PageDetail item={curso} backHref="/#cursos" backLabel="Cursos" tipo="Curso" related={related} />
    </>
  )
}
