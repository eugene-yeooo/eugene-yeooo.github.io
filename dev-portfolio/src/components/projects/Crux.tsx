'use client'

import Image from 'next/image'
import { Github } from 'lucide-react'

export default function Crux() {
  return (
    <div className="border text-black rounded-lg shadow-xl p-3 max-w-sm w-full flex flex-col items-center text-center transform transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Project Image */}
      <div className="mb-2 overflow-hidden w-full">
        <Image
          src="/images/mockup_crux.jpg"
          alt="Crux mockup"
          width={800}
          height={500}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Title */}
      <h3 className="text-4xl font-black font-sans mb-1">crux</h3>

      {/* Subheader */}

      <p className="italic font-mono text-sm text-black mb-3">
        Work in Progress
      </p>

      {/* Description */}
      <p className="text-md leading-relaxed mb-4">
        A social media platform for logging outdoor adventures. Features
        multi-sport log forms, image uploads, and responsive UI.
      </p>

      {/* GitHub Button */}
      <a
        href="https://github.com/eugene-yeooo/crux"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm gap-2 border-2 border-black text-black font-bold px-3 py-2 rounded hover:bg-green-200 hover:border-white hover:text-black transition mt-auto mb-2"
      >
        <Github size={20} />
        View on GitHub
      </a>
    </div>
  )
}
