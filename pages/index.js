import React, { useState, useEffect } from "react"
import axios from "axios"

import PageTitle from "../components/PageTitle"
import NavSections from "../components/NavSections"
import Professional from "../components/Professional"
import AboutUs from "../components/AboutUs"
import Instagram from "../components/Instagram"

const Index = ({ preData, category }) => {
  const [dados, setDados] = useState(preData)

  // const updateData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:3002/api/get-professionals"
  //     )
  //     setDados(response.data)
  //   } catch (error) {}
  // }

  // useEffect(() => {
  //   updateData()
  // }, [])

  return (
    <>
      <PageTitle title="Seja bem Vindo" />
      <NavSections cat={category} />
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {dados.map((item, index) => (
            <Professional key={index} data={item} />
          ))}
        </section>

        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <AboutUs />
          <Instagram />
        </aside>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  const getData = await axios.get("/api/get-professionals")
  const preData = getData.data

  const category = []
  preData.map((item) => {
    if (!category.includes(item.category)) {
      category.push(item.category)
    }
  })

  return {
    props: { preData, category },
  }
}

export default Index
