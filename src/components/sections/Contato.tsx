"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Mail, MessageCircle, Facebook, Youtube, Linkedin, Send, MapPin, CheckCircle2 } from "lucide-react"
import { contact } from "@/data/content"

export default function Contato() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", assunto: "", mensagem: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Falha ao enviar")
      setSent(true)
    } catch {
      setError("Erro ao enviar. Tente pelo WhatsApp.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" ref={ref} className="bg-gray-950 text-white relative overflow-hidden">
      {/* Top separator */}
      <div className="h-1 w-full bg-linear-to-r from-transparent via-red-600 to-transparent" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-36">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-[0.2em] bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-5">
            Fale conosco
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">Entre em Contato</h2>
          <div className="w-14 h-1 bg-red-600 mx-auto rounded-full mb-7" />
          <p className="text-gray-400 max-w-xl mx-auto text-base lg:text-lg text-center leading-relaxed">
            Estamos prontos para criar a solução ideal para você.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Info column — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            <div>
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6">
                Informações de contato
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/8 border border-white/8 hover:border-red-500/30 rounded-2xl transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Telefone</div>
                    <div className="font-semibold group-hover:text-red-400 transition-colors">{contact.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/8 border border-white/8 hover:border-red-500/30 rounded-2xl transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">E-mail</div>
                    <div className="font-semibold group-hover:text-red-400 transition-colors">{contact.email}</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-green-500/10 hover:bg-green-500/15 border border-green-500/20 hover:border-green-500/40 rounded-2xl transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-green-500/70 mb-1">WhatsApp</div>
                    <div className="font-semibold text-green-400 group-hover:text-green-300 transition-colors">{contact.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 bg-white/5 border border-white/8 rounded-2xl">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Localização</div>
                    <div className="font-semibold text-gray-300">São Paulo, SP — Brasil</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">
                Redes Sociais
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-blue-600 border border-white/8 hover:border-blue-500 rounded-xl transition-all duration-200 text-sm font-medium"
                >
                  <Facebook size={16} /> Facebook
                </a>
                <a
                  href={contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-red-600 border border-white/8 hover:border-red-500 rounded-xl transition-all duration-200 text-sm font-medium"
                >
                  <Youtube size={16} /> YouTube
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-blue-700 border border-white/8 hover:border-blue-600 rounded-xl transition-all duration-200 text-sm font-medium"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-5"><CheckCircle2 size={56} className="text-green-500 mx-auto" /></div>
                  <h3 className="text-2xl font-bold mb-3">Mensagem enviada!</h3>
                  <p className="text-gray-400">Sua mensagem foi enviada. Em breve entraremos em contato.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 text-red-400 hover:text-red-300 underline text-sm transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Nome *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:bg-white/8 transition-all text-sm"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:bg-white/8 transition-all text-sm"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:bg-white/8 transition-all text-sm"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Assunto
                    </label>
                    <input
                      type="text"
                      value={form.assunto}
                      onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:bg-white/8 transition-all text-sm"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Mensagem *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:bg-white/8 transition-all text-sm resize-none"
                      placeholder="Descreva sua necessidade..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base mt-2"
                  >
                    <Send size={17} /> {loading ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
