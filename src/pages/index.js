import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const StyledContainer = styled.section`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  > .gatsby-image-wrapper {
    &:first-child {
      height: 100%;
      width: 70%;
      z-index: 3;
    }
  }
  @media (max-width: 1399px) {
    > .gatsby-image-wrapper {
      &:first-child {
        width: 100%;
      }
    }
  }
  @media (max-width: 767px) {
    overflow: hidden;
    > .gatsby-image-wrapper {
      &:first-child {
        width: 125%;
      }
    }
  }
  @media (max-width: 575px) {
    overflow: hidden;
    > .gatsby-image-wrapper {
      &:first-child {
        width: 100%;
      }
    }
  }
`

export default function Home() {
  return (
    <Layout>
      <StyledContainer>
        <StaticImage
          src="../../static/wave-left.svg"
          alt="Fala"
          placeholder={"none"}
          style={{ position: "absolute" }}
        />
        <Hero />
      </StyledContainer>
    </Layout>
  )
}
