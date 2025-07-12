'use client'

import React from 'react'

const Navbar = () => {
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

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex justify-center space-x-8 p-4">
      <a
        href="#about"
        onClick={(e) => handleClick(e, 'about')}
        className="hover:text-blue-600 cursor-pointer"
      >
        About
      </a>
      <a
        href="#projects"
        onClick={(e) => handleClick(e, 'projects')}
        className="hover:text-blue-600 cursor-pointer"
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={(e) => handleClick(e, 'contact')}
        className="hover:text-blue-600 cursor-pointer"
      >
        Contact
      </a>
    </nav>
  )
}

export default Navbar
