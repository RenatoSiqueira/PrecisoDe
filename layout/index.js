import React from "react"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import NavSections from "../components/NavSections"
import Footer from "../components/Footer"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Header />
    <NavSections />
    <div className="container mx-auto flex flex-wrap py-6">{children}</div>
    <Footer />
  </>
)

export default Layout
