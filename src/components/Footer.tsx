import Link from "next/link"
import { Facebook, Youtube, Linkedin } from "lucide-react"
import { eventos, cursos, contact } from "@/data/content"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-10 lg:pt-24 lg:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/flogo.png"
              alt="SafeD"
              className="h-12 object-contain mb-5 brightness-200"
            />
            <p className="text-sm leading-relaxed mb-5">
              Da partida ao destino, com segurança. Especialistas em eventos automobilísticos e cursos de direção defensiva desde 2002.
            </p>
          </div>

          {/* Eventos */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Eventos</h4>
            <ul className="space-y-3">
              {eventos.map((e) => (
                <li key={e.slug}>
                  <Link href={`/eventos/${e.slug}`} className="text-sm hover:text-red-400 transition-colors">
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cursos */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Cursos</h4>
            <ul className="space-y-3">
              {cursos.map((c) => (
                <li key={c.slug}>
                  <Link href={`/cursos/${c.slug}`} className="text-sm hover:text-red-400 transition-colors">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${contact.phone}`} className="text-sm hover:text-red-400 transition-colors">
                  📞 {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="text-sm hover:text-red-400 transition-colors">
                  ✉️ {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-500 hover:text-green-400 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© {new Date().getFullYear()} SafeD Cursos e Eventos. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-blue-600 border border-white/8 hover:border-blue-500 text-gray-400 hover:text-white transition-all duration-200">
              <Facebook size={16} />
            </a>
            <a href={contact.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-red-600 border border-white/8 hover:border-red-500 text-gray-400 hover:text-white transition-all duration-200">
              <Youtube size={16} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-blue-700 border border-white/8 hover:border-blue-600 text-gray-400 hover:text-white transition-all duration-200">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
