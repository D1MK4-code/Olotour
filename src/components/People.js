import React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import scrollTo from "gatsby-plugin-smoothscroll"

import { StaticImage } from "gatsby-plugin-image"

const StyledPeople = styled.div`
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

  @media (min-width: 1921px) {
    position: relative;
    min-height: 55vh;
  }

  @media (min-width: 2200px) {
    position: relative;
    min-height: auto;
  }

  @media (max-width: 1199px) {
    min-height: 75vh;
  }

  @media (max-width: 991px) {
    min-height: 50vh;
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

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  z-index: 5;
  width: 40%;
  margin: 0 0 0 auto !important;
  @media (max-width: 767px) {
    width: 100%;
    padding-bottom: 2rem;
  }
`

const StyledLeft = styled.div`
  display: block;
  min-height: 515px;
  position: absolute;
  align-items: flex-end;
  z-index: 1;
  width: 50%;
  bottom: 50%;
  left: 0px;
  max-width: 1150px;
  transform: translateY(50%);
  div {
    width: 100%;
  }
  img {
    height: auto;
  }
  @media (min-width: 1921px) {
    bottom: 50%;
    transform: translateY(50%);
  }
  @media (max-width: 1399px) {
    align-items: center;
  }
  @media (max-width: 1199px) {
    width: 55%;
  }
  @media (max-width: 991px) {
    width: 60%;
  }
  @media (max-width: 767px) {
    width: 100%;
    align-items: flex-start;
    min-height: 450px;
    max-height: 550px;
    position: static;
    transform: none;
    img {
      max-width: 550px;
      margin: 0 auto;
    }
  }
  @media (max-width: 575px) {
    min-height: auto;
  }
`

export default function People() {
  return (
    <StyledPeople id="people">
      <div>
        <StyledLeft>
          <StaticImage
            src="../../static/people-transport.svg"
            alt="Zdjęcie transportu pasażerów"
            placeholder={"tracedSVG"}
            layout={"fullWidth"}
            loading={"lazy"}
          />
        </StyledLeft>
        <StyledRight>
          <h2>Przewozy międzynarodowe</h2>
          <p>
            <strong> OloTour </strong>świadczy kompleksowe usługi przewozu za
            granicę w systemie
            <strong> door-to-door. </strong>
            Jadąc z nami masz pewność, że będziesz w każdym docelowym miejscu na
            czas. Z naszych usług transportowych korzystają osoby, które planują
            urlop, wyjeżdżają służbowo, naukowo oraz osoby, które na stałe
            pracują za granicą. Jednorazowo możemy przewieźć do 8 pasażerów.
            <br /> <br />
            Nasza trasa obejmuje następujące kraje: <br />
            <strong>Polska, Belgia, Niemcy, Holandia </strong>
          </p>
          <p>
            Województwa, które obsługujemy to: <br />
            <strong>
              Małopolskie, Śląskie, Opolskie, Dolnośląskie, Podkarpackie
            </strong>
          </p>
          <button className={"button"} onClick={() => scrollTo("#pricing")}>
            Cennik
          </button>
        </StyledRight>
      </div>
    </StyledPeople>
  )
}
