"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { eventos } from "@/data/content"

export default function Eventos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="eventos" ref={ref} className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-red-600 text-xs font-bold uppercase tracking-[0.2em] bg-red-50 px-4 py-2 rounded-full mb-5">
            O que fazemos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Nossos Eventos
          </h2>
          <div className="w-14 h-1 bg-red-600 mx-auto rounded-full mb-7" />
          <p className="text-gray-500 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Realizamos eventos empresariais, lançamentos, convenções e treinamentos de acordo com as necessidades do mercado automotivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {eventos.map((evento, i) => (
            <motion.div
              key={evento.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/eventos/${evento.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:border-red-200 hover:shadow-2xl shadow-sm transition-all duration-300 h-full bg-white"
              >
                <div className="relative overflow-hidden h-56 bg-gray-100">
                  <img
                    src={evento.image}
                    alt={evento.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {evento.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{evento.shortDesc}</p>
                  <span className="inline-flex items-center gap-1.5 text-red-600 text-sm font-semibold">
                    Saiba mais <ArrowRight size={14} className="transition-transform group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
