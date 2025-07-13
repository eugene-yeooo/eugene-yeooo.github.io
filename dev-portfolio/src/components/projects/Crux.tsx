'use client'

import Image from 'next/image'
import { Github } from 'lucide-react'

export default function Crux() {
  return (
    <div className="border text-black rounded-lg shadow-lg p-6 max-w-md w-full flex flex-col items-center text-center">
      {/* Project Image */}
      <div className="mb-4 overflow-hidden rounded-md shadow-md w-full">
        <Image
          src="/images/mockup_crux.jpg"
          alt="Crux mockup"
          width={800}
          height={500}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Title */}
      <h3 className="text-3xl font-black font-sans mb-1">crux</h3>

      {/* Subheader */}

      <p className="italic font-mono text-sm text-gray-600 mb-3">
        Work in Progress
      </p>

      {/* Description */}
      <p className="text-md leading-relaxed mb-4">
        Crux is a full-stack app for logging outdoor adventures. Features
        multi-sport log forms, image uploads, and responsive UI.
      </p>

      {/* GitHub Button */}
      <a
        href="githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border-2 border-black text-black font-bold px-4 py-2 rounded hover:bg-green-200 hover:border-white hover:text-black transition"
      >
        <Github size={20} />
        View on GitHub
      </a>
    </div>
  )
}
