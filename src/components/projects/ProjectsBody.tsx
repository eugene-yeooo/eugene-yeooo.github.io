'use client'

import { motion } from 'framer-motion'
import AiSpy from './AiSpy'
import Crux from './Crux'
import Flattie from './Flattie'
import Meow from './Meow'
import type { Variants } from 'framer-motion'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 400, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'tween', // smoother than spring
      ease: 'easeInOut', // smoother curve
      duration: 1.2, // slow it down a bit
    },
  },
}

export default function ProjectBody() {
  return (
    <div className="text-black bg-white rounded-lg shadow-lg my-3 w-fit mx-auto flex  max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[90vw] flex-col items-center text-center">
      <div className="">
        <h1 className="text-3xl font-bold mt-6 mx-4 text-black bg-green-200 py-2 font-mono px-3 inline-block">
          Full-Stack Projects
        </h1>
      </div>

      {/* Animated project cards container */}
      <motion.div
        className="mt-5 m-8 flex gap-4 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={cardVariants}>
          <Crux />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Flattie />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Meow />
        </motion.div>
        <motion.div variants={cardVariants}>
          <AiSpy />
        </motion.div>
      </motion.div>
    </div>
  )
}
