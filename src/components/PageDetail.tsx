"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, MessageCircle, CheckCircle2, ArrowRight, CircleCheck } from "lucide-react"
import { useState } from "react"
import { contact } from "@/data/content"
import Breadcrumb from "@/components/Breadcrumb"

type Item = {
  title: string
  description: string
  image: string
  icon: string
  shortDesc: string
  slug: string
}

type Props = {
  item: Item
  backHref: string
  backLabel: string
  tipo: string
}

export default function PageDetail({ item, backHref, backLabel, tipo }: Props) {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `*Interesse em ${tipo}: ${item.title}*\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nEmail: ${form.email}\n\n${form.mensagem}`
    )
    window.open(`https://wa.me/${contact.whatsapp}?text=${msg}`, "_blank")
    setSent(true)
  }

  const breadcrumbItems = [
    { label: backLabel, href: backHref },
    { label: item.title },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero banner */}
      <div className="relative h-80 lg:h-115 bg-gray-900 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-900/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Breadcrumb items={breadcrumbItems} />
              <div className="mt-6">
                <span className="text-red-400 text-xs font-bold uppercase tracking-[0.2em]">{tipo}</span>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight mt-1">{item.title}</h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-28">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Sobre este {tipo.toLowerCase()}
              </h2>
              <div className="w-10 h-1 bg-red-600 rounded-full mb-8" />
              <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
            </div>

            <div className="bg-gray-950 rounded-3xl p-8 lg:p-10 text-white">
              <h3 className="text-lg font-bold mb-8 text-white">Por que escolher a SafeD?</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  "Mais de 23 anos de experiência no mercado",
                  "Instrutores credenciados pelos principais órgãos automotivos",
                  "Metodologia testada e aprovada",
                  "Atendimento personalizado para cada cliente",
                  "Certificação reconhecida pelo DETRAN",
                  "Atuação em toda a América Latina",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-red-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={backHref}
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 hover:border-red-200 hover:text-red-600 px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-200"
              >
                Ver todos os {backLabel.toLowerCase()}
              </Link>
              <Link
                href={`/?origem=${encodeURIComponent(`${tipo}: ${item.title}`)}&origemPath=${encodeURIComponent(`${backHref}/${item.slug}`)}#contato`}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
              >
                Solicitar orçamento <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>

          {/* Contact sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-fit lg:sticky lg:top-28"
          >
            <div className="bg-gray-950 text-white rounded-3xl p-8 shadow-2xl">
              <div className="mb-7">
                <h3 className="text-xl font-bold mb-2">Tenho interesse!</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Preencha abaixo e entraremos em contato pelo WhatsApp</p>
              </div>

              {sent ? (
                <div className="text-center py-8">
                  <div className="mb-4"><CircleCheck size={44} className="text-green-500 mx-auto" /></div>
                  <p className="text-white font-semibold mb-2">Mensagem enviada!</p>
                  <p className="text-gray-400 text-sm">Você será redirecionado para o WhatsApp.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-5 text-red-400 text-sm underline"
                  >
                    Enviar outra
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  <input
                    type="text"
                    required
                    placeholder="Seu nome *"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Telefone"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="E-mail *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm transition-colors"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="Mensagem *"
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] mt-1"
                  >
                    <MessageCircle size={16} /> Enviar pelo WhatsApp
                  </button>
                </form>
              )}

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-center gap-2 text-gray-400 text-sm">
                <Phone size={14} />
                <a href={`tel:${contact.phone}`} className="hover:text-red-400 transition-colors">
                  {contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
