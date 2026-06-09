"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Mail, MessageCircle, Facebook, Youtube, Linkedin, Send } from "lucide-react"
import { contact } from "@/data/content"

export default function Contato() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", assunto: "", mensagem: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `*Contato pelo site SafeD*\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nEmail: ${form.email}\nAssunto: ${form.assunto}\n\n${form.mensagem}`
    )
    window.open(`https://wa.me/${contact.whatsapp}?text=${msg}`, "_blank")
    setSent(true)
  }

  return (
    <section id="contato" ref={ref} className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-widest">Fale conosco</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">Entre em Contato</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Estamos prontos para criar a solução ideal para você. Envie uma mensagem!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-6">Informações de contato</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="bg-red-600 p-2.5 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Telefone</div>
                    <div className="font-medium group-hover:text-red-400 transition-colors">{contact.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="bg-red-600 p-2.5 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">E-mail</div>
                    <div className="font-medium group-hover:text-red-400 transition-colors">{contact.email}</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-600/20 border border-green-600/30 rounded-xl hover:bg-green-600/30 transition-colors group"
                >
                  <div className="bg-green-600 p-2.5 rounded-lg">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-green-400 mb-0.5">WhatsApp</div>
                    <div className="font-medium group-hover:text-green-400 transition-colors">{contact.phone}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Redes Sociais</h3>
              <div className="flex gap-3">
                <a href={contact.facebook} target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-blue-600 rounded-xl transition-colors">
                  <Facebook size={20} />
                </a>
                <a href={contact.youtube} target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-red-600 rounded-xl transition-colors">
                  <Youtube size={20} />
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-blue-700 rounded-xl transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Mensagem enviada!</h3>
                <p className="text-gray-400">Você será redirecionado para o WhatsApp. Em breve entraremos em contato.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-red-400 underline text-sm">
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">Nome *</label>
                    <input
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">Telefone</label>
                    <input
                      type="tel"
                      value={form.telefone}
                      onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Assunto</label>
                  <input
                    type="text"
                    value={form.assunto}
                    onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Mensagem *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors resize-none"
                    placeholder="Descreva sua necessidade..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send size={16} /> Enviar pelo WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
