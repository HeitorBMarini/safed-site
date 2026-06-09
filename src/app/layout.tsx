import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: {
    default: "SafeD — Cursos e Eventos Automotivos | Da partida ao destino com segurança",
    template: "%s | SafeD Cursos e Eventos",
  },
  description:
    "Há mais de 23 anos, a SafeD é especialista em eventos automobilísticos e cursos de direção defensiva. Coordenação técnica, Test Drive, Off Road, Ride and Drive e muito mais.",
  keywords: ["direção defensiva", "curso de direção", "eventos automotivos", "test drive", "off road", "SafeD", "DETRAN"],
  authors: [{ name: "SafeD Cursos e Eventos" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://safed.com.br",
    siteName: "SafeD Cursos e Eventos",
    title: "SafeD — Cursos e Eventos Automotivos",
    description: "Especialistas em eventos automobilísticos e cursos de direção defensiva há mais de 23 anos.",
    images: [{ url: "https://safed.com.br/wp-content/uploads/2021/06/slide1-4-1600x800-1.jpg", width: 1600, height: 800 }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="https://safed.com.br/wp-content/uploads/2021/06/favicon-1.png" />
        <meta name="theme-color" content="#c8102e" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
