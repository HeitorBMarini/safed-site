import { MetadataRoute } from "next"
import { eventos, cursos } from "@/data/content"

const baseUrl = "https://safed.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  const eventoRoutes: MetadataRoute.Sitemap = eventos.map((evento) => ({
    url: `${baseUrl}/eventos/${evento.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const cursoRoutes: MetadataRoute.Sitemap = cursos.map((curso) => ({
    url: `${baseUrl}/cursos/${curso.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticRoutes, ...eventoRoutes, ...cursoRoutes]
}
