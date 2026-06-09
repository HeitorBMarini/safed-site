"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

const slides = [
  {
    image: "https://safed.com.br/wp-content/uploads/2021/06/slide1-4-1600x800-1.jpg",
    tag: "Há mais de 23 anos no mercado",
    title: "Da partida ao\ndestino,",
    highlight: "com segurança.",
    desc: "Especialistas em eventos automobilísticos e cursos de direção defensiva. Mais de duas décadas capacitando condutores e organizando eventos de excelência.",
    cta: { label: "Ver cursos", href: "/#cursos" },
    cta2: { label: "Fale conosco", href: "/#contato" },
  },
  {
    image: "https://safed.com.br/wp-content/uploads/2021/06/slide2-1-1600x800-1.jpg",
    tag: "Eventos",
    title: "Eventos",
    highlight: "Automobilísticos",
    desc: "Do planejamento à execução, realizamos eventos de Test Drive, Off Road, Ride and Drive e Coordenação Técnica com excelência e segurança.",
    cta: { label: "Ver eventos", href: "/#eventos" },
    cta2: { label: "Saiba mais", href: "/#contato" },
  },
  {
    image: "https://safed.com.br/wp-content/uploads/2021/06/slide3-1600x800-1.jpg",
    tag: "Cursos",
    title: "Direção",
    highlight: "Defensiva",
    desc: "Conscientizando cada aluno de sua responsabilidade no trânsito. Cursos certificados pelo DETRAN para empresas e condutores em toda a América Latina.",
    cta: { label: "Ver cursos", href: "/#cursos" },
    cta2: { label: "Fale conosco", href: "/#contato" },
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir)
    setCurrent(index)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Background slides */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={{
            enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-gray-950/92 via-gray-950/70 to-gray-950/20" />
        </motion.div>
      </AnimatePresence>

      {/* Red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600 z-10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 pt-36 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-xl lg:max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
              {slide.tag}
            </div>

            <h1 className="text-[2.75rem] sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight whitespace-pre-line">
              {slide.title}
              <span className="text-red-500 block">{slide.highlight}</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-12 leading-relaxed">
              {slide.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        aria-label="Próximo slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-8 h-2 bg-red-500" : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
