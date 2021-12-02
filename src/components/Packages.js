import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const StyledPackages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;
  position: relative;
  margin-bottom: 4rem;
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
    position: relative;
    z-index: 4;
  }
  p {
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 4;
  }
  @media (max-width: 767px) {
    padding: 0 1rem;
    margin-bottom: 3rem;

    > div {
      flex-direction: column;
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
    padding: 1rem 1rem 0;
  }
`

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  z-index: 5;
  width: 50%;
  margin: 0 auto 0 0 !important;
  @media (max-width: 767px) {
    width: 100%;
    padding-bottom: 2rem;
  }
`

const StyledRight = styled.div`
  display: block;
  min-height: 515px;
  position: static;
  align-items: flex-end;
  z-index: 1;
  width: 50%;
  div {
    width: 100%;
  }
  img {
    height: auto;
  }
  @media (max-width: 1399px) {
    align-items: center;
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

export default function Packages() {
  useEffect(() => {
    if (window.innerWidth > 767) {
      gsap.from("#packagesImage", {
        y: -400,
        duration: 0.8,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#packagesImage",
          start: "top 10%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
      gsap.from("#packagesRight", {
        y: 400,
        duration: 0.8,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#packagesRight",
          start: "top 100%",
          end: "bottom 80%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
    } else {
      gsap.from("#packagesImage", {
        y: 400,
        duration: 0.6,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#packagesImage",
          start: "top 120%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
      gsap.from("#packagesRight", {
        y: 400,
        duration: 0.6,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#packagesRight",
          start: "top 120%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
    }
  })

  return (
    <StyledPackages>
      <div>
        <StyledLeft id="packagesImage">
          <h2>Przewozy paczek</h2>
          <p>
            Na trasie naszego przejazdu świadczymy usługę przewozu paczek oraz
            przesyłek - zarówno tych o standardowych gabarytach
            <strong> do 30kg </strong>, jak i tych większych
            <strong> powyżej 30kg</strong>.
            <br />
            <br />
            Cennik za transport przesyłek znajduje się poniżej. W specjalnych
            sytuacjach, w przypadku cięższych/większych paczek ceny ustalamy z
            klientami indywidualnie.
            <br />
            <br />
            Zapewniamy państwa, że od początku naszej działalności dokładamy
            wszelkich starań aby wszystkie nasze usługi spełniały wszelkie
            oczekiwania.
          </p>
          <button className={"button"} onClick={() => scrollTo("#pricing")}>
            Cennik
          </button>
        </StyledLeft>
        <StyledRight id="packagesRight">
          <StaticImage
            src="../../static/paczki.jpeg"
            alt="Zdjęcie transportu paczek"
            placeholder={"tracedSVG"}
            layout={"fullWidth"}
            loading={"lazy"}
          />
        </StyledRight>
      </div>
    </StyledPackages>
  )
}
