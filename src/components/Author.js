import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const StyledAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 5rem 2rem;
  margin-bottom: 4rem;
  position: relative;
  > div {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .gatsby-image-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: #000;
      opacity: 0.75;
      z-index: 0;
    }
  }
  h3 {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
    color: #fff;
    padding-bottom: 1rem;
    font-weight: 600;
    z-index: 1;
    position: relative;
    &:after {
      content: "";
      height: 2px;
      width: 50px;
      background-color: #fff;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      position: absolute;
    }
  }
  p {
    margin-bottom: 1.5rem;
    max-width: 500px;
    position: relative;
    z-index: 4;
    color: #fff;
    text-align: center;
  }
  @media (max-width: 1199px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 767px) {
    padding: 4rem 1rem;
    margin-bottom: 3rem;
    > div {
      flex-direction: column;
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
  @media (max-width: 340px) {
    min-height: auto;
    h1 {
      font-size: 1.85rem;
    }
    p {
      font-size: 0.875rem;
    }
  }
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: hidden;

  .gatsby-image-wrapper {
    position: relative !important;
    width: 100px !important;
    height: 100px !important;
    border-radius: 50%;
    overflow: visible !important;
    display: flex;
    top: auto;
    left: auto;
    &:after {
      display: none !important;
    }
    img {
      width: 100px !important;
      height: 100px !important;
      object-fit: cover !important;
      position: absolute !important;
      border-radius: 50%;
    }
  }
`

export default function Author() {
  useEffect(() => {
    if (window.innerWidth > 767) {
      gsap.from("#authorContent", {
        y: 250,
        duration: 0.8,
        autoAlpha: 0,
        opacity: 0,
        scrollTrigger: {
          trigger: "#authorContent",
          start: "top 90%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
    } else {
      gsap.from("#authorContent", {
        y: 250,
        duration: 0.6,
        autoAlpha: 0,
        opacity: 0,
        scrollTrigger: {
          trigger: "#authorContent",
          start: "top 120%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
    }
  })
  return (
    <StyledAuthor>
      <div>
        <StaticImage
          src="../../static/autostrada.jpg"
          alt="Główne zdjęcie"
          placeholder={"tracedSVG"}
          layout={"fullWidth"}
          loading={"lazy"}
        />
        <StyledContent id="authorContent">
          <StaticImage
            src="../../static/lukasz.jpg"
            alt="Główne zdjęcie"
            placeholder={"tracedSVG"}
            layout={"fixed"}
            height={"100"}
            width={"100"}
            loading={"lazy"}
          />
          <h3>Łukasz Motyka</h3>
          <p>
            Założyciel firmy, kierowca z wieloletnim doświadczeniem. Stawia
            bezpieczeństwo i komfort wszystkich pasażerów na pierwszym miejscu.
          </p>
        </StyledContent>
      </div>
    </StyledAuthor>
  )
}
