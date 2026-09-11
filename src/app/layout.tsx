import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"
import { contact } from "@/data/content"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://safed.com.br"),
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
    images: [{ url: "/assets/og-image.jpg", width: 1600, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeD — Cursos e Eventos Automotivos",
    description: "Especialistas em eventos automobilísticos e cursos de direção defensiva há mais de 23 anos.",
    images: ["/assets/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "krMjGk2FWq5mi0M2duOv0Hc2NR3IxDSkyPVtODWUGSg",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#c8102e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SafeD Cursos e Eventos",
              alternateName: "SafeD",
              url: "https://safed.com.br",
              logo: "https://safed.com.br/assets/favicon.png",
              description:
                "Há mais de 23 anos, a SafeD é especialista em eventos automobilísticos e cursos de direção defensiva, atuando em toda a América Latina.",
              foundingDate: "2003",
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              areaServed: {
                "@type": "Country",
                name: "Brasil",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: `+55${contact.whatsapp.slice(2)}`,
                contactType: "customer service",
                email: contact.email,
                areaServed: "BR",
                availableLanguage: "Portuguese",
              },
              sameAs: [contact.facebook, contact.youtube, contact.linkedin],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
