"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AchievementCardProps {
  title: string
  value: string
  description: string
  index: number
}

export function AchievementCard({ title, value, description, index }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="bg-black/50 border-gray-800 hover:border-gray-700 transition-colors">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-[#00FFA3] to-[#9747FF] bg-clip-text text-transparent">
            {value}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

