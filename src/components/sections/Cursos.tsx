"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cursos } from "@/data/content"

export default function Cursos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="cursos" ref={ref} className="py-24 lg:py-36 bg-gray-950 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-[0.2em] bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-5">
            Capacitação
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
            Nossos Cursos
          </h2>
          <div className="w-14 h-1 bg-red-600 mx-auto rounded-full mb-7" />
          <p className="text-gray-400 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Conscientizando cada aluno de sua responsabilidade no trânsito, com instrutores credenciados pelo DETRAN.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cursos.map((curso, i) => (
            <motion.div
              key={curso.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/cursos/${curso.slug}`}
                className="group flex flex-col bg-gray-900 rounded-2xl overflow-hidden border border-white/5 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-900/20 shadow-sm transition-all duration-300 h-full"
              >
                <div className="relative overflow-hidden h-56 bg-gray-800">
                  <img
                    src={curso.image}
                    alt={curso.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2.5 py-1 rounded-full font-semibold shadow-md">
                    Cert. DETRAN
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {curso.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{curso.shortDesc}</p>
                  <span className="inline-flex items-center gap-1.5 text-red-400 text-sm font-semibold">
                    Ver detalhes <ArrowRight size={14} className="transition-transform group-hover:translate-x-1.5" />
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
