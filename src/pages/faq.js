import React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const StyledFaq = styled.div`
  min-height: calc(100vh - 136px);
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1400px;
    margin: 0 auto;
    padding: 10rem 1rem;
  }
  h2 {
    font-size: 2.25rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  @media (max-width: 767px) {
    > div {
      padding: 7rem 1rem;
    }
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }
  }
  @media (max-width: 575px) {
    min-height: calc(100vh - 170px);
  }
`

export default function Faq() {
  return (
    <Layout>
      <StyledFaq>
        <div>
          <h2>FAQ</h2>
        </div>
      </StyledFaq>
    </Layout>
  )
}
