'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const sections = ['about', 'skills', 'projects', 'contact']

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        threshold: 0.6,
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const baseStyle =
    'px-3 py-1 rounded text-black text-xl font-mono font-semibold cursor-pointer transition-colors'
  const activeStyle = 'bg-green-200 text-black'
  const hoverStyle = 'hover:bg-green-200'

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex justify-center space-x-8 p-6">
      {/* LOGO */}
      <Image
        src="/images/seal (5).jpg"
        alt="logo"
        width={80}
        height={50}
        className="object-cover max-w-12 fixed left-8 top-4.5"
      />
      {/* <h1>Eugene Yeo</h1> */}

      {/* NAV */}
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          onClick={(e) => handleClick(e, section)}
          className={`${baseStyle} ${hoverStyle} ${
            activeSection === section ? activeStyle : ''
          }`}
        >
          {activeSection === section
            ? `<${section === 'about' ? 'About Me' : capitalize(section)} />`
            : section === 'about'
            ? 'About Me'
            : capitalize(section)}
        </a>
      ))}

      {/* EXTERNAL LINKS */}
      <div className="fixed flex gap-3 right-14">
        <a
          href="https://github.com/eugene-yeooo"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 ease-in-out hover:scale-125"
        >
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="GitHub"
            width={38}
            height={0}
            className="-translate-y-0.5 translate-x-0.5"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/eugeneyeooo/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 ease-in-out hover:scale-125"
        >
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
            alt="LinkedIn"
            width={35}
            height={0}
          />
        </a>
        <a
          href="https://www.instagram.com/eugeneyeooo"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 ease-in-out hover:scale-125"
        >
          <Image src="/instagram.svg" alt="Instagram" width={35} height={0} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
