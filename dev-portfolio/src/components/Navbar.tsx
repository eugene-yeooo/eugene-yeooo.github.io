'use client'

import React, { useEffect, useState } from 'react'

const sections = ['about', 'skills', 'projects']

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
    </nav>
  )
}

export default Navbar
