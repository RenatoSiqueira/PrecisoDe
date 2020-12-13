import React from "react"
import Link from "next/link"

const Navbar = () => (
  <nav className="w-full py-4 bg-blue-800 shadow">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
      <nav>
        <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
          <li>
            <Link href="/">
              <a className="hover:text-gray-200 hover:underline px-4">
                Preciso de...
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/sobre">
              <a className="hover:text-gray-200 hover:underline px-4">Sobre</a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  </nav>
)

export default Navbar
