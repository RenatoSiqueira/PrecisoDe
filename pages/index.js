import React, { useState, useEffect } from "react"
import useSWR from "swr"

import PageTitle from "../components/PageTitle"
import Professional from "../components/Professional"
import AboutUs from "../components/AboutUs"
import Instagram from "../components/Instagram"

// const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const [info, setInfo] = useState({})
  // const {data, error} = useSWR('/api/get-promo', fetcher)

  // const getData = async () => {
  //     try {
  //         const response = await fetch('/api/get-info')
  //         const data = await response.json()
  //         setInfo(data)
  //     } catch (error) {    }
  // }

  // useEffect(() => {
  //     getData()
  // }, [])

  return (
    <>
      <PageTitle title="Seja bem Vindo" />
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <Professional />
        <Professional />
        <Professional />
        {/* <Paginate /> */}
      </section>

      <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
        <AboutUs />
        <Instagram />
      </aside>
    </>
  )
}

export default Index
