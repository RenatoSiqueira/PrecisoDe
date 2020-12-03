import React from "react"
import Image from "next/image"

const Professional = () => (
  <article className="flex flex-col shadow my-4 w-full">
    <div className="bg-white flex flex-col justify-start p-6">
      <span className="text-blue-700 text-sm font-bold uppercase pb-4">
        Pintor
      </span>
      <span className="text-3xl font-bold hover:text-gray-700 pb-4">
        Wanderley Andrade
      </span>
      <p className="text-sm pb-3">
        Telefone:{" "}
        <span className="font-semibold hover:text-gray-800">
          (91) 9999-9991
        </span>
      </p>
      <p className="text-sm pb-3">
        Telefone:{" "}
        <span className="font-semibold hover:text-gray-800">
          (91) 9999-9991
        </span>
      </p>
      <p className="text-sm pb-3">
        Atuação:{" "}
        <span className="font-semibold hover:text-gray-800">
          Belém/Ananindeua
        </span>
      </p>
      <a className="w-full bg-green-700 text-white font-bold text-sm uppercase rounded hover:bg-green-600 flex items-center justify-center px-2 py-3 mt-4">
        <Image
          src="/whatsapp.png"
          alt="Entrar em Contato"
          width={32}
          height={32}
        />
        <span className="ml-4">Entrar em Contato</span>
      </a>
    </div>
  </article>
)

export default Professional
