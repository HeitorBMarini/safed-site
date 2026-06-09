"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"

const diferenciais = [
  "Instrutores credenciados pelo DETRAN",
  "Certificação reconhecida pelos principais órgãos automotivos",
  "Mais de 23 anos de experiência no mercado",
  "Atendimento personalizado para cada cliente",
  "Metodologia testada e aprovada",
  "Atuação em toda a América Latina",
]

export default function Sobre() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="sobre" ref={ref} className="py-24 lg:py-36 bg-white relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://safed.com.br/wp-content/uploads/2021/06/sobrenos.png"
                alt="Sobre a SafeD"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-gray-900/30 to-transparent" />
            </div>
            {/* Floating badge — founded */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 -right-2 lg:-right-6 bg-red-600 text-white rounded-2xl px-6 py-5 shadow-2xl"
            >
              <div className="text-3xl font-bold leading-none">2002</div>
              <div className="text-red-200 text-xs mt-1 font-medium">Fundada em</div>
            </motion.div>
            {/* Floating badge — América Latina */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="absolute -top-3 -left-2 lg:-left-4 bg-gray-950 text-white rounded-2xl px-5 py-4 shadow-2xl"
            >
              <div className="text-xl font-bold leading-none">América</div>
              <div className="text-gray-400 text-xs mt-1 font-medium">Latina</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="pt-6 lg:pt-0"
          >
            <span className="inline-block text-red-600 text-xs font-bold uppercase tracking-[0.2em] bg-red-50 px-4 py-2 rounded-full mb-6">
              Nossa história
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
              Quem Somos
            </h2>
            <div className="w-14 h-1 bg-red-600 rounded-full mb-8" />

            <p className="text-gray-600 leading-relaxed mb-5 text-base lg:text-[1.05rem]">
              Fundada em 2002, a SafeD atua no mercado de Eventos e Cursos automotivos. Oferecemos propostas inovadoras para clientes arrojados que buscam segurança, capacitação e sucesso na realização dos seus negócios.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 text-base lg:text-[1.05rem]">
              Nossa equipe, atenta às tendências do mercado, busca constantemente o conhecimento e a qualificação, aprimorando cada vez mais os serviços prestados. Estamos sempre prontos para criar, planejar, organizar e executar com excelência.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {diferenciais.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3.5"
                >
                  <CheckCircle2 size={17} className="text-red-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700 font-medium leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
