import React from "react"
import Image from "next/image"

import Card from './Card'

const Professional = ({ data: { category, nome, tel, atuacao, isWhats } }) => (
  <>
    {/* <article className="flex flex-col shadow my-4 w-full">
    <div className="bg-white flex flex-col justify-start p-6">
      <span className="text-blue-700 text-sm font-bold uppercase pb-4">
        {category}
      </span>
      <span className="text-3xl font-bold hover:text-gray-700 pb-4">
        {nome}
      </span>
      <p className="text-sm pb-3">
        Telefone:{" "}
        <span className="font-semibold hover:text-gray-800">{tel}</span>
      </p>
      <p className="text-sm pb-3">
        Atuação:{" "}
        <span className="font-semibold hover:text-gray-800">{atuacao}</span>
      </p>

      {isWhats && (
        <a
          href={`https://api.whatsapp.com/send?phone=${tel}&text=Olá. Gostaria de saber mais sobre seus serviços de ${category}`}
          target="blank"
          className="w-full bg-green-700 text-white font-bold text-sm uppercase rounded hover:bg-green-600 flex items-center justify-center px-2 py-3 mt-4"
        >
          <Image
            src="/whatsapp.png"
            alt="Entrar em Contato"
            width={32}
            height={32}
          />
          <span className="ml-4">Entrar em Contato</span>
        </a>
      )}
    </div>
  </article> */}


    <div class="py-12 bg-gray-100">
      <div class="container flex flex-col items-center justify-center px-4 pt-2 pb-8 mx-auto sm:px-6 lg:px-8">
        <p
          class="inline-block px-3 py-1 mb-4 text-xs font-semibold leading-tight tracking-widest text-indigo-700 uppercase bg-indigo-200 rounded-full">
          Watch And Learn with
        </p>
        <h2
          class="flex justify-center font-sans text-3xl font-bold leading-none tracking-tight text-center text-gray-900 b-6 sm:text-4xl md:mx-auto">
          <svg class="w-8 h-8 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z">
            </path>
          </svg>
          <span class="relative">Our Latest Courses</span> </h2>
        <a href="#" class="mt-3 text-sm font-semibold text-indigo-600 underline">View Our Full Library of Courses</a>

        <div class="grid max-w-lg gap-5 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3 md:max-w-none">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  </>
)

export default Professional
