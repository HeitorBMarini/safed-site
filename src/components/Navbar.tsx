"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { eventos, cursos } from "@/data/content"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [eventosOpen, setEventosOpen] = useState(false)
  const [cursosOpen, setCursosOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://safed.com.br/wp-content/uploads/2021/06/logo.png"
            alt="SafeD"
            className="h-10 lg:h-12 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
            Home
          </Link>

          {/* Eventos dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
              onMouseEnter={() => setEventosOpen(true)}
              onMouseLeave={() => setEventosOpen(false)}
            >
              Eventos <ChevronDown size={14} />
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
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
              onMouseEnter={() => setCursosOpen(true)}
              onMouseLeave={() => setCursosOpen(false)}
            >
              Cursos <ChevronDown size={14} />
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

          <Link href="/#sobre" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
            Quem Somos
          </Link>

          <Link
            href="/#contato"
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
          >
            <Phone size={14} /> Fale Conosco
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
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
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

              <div>
                <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Eventos</p>
                {eventos.map((e) => (
                  <Link
                    key={e.slug}
                    href={`/eventos/${e.slug}`}
                    className="block px-5 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    {e.icon} {e.title}
                  </Link>
                ))}
              </div>

              <div>
                <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Cursos</p>
                {cursos.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/cursos/${c.slug}`}
                    className="block px-5 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    {c.icon} {c.title}
                  </Link>
                ))}
              </div>

              <Link
                href="/#sobre"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium"
                onClick={() => setOpen(false)}
              >
                Quem Somos
              </Link>

              <Link
                href="/#contato"
                className="block px-3 py-2 rounded-lg bg-red-600 text-white font-medium text-center mt-2"
                onClick={() => setOpen(false)}
              >
                Fale Conosco
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
