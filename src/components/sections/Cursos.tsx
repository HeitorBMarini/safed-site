"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cursos } from "@/data/content"

export default function Cursos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="cursos" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 text-sm font-semibold uppercase tracking-widest">Capacitação</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">Nossos Cursos</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Conscientizando cada aluno de sua responsabilidade no trânsito, com instrutores credenciados pelo DETRAN.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursos.map((curso, i) => (
            <motion.div
              key={curso.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link href={`/cursos/${curso.slug}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative overflow-hidden h-48 bg-gray-100">
                  <img
                    src={curso.image}
                    alt={curso.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Certificado DETRAN
                  </div>
                  <span className="absolute bottom-3 left-4 text-2xl">{curso.icon}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{curso.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{curso.shortDesc}</p>
                  <span className="inline-flex items-center gap-1 text-red-600 text-sm font-medium">
                    Ver detalhes <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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
