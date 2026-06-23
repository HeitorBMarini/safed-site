"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useState } from "react"

const tabs = [
  {
    label: "EVENTOS",
    title: "Eventos\nAutomotivos",
    highlight: "de excelência.",
    desc: "Test Drive, Off Road, Ride and Drive — do briefing à execução com segurança.",
    cta: { label: "Ver eventos", href: "/#eventos" },
    cta2: { label: "Fale conosco", href: "/#contato" },
  },
  {
    label: "CURSOS",
    title: "Direção",
    highlight: "Defensiva.",
    desc: "Certificados pelo DETRAN. Mais de 50 mil alunos formados na América Latina.",
    cta: { label: "Ver cursos", href: "/#cursos" },
    cta2: { label: "Fale conosco", href: "/#contato" },
  },
  {
    label: "SEGURANÇA",
    title: "Da partida\nao destino,",
    highlight: "com segurança.",
    desc: "Mais de 23 anos capacitando condutores e organizando eventos para montadoras.",
    cta: { label: "Saiba mais", href: "/#sobre" },
    cta2: { label: "Fale conosco", href: "/#contato" },
  },
  {
    label: "EMPRESAS",
    title: "Treinamento",
    highlight: "Empresarial.",
    desc: "Reduza sinistros e custos com frotas. Soluções B2B completas para sua empresa.",
    cta: { label: "Fale conosco", href: "/#contato" },
    cta2: { label: "Ver cursos", href: "/#cursos" },
  },
]

export default function Hero() {
  const [active, setActive] = useState("SEGURANÇA")

  const slide = tabs.find((t) => t.label === active) ?? tabs[0]

  return (
    <section className="relative h-screen bg-gray-950 overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="/assets/banner.mp4"
      />

      {/* Gradientes */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/60 to-gray-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-gray-950/40" />

      {/* Linha vermelha lateral */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600 z-10" />

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex flex-col justify-between px-8 sm:px-12 lg:px-20 pt-36 pb-12">

        {/* Tabs */}
        <nav className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActive(tab.label)}
              className={`px-5 py-2 rounded-full text-sm font-bold tracking-widest transition-all duration-200
                ${active === tab.label
                  ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
                  : "border border-white/30 text-white/60 hover:border-white/60 hover:text-white"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Texto + CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white uppercase leading-[1.05] tracking-tight whitespace-pre-line mb-6">
                {slide.title}
                <span className="text-red-500 block">{slide.highlight}</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-red-900/30"
                >
                  {slide.cta.label} <ArrowRight size={17} />
                </Link>
                <Link
                  href={slide.cta2.href}
                  className="inline-flex items-center justify-center gap-2.5 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
                >
                  {slide.cta2.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={active + "-desc"}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="text-white/50 text-sm tracking-widest uppercase max-w-[220px] text-left lg:text-right leading-relaxed"
            >
              {slide.desc}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      {/* Scroll indicator */}
      <motion.a
        href="#diferenciais"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 group"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase group-hover:text-white/60 transition-colors">Scroll</span>
        <ChevronDown size={18} className="text-white/30 group-hover:text-white/60 transition-colors" />
      </motion.a>
    </section>
  )
}
