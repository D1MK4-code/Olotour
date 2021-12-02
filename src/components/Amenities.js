import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const StyledAmenities = styled.div`
  width: 100%;
  padding: 0 2rem;
  position: relative;
  margin-bottom: 6rem;
  div {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  > div {
    width: 100%;
  }
  button {
    margin-bottom: 5px;
  }
  h2 {
    line-height: 1.2em;
    margin-bottom: 3rem;
    position: relative;
    z-index: 4;
    text-align: center;
  }
  ul {
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    li {
      font-size: 1.625rem;
      color: #737373;
      font-weight: 600;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33.333%;
      padding: 0 1rem;
      flex-direction: column;
      margin-bottom: 4rem;
      text-align: center;
      div {
        margin: 0 0 1.5rem 0;
      }
    }
  }

  @media (max-width: 991px) {
    ul {
      li {
        font-size: 1.325rem;
        margin-bottom: 3.5rem;
        div {
          margin: 0 0 1.25rem 0;
        }
      }
    }
  }

  @media (max-width: 767px) {
    padding: 0 1rem;
    h2 {
      width: 100%;
    }
    ul {
      li {
        font-size: 1.125rem;
        div {
          width: 65px !important;
          height: 65px !important;
        }
      }
    }
  }
  @media (max-width: 575px) {
    min-height: auto;
    padding: 1rem 1rem 0;
    margin-bottom: 4rem;
    div {
      align-items: flex-start;
    }
    h2 {
      text-align: left;
      margin-bottom: 2rem;
    }
    ul {
      li {
        flex-direction: row;
        justify-content: flex-start;
        max-width: 400px;
        width: 100%;
        margin: 0 auto 1.5rem;
        padding: 0;
        div {
          margin: 0 1.25rem 0 0;
          width: 50px !important;
          height: 50px !important;
        }
      }
    }
  }
`

export default function Amenities() {
  useEffect(() => {
    if (window.innerWidth > 767) {
      gsap.from("#amenitiesTitle", {
        y: -200,
        duration: 0.8,
        autoAlpha: 0,
        opacity: 0,
        scrollTrigger: {
          trigger: "#amenitiesTitle",
          start: "top 40%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
      gsap.from("#amenities li", {
        opacity: 0,
        stagger: 0.2,
        y: 300,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#amenities",
          start: "top 40%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
    } else {
      gsap.from("#amenitiesTitle", {
        y: -200,
        duration: 0.6,
        autoAlpha: 0,
        opacity: 0,
        scrollTrigger: {
          trigger: "#amenitiesTitle",
          start: "top 40%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
      gsap.from("#amenities li", {
        opacity: 0,
        stagger: 0.1,
        y: 200,
        duration: 0.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#amenities",
          start: "top 40%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
    }
  })
  return (
    <StyledAmenities>
      <div>
        <h2 id="amenitiesTitle">Udogodnienia</h2>
        <ul id="amenities">
          {/*  <li>
            <StaticImage
              src="../../static/happy.svg"
              alt="Ikona szczęścia"
              placeholder={"tracedSVG"}
              layout={"fixed"}
              loading={"lazy"}
              height={"100"}
            />
            Wygodne fotele
          </li> */}
          <li>
            <StaticImage
              src="../../static/air-conditioning.svg"
              alt="Ikona klimatyzacji"
              placeholder={"tracedSVG"}
              layout={"fixed"}
              loading={"lazy"}
              height={"100"}
            />
            Klimatyzacja
          </li>
          <li>
            <StaticImage
              src="../../static/wifi.svg"
              alt="Ikona wifi"
              placeholder={"tracedSVG"}
              layout={"fixed"}
              loading={"lazy"}
              height={"100"}
            />
            Wi-fi
          </li>
          <li>
            <StaticImage
              src="../../static/tv.svg"
              alt="Ikona tv"
              placeholder={"tracedSVG"}
              layout={"fixed"}
              loading={"lazy"}
              height={"100"}
            />
            TV
          </li>
          <li>
            <StaticImage
              src="../../static/socket.svg"
              alt="Ikona gniazdka"
              placeholder={"tracedSVG"}
              layout={"fixed"}
              loading={"lazy"}
              height={"100"}
            />
            Gniazdka
          </li>
          <li>
            <StaticImage
              src="../../static/drink.svg"
              alt="Ikona napoju"
              placeholder={"tracedSVG"}
              layout={"fixed"}
              loading={"lazy"}
              height={"100"}
            />
            Podstawki pod napoje
          </li>
          <li>
            <StaticImage
              src="../../static/bag.svg"
              alt="Ikona bagażu"
              placeholder={"tracedSVG"}
              layout={"fixed"}
              loading={"lazy"}
              height={"100"}
            />
            Przestrzeń bagażowa
          </li>
        </ul>
        <button
          id="amenitiesButton"
          className={"button"}
          onClick={() => scrollTo("#contact")}
        >
          Skontaktuj się
        </button>
      </div>
    </StyledAmenities>
  )
}
