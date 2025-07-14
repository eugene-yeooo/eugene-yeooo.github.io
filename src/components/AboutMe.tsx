'use client'

import Image from 'next/image'
import { Download, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center max-w-7xl w-full">
      <div className="p-8 rounded-lg shadow-lg max-w-3xl w-full bg-white">
        <motion.h2
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl font-black text-black bg-green-200 py-2 font-mono max-w-fit px-3"
        >
          EUGENE
        </motion.h2>

        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
          className="text-4xl font-black mb-4 text-black py-2 font-mono max-w-fit"
        >
          Full-Stack Developer
        </motion.h3>
        <p className="max-w-3xl leading-relaxed text-left text-black text-md">
          Hey! 👋 I build full-stack web applications that combine clean
          interfaces with robust, scalable backend systems and smart AI
          integration. From crafting intuitive frontends to architecting
          efficient APIs and databases, I love creating seamless, end-to-end
          experiences that make complex tech feel simple and human-centered.
          <br />
          <br />
          My drive for tech reflects my passion for technical rock climbing,
          canyoning and caving — for the learning, teaching, problem-solving and
          team work involved. Like getting people outdoors,{' '}
          <span className="font-semibold">
            I get excited from people using the applications I&#39;ve built
          </span>
          .
          <br />
          <br />
          With digital marketing and communications experience from another
          life, I bring a creative mindset, strong human skills, fast learning,
          and sharp attention to detail to project collaborations.
        </p>

        {/* buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1, ease: 'easeOut' }}
          className="mt-6 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/Eugene Yeo_CV.pdf"
            download
            className=" bg-black text-white font-bold px-4 py-2 rounded hover:bg-green-200 hover:text-black hover:font-bold transition flex items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>

          <button
            onClick={() => {
              const el = document.getElementById('contact')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border text-black font-bold px-4 py-2 rounded hover:bg-green-200  hover:border-white transition flex items-center gap-2"
          >
            <Send size={20} />
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Profile Image */}
      <Image
        src="/images/DSC04088.avif"
        alt="Profile picture"
        width={100}
        height={100}
        className="min-w-md object-cover border-green-300 border-10 "
      />
    </div>
  )
}
