import React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import { StaticImage } from "gatsby-plugin-image"

const StyledFaq = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;
  position: relative;
  div {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    justify-content: center;
  }
  > div {
    width: 100%;
  }
  h2 {
    line-height: 1.2em;
    margin-bottom: 2rem;
    color: #070879;
    position: relative;
    z-index: 4;
  }
  p {
    margin-bottom: 1.5rem;
    color: #9f9fb9;
    position: relative;
    z-index: 4;
  }

  @media (max-width: 767px) {
    padding: 0 1rem;
    > div {
      flex-direction: column-reverse;
    }
    h2,
    p {
      max-width: 600px;
      width: 100%;
    }
    h2 {
      margin-bottom: 1.5rem;
    }
  }
  @media (max-width: 575px) {
    min-height: auto;
    padding: 3rem 1rem 0;
  }
`

export default function faq() {
  return (
    <StyledFaq>
      <div></div>
    </StyledFaq>
  )
}
