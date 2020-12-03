import React from "react"
import Link from "next/link"

const AboutUs = () => (
  <div className="w-full bg-white shadow flex flex-col my-4 p-6">
    <p className="text-xl font-semibold pb-5">Como ser Adicionado?</p>
    <p className="pb-2">
      Conhece e/ou indica um excelente profissional? Você é prestador de
      serviço? <br />
      <span className="font-bold">Cadastre-se gratuitamente</span> aqui e seja
      encontrado mais facilmente!
    </p>
    <Link href="/novo">
      <a className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
        Quero Cadastrar!
      </a>
    </Link>
  </div>
)

export default AboutUs
