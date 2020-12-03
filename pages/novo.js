import React, { useState } from "react"
import PageTitle from "../components/PageTitle"
import Link from "next/link"

const Success = () => (
  <p className="text-sm text-gray-800">
    Profissional cadastrado com Sucesso
    <Link href="/" className="text-center">
      <a className="container mx-auto bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
        Voltar
      </a>
    </Link>
  </p>
)

const Cadastro = () => {
  const [form, setForm] = useState({
    Nome: "",
    Telefone: "",
    Whatsapp: true,
    Atuacao: "",
    Categoria: "",
    Instagram: "",
  })
  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((old) => ({
      ...old,
      [name]: value,
    }))
  }

  const save = async () => {
    try {
      const response = await fetch("/api/post-new", {
        method: "POST",
        body: JSON.stringify(form),
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (error) {}
  }

  return (
    <section className="text-gray-700 body-font relative">
      <PageTitle title="Cadastro" />
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800">
            Cadastrar Novo Profissional
          </h1>
          {success && <Success />}
        </div>
        {!success && (
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2"
                  placeholder="Nome Completo"
                  type="text"
                  name="Nome"
                  onChange={onChange}
                  value={form.Nome}
                  required
                />
              </div>
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2"
                  placeholder="Telefone com Whatsapp"
                  type="text"
                  name="Telefone"
                  onChange={onChange}
                  value={form.Telefone}
                  required
                />
              </div>
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2"
                  placeholder="Categoria"
                  type="text"
                  name="Categoria"
                  onChange={onChange}
                  value={form.Categoria}
                  required
                />
              </div>
              <div className="p-2 w-full">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-purple-500 text-base px-4 py-2"
                  placeholder="Área de Atuação"
                  type="text"
                  name="Atuacao"
                  onChange={onChange}
                  value={form.Atuacao}
                  required
                />
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-blue-800 font-bold text-sm uppercase hover:bg-blue-700 border-0 py-2 px-8 focus:outline-none rounded"
                  onClick={save}
                >
                  Cadastrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cadastro
