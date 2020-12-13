import React, { useState, useEffect } from "react"

import PageTitle from "../components/PageTitle"
import Header from "../components/Header"
import NavSections from "../components/NavSections"
import Professional from "../components/Professional"
import HowToAdded from "../components/HowToAdded"
import Instagram from "../components/Instagram"
import HowWorks from "../components/HowWorks"

const Index = () => {
  const [isLoading, setLoading] = useState(true)
  const [dados, setDados] = useState({})

  useEffect(async () => {
    try {
      const response = await fetch("/api/get-professionals")
      const allData = await response.json()

      const category = []
      if (Object.keys(allData).length > 0) {
        allData?.map((item) => {
          if (!category.includes(item.category)) {
            category.push(item.category)
          }
        })

        setDados({ category, allData, filter: "" })
      }
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
      {/* {!isLoading && (
        <NavSections cat={dados.category} action={filterResults} />
      )} */}
      <div className="container mx-auto flex flex-wrap py-6">
        {/* {!isLoading && ( */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {/* {dados?.allData.map((item, index) => {
              if (
                !dados.filter ||
                item.category.toLowerCase() === dados.filter.toLowerCase()
              ) {
                return <Professional key={index} data={item} />
              }
            })} */}
          <Professional key={"index"} data={""} />
        </section>
        {/* )} */}
        <aside
          className={`w-full ${
            isLoading ? "w-full" : "md:w-1/3"
          } flex flex-col items-center px-3`}
        >
          <AboutUs />
          {/* <Instagram /> */}
        </aside>
      </div>
      <HowWorks />
    </>
  )
}

export default Index
