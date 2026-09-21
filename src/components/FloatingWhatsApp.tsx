"use client"

import { motion } from "framer-motion"
import { contact } from "@/data/content"
import WhatsAppIcon from "@/components/icons/WhatsAppIcon"

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
