"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { CalendarDays, Trophy, Users, BadgeCheck } from "lucide-react"

const statsData = [
  { raw: 23, suffix: "+", label: "Anos de experiência", icon: CalendarDays },
  { raw: 500, suffix: "+", label: "Eventos realizados", icon: Trophy },
  { raw: 50, suffix: "k+", label: "Alunos certificados", icon: Users },
  { raw: 100, suffix: "%", label: "Cert. DETRAN", icon: BadgeCheck },
]

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame = 0
    const totalFrames = Math.round(duration / 16)
    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (frame >= totalFrames) {
        setCount(target)
        clearInterval(timer)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return count
}

function StatItem({ stat, index, inView }: { stat: typeof statsData[0]; index: number; inView: boolean }) {
  const count = useCountUp(stat.raw, inView, 1800 + index * 200)
  const Icon = stat.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="text-center px-6 py-10 lg:py-12"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 bg-white/15 rounded-2xl mb-5">
        <Icon size={24} className="text-white" />
      </div>
      <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight tabular-nums">
        {count}{stat.suffix}
      </div>
      <div className="text-red-100 text-sm font-medium">{stat.label}</div>
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="bg-red-600 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/20">
          {statsData.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
