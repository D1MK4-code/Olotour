import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <div>{children}</div>
      {/* <footer>
        <p>Copyright 2021 OloTour</p>
      </footer> */}
    </div>
  )
}
