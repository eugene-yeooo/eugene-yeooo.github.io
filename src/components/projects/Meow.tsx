'use client'

import Image from 'next/image'
import { Github } from 'lucide-react'

export default function Meow() {
  return (
    <div className="border-2 text-black rounded-lg shadow-xl p-3 max-w-sm w-full flex flex-col items-center text-center transform transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Project Image */}
      <div className="mb-2 overflow-hidden w-full">
        <Image
          src="/images/mockup_meow.jpg"
          alt="Meowtivations mockup"
          width={800}
          height={500}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Title */}
      <h3 className="text-3xl font-black font-sans mt-4 mb-4 text-teal-600">
        Meowtivations
      </h3>

      {/* Subheader */}

      {/* <p className="italic font-mono text-sm text-gray-600 mb-3">
        Work in Progress
      </p> */}

      {/* Description */}
      <p className="text-md leading-relaxed mb-3">
        A motivational cat poster generator.
        <br />
        Implemented clean UI for uploading images and swiper carousel for
        displaying user content.
      </p>

      {/* GitHub Button */}
      <a
        href="https://github.com/eugene-yeooo/meowtivations"
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
