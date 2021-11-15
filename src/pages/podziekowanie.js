import React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const StyledThanks = styled.div`
  height: calc(100vh - 136px);
  width: 100vw;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  p {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  .gatsby-image-wrapper {
    margin-top: 0.5rem;
  }
  @media (max-width: 767px) {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }
    p {
      font-size: 1rem;
    }
    .gatsby-image-wrapper {
      height: 30px;
      img {
        object-fit: contain;
      }
    }
  }
  @media (max-width: 575px) {
    height: calc(100vh - 170px);
  }
`

export default function Podziekowanie() {
  return (
    <Layout>
      <StyledThanks>
        <h2>Dziękujemy za przesłanie do nas wiadomości!</h2>
        <p>Odpowiemy jak najszybciej</p>
        <p>Pozdrawiamy</p>
        <Link to="/">
          <StaticImage
            src="../../static/olotour-v2.png"
            alt="Główne zdjęcie"
            placeholder={"none"}
            layout={"fixed"}
            height={"40"}
            loading={"eager"}
          />
        </Link>
      </StyledThanks>
    </Layout>
  )
}
