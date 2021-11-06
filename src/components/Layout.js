import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
