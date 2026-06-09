"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle } from "lucide-react"

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
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://safed.com.br/wp-content/uploads/2021/06/sobrenos.png"
                alt="Sobre a SafeD"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-red-600 text-white rounded-2xl p-5 shadow-xl"
            >
              <div className="text-3xl font-bold">2002</div>
              <div className="text-red-100 text-sm">Fundada em</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-red-600 text-sm font-semibold uppercase tracking-widest">Nossa história</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Quem Somos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Fundada em 2002, a SafeD atua no mercado de Eventos e Cursos automotivos. Oferecemos propostas inovadoras para clientes arrojados que buscam segurança, capacitação e sucesso na realização dos seus negócios.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nossa equipe, atenta às tendências do mercado, busca constantemente o conhecimento e a qualificação, aprimorando cada vez mais os serviços prestados. Estamos sempre prontos para criar, planejar, organizar e executar com excelência, vestindo literalmente a camisa de nossos clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {diferenciais.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle size={18} className="text-red-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
