import React from "react"
import Image from "next/image"

import PageTitle from "../components/PageTitle"

const Sobre = () => (
  <article className="flex flex-col shadow my-4 w-full">
    <PageTitle title="Sobre o Preciso de.." />
    <div className="bg-white flex flex-col p-6">
      <span className="text-3xl font-bold hover:text-gray-700 pb-4">
        Sobre este Projeto:
      </span>
      <p className="pb-3">
        Este é uma versão do
        <a href="http://palpite-box.renatosiqueira.dev/" target="_blank">
          {" "}
          <strong>PalpiteBox</strong>
        </a>
        ; um projeto que utiliza <strong>NextJs, TailwindCSS, MomentJS </strong>{" "}
        e integração com o <strong>Google Spreadsheet</strong>.
      </p>
      <p className="pb-3 font-bold">
        Construido passo a passo no FullStackMaster Premium.
      </p>
    </div>
  </article>
)

export default Sobre
