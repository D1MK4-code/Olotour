import React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const StyledPrivacy = styled.div`
  min-height: calc(100vh - 136px);
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 10rem 1rem;
  }
  h2 {
    font-size: 2.25rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.5em;
  }
  .gatsby-image-wrapper {
    margin-top: 0.5rem;
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 575px) {
    min-height: calc(100vh - 170px);
  }
`

export default function Polityka() {
  return (
    <Layout>
      <StyledPrivacy>
        <div>
          <h2>Polityka prywatności</h2>
          <p>
            Administratorem strony jest Łukasz Motyka, prowadzący działalność
            gospodarczą pod firmą OloTour z siedzibą w xxx, ul. xxx, wpisany do
            Centralnej Ewidencji i Informacji o Działalności Gospodarczej,
            posługujący się numerem NIP xxx Kontakt z administratorem możliwy
            pod adresem e-mail lukaszmotyka6@wp.pl
          </p>
        </div>
      </StyledPrivacy>
    </Layout>
  )
}
