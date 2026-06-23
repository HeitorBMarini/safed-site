"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { eventos, cursos } from "@/data/content"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [eventosOpen, setEventosOpen] = useState(false)
  const [cursosOpen, setCursosOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkClass = scrolled
    ? "text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
    : "text-sm font-medium text-white/90 hover:text-white transition-colors"

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-red-600 transition-all duration-100 z-50" style={{ width: `${progress}%` }} />

      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="relative flex items-center shrink-0 h-11 lg:h-14">
          <img
            src="/logo.png"
            alt="SafeD"
            className={`h-full object-contain transition-opacity duration-300 ${scrolled ? "opacity-0 absolute" : "opacity-100"}`}
          />
          <img
            src="/flogo.png"
            alt="SafeD"
            className={`h-full object-contain transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0 absolute"}`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className={linkClass}>Home</Link>

          {/* Eventos dropdown */}
          <div className="relative">
            <button
              className={`${linkClass} flex items-center gap-1`}
              onMouseEnter={() => setEventosOpen(true)}
              onMouseLeave={() => setEventosOpen(false)}
            >
              Eventos <ChevronDown size={14} className={`transition-transform ${eventosOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {eventosOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setEventosOpen(true)}
                  onMouseLeave={() => setEventosOpen(false)}
                >
                  {eventos.map((e) => (
                    <Link
                      key={e.slug}
                      href={`/eventos/${e.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {e.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cursos dropdown */}
          <div className="relative">
            <button
              className={`${linkClass} flex items-center gap-1`}
              onMouseEnter={() => setCursosOpen(true)}
              onMouseLeave={() => setCursosOpen(false)}
            >
              Cursos <ChevronDown size={14} className={`transition-transform ${cursosOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {cursosOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setCursosOpen(true)}
                  onMouseLeave={() => setCursosOpen(false)}
                >
                  {cursos.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/cursos/${c.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {c.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/#sobre" className={linkClass}>Quem Somos</Link>

          <Link
            href="/#contato"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
              scrolled
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-white text-red-600 hover:bg-white/90"
            }`}
          >
            <Phone size={14} /> Fale Conosco
          </Link>
        </div>

        {/* Mobile hamburger — visible below lg */}
        <button
          className={`lg:hidden flex items-center justify-center w-11 h-11 rounded-xl transition-colors ${
            scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/15"
          }`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-5 py-6 space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 rounded-xl text-gray-800 hover:bg-red-50 hover:text-red-600 font-medium transition-colors text-base"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

              <div className="pt-3">
                <p className="px-4 pb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Eventos</p>
                {eventos.map((e) => (
                  <Link
                    key={e.slug}
                    href={`/eventos/${e.slug}`}
                    className="block px-6 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {e.title}
                  </Link>
                ))}
              </div>

              <div className="pt-3">
                <p className="px-4 pb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Cursos</p>
                {cursos.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/cursos/${c.slug}`}
                    className="block px-6 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {c.title}
                  </Link>
                ))}
              </div>

              <Link
                href="/#sobre"
                className="block px-4 py-3 rounded-xl text-gray-800 hover:bg-red-50 hover:text-red-600 font-medium transition-colors text-base"
                onClick={() => setOpen(false)}
              >
                Quem Somos
              </Link>

              <div className="pt-3 pb-2">
                <Link
                  href="/#contato"
                  className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-red-600 text-white font-semibold text-base transition-colors hover:bg-red-700"
                  onClick={() => setOpen(false)}
                >
                  <Phone size={16} /> Fale Conosco
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
