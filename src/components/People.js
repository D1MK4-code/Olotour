import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const StyledPeople = styled.div`
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
  hr {
    color: #f3f3f3;
    width: 100%;
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 4;
  }
  @media (max-width: 767px) {
    padding: 0 1rem;
    /* margin-bottom: 3rem; */
    margin-bottom: 0;
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
`

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  z-index: 5;
  width: 50%;
  margin: 0 0 0 auto !important;
  @media (max-width: 767px) {
    width: 100%;
    padding-bottom: 2rem;
  }
`

const StyledLeft = styled.div`
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

export default function People() {
  useEffect(() => {
    if (window.innerWidth > 767) {
      gsap.from("#peopleImage", {
        y: 400,
        duration: 0.8,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#peopleImage",
          start: "top 100%",
          end: "bottom 80%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
      gsap.from("#styledRight", {
        y: -400,
        duration: 0.8,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#styledRight",
          start: "top 10%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
    } else {
      gsap.from("#peopleImage", {
        y: 400,
        duration: 0.6,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#peopleImage",
          start: "top 120%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
      gsap.from("#styledRight", {
        y: 400,
        duration: 0.6,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#styledRight",
          start: "top 120%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
    }
  })

  return (
    <StyledPeople id="people">
      <div>
        <StyledLeft id="peopleImage">
          <StaticImage
            src="../../static/bus2.jpeg"
            alt="Zdj??cie transportu pasa??er??w"
            placeholder={"tracedSVG"}
            layout={"fullWidth"}
            loading={"lazy"}
          />
        </StyledLeft>
        <StyledRight id="styledRight">
          <h2>Przewozy mi??dzynarodowe</h2>
          <p>
            <strong> OloTour </strong>??wiadczy kompleksowe us??ugi przewozu za
            granic?? w systemie
            <strong> door-to-door. </strong>
            Jad??c z nami masz pewno????, ??e b??dziesz w ka??dym docelowym miejscu na
            czas. Z naszych us??ug transportowych korzystaj?? osoby, kt??re planuj??
            urlop, wyje??d??aj?? s??u??bowo, naukowo oraz osoby, kt??re na sta??e
            pracuj?? za granic??. Jednorazowo mo??emy przewie???? do 8 pasa??er??w.
            <br /> <br />
            Nasza trasa obejmuje nast??puj??ce kraje: <br />
            <strong>Polska, Belgia, Niemcy, Holandia </strong>
          </p>
          <p>
            Wojew??dztwa, kt??re obs??ugujemy to: <br />
            <strong>
              Ma??opolskie, ??l??skie, Opolskie, Dolno??l??skie, Podkarpackie
            </strong>
          </p>
          <hr />
          <button className={"button"} onClick={() => scrollTo("#pricing")}>
            Cennik
          </button>
        </StyledRight>
      </div>
    </StyledPeople>
  )
}
