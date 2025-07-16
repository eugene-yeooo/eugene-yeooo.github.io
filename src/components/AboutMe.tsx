'use client'

import Image from 'next/image'
import { Download, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { useRef } from 'react'

gsap.registerPlugin(ScrambleTextPlugin)

export default function AboutMe() {
  const pOneRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const scrambleLock = useRef(false)

  const scrambleP = () => {
    const el = pOneRef.current
    if (!el) return

    if (!el || scrambleLock.current) return

    scrambleLock.current = true // block further hovers

    const fullHeight = el.scrollHeight
    el.style.height = `${fullHeight}px`
    el.style.minHeight = `${fullHeight}px`
    el.style.overflow = 'hidden'

    gsap.to(el, {
      duration: 5,
      scrambleText: {
        text: el.innerText,
        chars: '10',
        revealDelay: 0.8,
        speed: 0.5,
      },
      ease: 'power3.out',
      onComplete: () => {
        el.style.height = ''
        el.style.minHeight = ''
        el.style.overflow = ''
        setTimeout(() => {
          scrambleLock.current = false
        }, 100) //set how long before effect can work again
      },
    })
  }

  const scrambleTitle = () => {
    gsap.to(titleRef.current, {
      duration: 4,
      scrambleText: {
        text: 'Full-Stack Developer',
        chars: '10',
        // chars: 'ABCDEFGHIJKLMNOPQRSTUV1234567890!@#$%&*=+',
        revealDelay: 0.8,
        speed: 0.5,
      },
      ease: 'power3.out',
    })
  }
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center max-w-7xl w-full h-full">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1, ease: 'easeOut' }}
        className="p-8 rounded-lg shadow-lg max-w-3xl w-full bg-white translate-y-3"
      >
        <motion.h2
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 1, ease: 'easeOut' }}
          className="text-5xl font-black text-black bg-green-200 py-2 font-mono max-w-fit px-3"
        >
          EUGENE
        </motion.h2>

        <motion.h3
          ref={titleRef}
          onMouseEnter={scrambleTitle}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5, duration: 1, ease: 'easeOut' }}
          className="text-4xl font-black mb-4 text-black py-2 font-mono max-w-fit"
        >
          Full-Stack Developer
        </motion.h3>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4, duration: 1, ease: 'easeOut' }}
          className="max-w-3xl leading-relaxed text-left text-black text-md"
        >
          <p
            ref={pOneRef}
            onMouseEnter={scrambleP}
            className="pb-4 break-words whitespace-normal w-full max-w-full transition-[height] duration-500 ease-in-out leading-[1.6]"
          >
            Hey! 👋 I build full-stack web applications that combine clean
            interfaces with robust, scalable backend systems and smart AI
            integration. From crafting intuitive frontends to architecting
            efficient APIs and databases, I love creating seamless, end-to-end
            experiences that make complex tech feel simple, aesthetic and
            human-centered.
          </p>
          <p className="pb-4">
            My drive for tech reflects my passion for technical rock climbing,
            canyoning and caving — for the learning, teaching, problem-solving
            and team work involved. Like getting people outdoors,{' '}
            <span className="font-semibold">
              I get excited from people using the applications I&#39;ve built
            </span>
            .
          </p>
          <p className="pb-1">
            With digital marketing and communications experience{' '}
            <a
              href="https://eugeneyeo.myportfolio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 underline hover:text-cyan-700 transition"
            >
              from another life
            </a>
            , I bring a creative mindset, strong human skills, fast learning,
            and sharp attention to detail to project collaborations.
          </p>
        </motion.div>

        {/* buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4.5, duration: 1, ease: 'easeOut' }}
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
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.8, duration: 1, ease: 'easeOut' }}
      >
        <Image
          src="/images/DSC04088.avif"
          alt="Profile picture"
          width={100}
          height={100}
          className="min-w-md object-cover border-green-300 border-10 "
        />
      </motion.div>
    </div>
  )
}
