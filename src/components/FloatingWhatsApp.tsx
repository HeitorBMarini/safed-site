"use client"

import { motion } from "framer-motion"
import { contact } from "@/data/content"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12.031 0h-.062C5.396 0 0 5.398 0 12.031c0 2.578.784 4.972 2.126 6.958L.788 23.211l4.354-1.394A11.933 11.933 0 0012.031 24C18.667 24 24 18.6 24 12.031 24 5.464 18.667.063 12.031 0zm7.03 19.032a9.98 9.98 0 01-7.03 2.912 9.966 9.966 0 01-5.096-1.396l-.365-.217-3.79 1.213 1.23-3.699-.238-.379A9.936 9.936 0 012.024 12.03C2.024 6.503 6.512 2.02 12.037 2.02c2.66 0 5.16 1.037 7.037 2.917a9.905 9.905 0 012.907 7.03c0 2.667-1.036 5.166-2.92 7.065z"/>
    </svg>
  )
}

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 rounded-full bg-[#25d366] hover:bg-[#20b858] shadow-lg hover:shadow-xl text-white transition-colors"
    >
      <WhatsAppIcon className="w-7 h-7" />

      {/* Notification badge */}
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full"
      />
    </motion.a>
  )
}
