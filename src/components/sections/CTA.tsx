"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative bg-gray-950 overflow-hidden py-24 lg:py-36">
      {/* Linha vermelha lateral */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600" />

      {/* Fundo decorativo */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-red-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-[0.2em] bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full">
            Vamos trabalhar juntos
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-black text-white uppercase leading-[1.02] tracking-tight mb-12"
        >
          Precisa de um
          <span className="text-red-500 block">Evento ou</span>
          Treinamento?
        </motion.h2>

        {/* Descrição + botões — sempre abaixo do heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm uppercase tracking-wider">
            Do briefing à execução — a SafeD cuida de tudo com segurança e excelência.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Fale Conosco <ArrowRight size={16} />
            </Link>
            <Link
              href="/#eventos"
              className="inline-flex items-center gap-2.5 border border-white/20 text-white/70 hover:text-white hover:border-white/50 px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-200"
            >
              Ver Eventos
            </Link>
          </div>
        </motion.div>

        {/* Linha decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-16 h-px bg-gradient-to-r from-red-600 via-red-600/40 to-transparent origin-left"
        />
      </div>
    </section>
  )
}
