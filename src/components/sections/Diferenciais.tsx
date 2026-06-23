"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ShieldCheck, BadgeCheck, Globe } from "lucide-react"

const cards = [
  {
    icon: ShieldCheck,
    title: "23+ Anos de Mercado",
    desc: "Fundada em 2002, somos referência nacional em eventos automobilísticos e capacitação de condutores.",
  },
  {
    icon: BadgeCheck,
    title: "Instrutores Credenciados",
    desc: "Todos certificados pelo DETRAN e pelos principais órgãos automotivos do país e do mundo.",
  },
  {
    icon: Globe,
    title: "Presença na América Latina",
    desc: "Mais de 50 mil alunos formados e 500 eventos realizados em toda a América Latina.",
  },
]

export default function Diferenciais() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="diferenciais" ref={ref} className="bg-gray-950 py-0">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex items-start gap-5 px-8 py-10 bg-gray-900/60 hover:bg-gray-900 border-t border-b border-white/5 transition-colors duration-300"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center">
                  <Icon size={20} className="text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
