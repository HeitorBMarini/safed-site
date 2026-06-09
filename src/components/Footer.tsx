import Link from "next/link"
import { eventos, cursos, contact } from "@/data/content"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-10 lg:pt-24 lg:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://safed.com.br/wp-content/uploads/2021/06/flogo.png"
              alt="SafeD"
              className="h-12 object-contain mb-5 brightness-200"
            />
            <p className="text-sm leading-relaxed mb-5">
              Da partida ao destino, com segurança. Especialistas em eventos automobilísticos e cursos de direção defensiva desde 2002.
            </p>
            <p className="text-xs text-gray-600">© {new Date().getFullYear()} SafeD Cursos e Eventos. Todos os direitos reservados.</p>
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
          <p className="text-xs text-gray-600">Desenvolvido com Next.js + Tailwind CSS</p>
          <div className="flex gap-5">
            <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-red-400 transition-colors">Facebook</a>
            <a href={contact.youtube} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-red-400 transition-colors">YouTube</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-red-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
