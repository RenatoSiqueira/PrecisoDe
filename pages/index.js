import React, { useState, useEffect } from "react"

import PageTitle from "../components/PageTitle"
import Header from "../components/Header"
import NavSections from "../components/NavSections"
import Professional from "../components/Professional"
import AboutUs from "../components/AboutUs"
import Instagram from "../components/Instagram"

const Index = () => {
  const [isLoading, setLoading] = useState(true)
  const [dados, setDados] = useState({})

  useEffect(async () => {
    try {
      const response = await fetch("/api/get-professionals")
      const allData = await response.json()

      const category = []
      allData.map((item) => {
        if (!category.includes(item.category)) {
          category.push(item.category)
        }
      })

      setDados({ category, allData, filter: "pintor" })
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const filterResults = (filter) => () => {
    setDados({ ...dados, filter })
  }

  return (
    <>
      <PageTitle title="Seja bem Vindo" />
      <Header />
      {isLoading && (
        <p className="container text-center text-4xl font-bold">Aguarde...</p>
      )}
      {!isLoading && (
        <NavSections cat={dados.category} action={filterResults} />
      )}
      <div className="container mx-auto flex flex-wrap py-6">
        {!isLoading && (
          <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            {dados.allData
              .filter(
                (item) =>
                  item.category.toLowerCase() === dados.filter.toLowerCase()
              )
              .map((item, index) => (
                <Professional key={index} data={item} />
              ))}
            {/* 
            Outra Forma:
            {dados.allData.map((item, index) => {
              if (item.category.toLowerCase() === dados.filter.toLowerCase()) {
                return <Professional key={index} data={item} />
              }
            })} */}
          </section>
        )}
        <aside
          className={`w-full ${
            isLoading ? "w-full" : "md:w-1/3"
          } flex flex-col items-center px-3`}
        >
          <AboutUs />
          <Instagram />
        </aside>
      </div>
    </>
  )
}

export default Index
