import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const StyledHero = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 4rem;
  > div {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    width: 100%;
  }
  .gatsby-image-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(90deg, #000 40%, hsla(0, 0%, 94.5%, 0));
      opacity: 0.7;
      z-index: 0;
    }
  }
  h1 {
    font-size: 3.25rem;
    margin-bottom: 2rem;
    position: relative;
    z-index: 4;
    font-weight: 700;
    color: #fff;
  }
  p {
    margin-bottom: 1.5rem;
    max-width: 500px;
    position: relative;
    z-index: 4;
    color: #fff;
  }
  @media (max-width: 1199px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 767px) {
    padding: 0 1rem;
    margin-bottom: 3rem;
    > div {
      flex-direction: column;
      &:first-child {
        padding-top: 4rem;
      }
    }
    .gatsby-image-wrapper {
      &:after {
        content: "";
        position: absolute;
        background: rgba(0, 0, 0, 0.7);
        opacity: 1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
    h1,
    p {
      max-width: 500px;
      width: 100%;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
  }
  @media (max-width: 575px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.9375rem;
    }
  }
  @media (max-width: 360px) {
    > div {
      &:first-child {
        padding-top: 5.5rem;
      }
    }
  }
  @media (max-width: 340px) {
    h1 {
      font-size: 1.85rem;
    }
    p {
      font-size: 0.875rem;
    }
  }
`

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  z-index: 5;
  width: 40%;
  visibility: hidden;
  margin: 0 auto 0 0 !important;
  @media (max-width: 1199px) {
    width: 50%;
  }
  @media (max-width: 991px) {
    width: 55%;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 0 0 1rem 0;
  }
`

export default function Hero() {
  useEffect(() => {
    if (window.innerWidth > 767) {
      gsap.from("#textWrapper", {
        x: -300,
        duration: 0.8,
        autoAlpha: 0,
        opacity: 0,
        delay: 0.5,
      })
    }
  })
  return (
    <StyledHero>
      <div>
        <StaticImage
          src="../../static/bus.jpg"
          alt="Główne zdjęcie"
          placeholder={"tracedSVG"}
          layout={"fullWidth"}
          loading={"eager"}
        />
        <StyledLeft id="textWrapper">
          <h1>
            Za granicę <br />
            jedź z nami!
          </h1>
          <p>
            Oferujemy międzynarodowy przewóz osób z adresu pod adres. Dodatkowo
            zajmujemy się również przewozem korespondencji i paczek na tej samej
            trasie.
            <br /> <br /> Dysponujemy nowoczesnym busem marki Renault, który
            zapewnia klientom bezpieczeństwo i komfort podczas podróży. Nasz
            kierowca ma wiele lat doświadczenia w transporcie osób a do miejsca
            docelowego jedziemy bezpośrednio.
          </p>
          <button className="button" onClick={() => scrollTo("#people")}>
            Sprawdź trasę
          </button>
        </StyledLeft>
      </div>
    </StyledHero>
  )
}
