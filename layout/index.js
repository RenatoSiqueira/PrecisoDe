import React from "react"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
