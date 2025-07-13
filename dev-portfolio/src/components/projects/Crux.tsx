'use client'

import Image from 'next/image'
import { Github } from 'lucide-react'

export default function ProjectCard() {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-xl w-full flex flex-col items-center text-center">
      {/* Project Image */}
      <div className="mb-4 overflow-hidden rounded-md shadow-md w-full">
        <Image
          src={imageSrc}
          alt={`${title} screenshot`}
          width={800}
          height={500}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Title */}
      <h3 className="text-3xl font-black font-sans mb-1">{title}</h3>

      {/* Subheader */}

      <p className="italic font-mono text-sm text-gray-600 mb-3">
        Work in Progress
      </p>

      {/* Description */}
      <p className="text-md leading-relaxed mb-4">{description}</p>

      {/* GitHub Button */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border-2 border-black text-black font-bold px-4 py-2 rounded hover:bg-green-200 hover:text-black transition"
      >
        <Github size={20} />
        View on GitHub
      </a>
    </div>
  )
}
