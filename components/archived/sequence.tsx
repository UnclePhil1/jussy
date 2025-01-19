"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import archive from "../../public/img/archive.png";

const achievements = [
  {
    title: "Impressions in 7 Months",
    value: "45M",
    description: "Achieved 45 million impressions in just 7 months through consistent content creation and engagement.",
  },
  {
    title: "DeFi Projects",
    value: "50+",
    description: "Collaborated with over 50 DeFi projects, contributing to the growth and success of the decentralized finance ecosystem.",
  },
  {
    title: "Educational Threads",
    value: "320+",
    description: "Created 320 educational threads to help new users understand and navigate the world of Solana and blockchain technology.",
  },
];

export function SequentialAchievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={containerRef} className="min-h-[400vh] relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center">Achievements </h1>
        <div className="w-full mb-20 h-96 flex items-center justify-center opacity-[0.5]">
          <Image src={archive} alt="archive" />
        </div>
        {achievements.map((achievement, index) => {
          const opacity = useTransform(
            scrollYProgress,
            [
              index * 0.25,
              index * 0.25 + 0.15,
              index * 0.25 + 0.25,
              index * 0.25 + 0.3,
            ],
            [0, 1, 1, 0]
          );

          return (
            <motion.div
              key={achievement.title}
              style={{ opacity }}
              className="absolute"
            >
              <Card className="w-[80vw] max-w-lg bg-black/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00FFA3] to-[#9747FF] bg-clip-text text-primary">
                    {achievement.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
