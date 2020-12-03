import React, { useState } from "react"

const NavSection = ({ cat }) => {
  const { isOpen, setState } = useState(true)

  return (
    <nav className="w-full py-4 border-t border-b bg-gray-100">
      <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
        {cat.map((item, index) => (
          <a
            href="#"
            className="hover:bg-gray-400 rounded py-2 px-4 mx-2"
            key={index}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default NavSection
