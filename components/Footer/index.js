import React from "react"
import Link from "next/link"

const Footer = () => (
  <footer className="w-full border-t bg-white pb-12">
    <div className="w-full container mx-auto flex flex-col items-center">
      <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
        {/* <Link href="/sobre">
          <a className="uppercase px-3">Sobre</a>
        </Link> */}
        {/* <Link href="/sobre">
          <a className="uppercase px-3">Entre em Contato</a>
        </Link> */}
      </div>
      <div className="uppercase pb-6">&copy; precisode.vercel.app</div>
    </div>
  </footer>
)

export default Footer
