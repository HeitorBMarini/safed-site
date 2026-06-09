"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Phone, MessageCircle } from "lucide-react"
import { useState } from "react"
import { contact } from "@/data/content"

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
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", assunto: item.title, mensagem: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `*Interesse em ${tipo}: ${item.title}*\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nEmail: ${form.email}\n\n${form.mensagem}`
    )
    window.open(`https://wa.me/${contact.whatsapp}?text=${msg}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero banner */}
      <div className="relative h-64 lg:h-96 bg-gray-900 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeft size={16} /> Voltar para {backLabel}
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <span className="text-red-400 text-xs font-semibold uppercase tracking-widest">{tipo}</span>
                <h1 className="text-3xl lg:text-5xl font-bold text-white">{item.title}</h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre este {tipo.toLowerCase()}</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>

            <div className="mt-8 p-6 bg-red-50 border border-red-100 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-2">Por que escolher a SafeD?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✅ Mais de 23 anos de experiência no mercado</li>
                <li>✅ Instrutores credenciados pelos principais órgãos automotivos</li>
                <li>✅ Metodologia testada e aprovada</li>
                <li>✅ Atendimento personalizado para cada cliente</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gray-950 text-white rounded-2xl p-6 h-fit"
          >
            <h3 className="text-lg font-bold mb-1">Tem interesse?</h3>
            <p className="text-gray-400 text-sm mb-6">Contate-nos pelo formulário abaixo</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Seu nome *"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 text-sm transition-colors"
              />
              <input
                type="tel"
                placeholder="Telefone"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 text-sm transition-colors"
              />
              <input
                type="email"
                required
                placeholder="E-mail *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 text-sm transition-colors"
              />
              <textarea
                required
                rows={3}
                placeholder="Mensagem *"
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 text-sm transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle size={16} /> Enviar pelo WhatsApp
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-white/10">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center justify-center gap-2 text-gray-400 hover:text-red-400 text-sm transition-colors"
              >
                <Phone size={14} /> {contact.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
