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

  const style =
    'hover:bg-green-200 px-3 py-1 rounded text-black text-xl font-mono font-semibold cursor-pointer'

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex justify-center space-x-8 p-6">
      <a
        href="#about"
        onClick={(e) => handleClick(e, 'about')}
        className={style}
      >
        &lt;About Me /&gt;
      </a>
      <a
        href="#skills"
        onClick={(e) => handleClick(e, 'skills')}
        className={style}
      >
        Skills
      </a>
      <a
        href="#projects"
        onClick={(e) => handleClick(e, 'projects')}
        className={style}
      >
        Projects
      </a>
    </nav>
  )
}

export default Navbar
