"use client"

import { motion } from "framer-motion"
import { AchievementCard } from "./card"

const achievements = [
  {
    title: "Total Volume",
    value: "$5B+",
    description: "Total trading volume processed through our platform"
  },
  {
    title: "Active Users",
    value: "2M+",
    description: "Monthly active users across our ecosystem"
  },
  {
    title: "Transactions",
    value: "100M+",
    description: "Successfully processed transactions"
  },
  {
    title: "Partners",
    value: "500+",
    description: "Strategic partnerships worldwide"
  }
]

export function AchievementsSection() {
  return (
    <section className="py-20 bg-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Milestones that showcase our commitment to excellence and innovation in the blockchain space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              {...achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

