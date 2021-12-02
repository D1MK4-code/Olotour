import React, { useRef, useEffect } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import People from "../components/People"
import Author from "../components/Author"
import Amenities from "../components/Amenities"
import Packages from "../components/Packages"
import Pricing from "../components/Pricing"
import Contact from "../components/Contact"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { Helmet } from "react-helmet"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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

const OutsideWrapper = styled.div`
  width: 100%;
  padding: 0 2rem;
  @media (max-width: 767px) {
    padding: 2rem 1rem 0;
  }
`

const InsideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: center;
  /* padding: 0 1rem; */
  margin-bottom: 4rem;
  /* .carousel {
    max-width: 810px;
    overflow: hidden;
  } */
  .carousel-indicators {
    margin-bottom: 1.5rem;
    button {
      background-color: #f22e2e;
      opacity: 0.35;
      border-top: none;
      border-bottom: none;
      &.active {
        opacity: 1;
      }
    }
  }
  .carousel-control-next,
  .carousel-control-prev {
    /*     filter: invert(0%) sepia(3%) saturate(487%) hue-rotate(293deg)
      brightness(10%) contrast(151%); */
    filter: invert(87%) sepia(86%) saturate(3203%) hue-rotate(316deg)
      brightness(101%) contrast(1000%);
    opacity: 1;
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    width: 3.5rem;
    height: 3.5rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.25);
    }
  }
  h2 {
    line-height: 1.2em;
    margin-bottom: 2rem;
    position: relative;
    z-index: 4;
    text-align: left;
    width: 100%;
    display: block;
  }
  @media (max-width: 767px) {
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 1.5rem;
    }
    .carousel-indicators {
      margin-right: 5%;
      margin-bottom: 1rem;
      margin-left: 5%;
      button {
        margin-right: 2px;
        margin-left: 2px;
      }
    }
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
      width: 2rem;
      height: 2rem;
    }
  }
`

export default function Home({ data }) {
  useEffect(() => {
    if (window.innerWidth > 767) {
      gsap.from("#carouselHeading", {
        y: -200,
        duration: 0.8,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#carouselHeading",
          start: "top 40%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
      gsap.from("#carouselWrapper", {
        y: 400,
        duration: 0.8,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#carouselWrapper",
          start: "top 90%",
          end: "bottom 70%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
    } else {
      gsap.from("#carouselHeading", {
        y: -150,
        duration: 0.5,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#carouselHeading",
          start: "top 40%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
      gsap.from("#carouselWrapper", {
        y: 300,
        duration: 0.6,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#carouselWrapper",
          start: "top 90%",
          end: "bottom 70%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
    }
  })
  return (
    <Layout>
      <StyledContainer>
        <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>Olotour</title>
          <meta name="title" content="Za granicę jedź z nami" />
          <meta
            name="description"
            content="Międzynarodowe przejazdy busem na trasie Polska-Niemcy-Belgia-Holandia. Obsługujemy województwa: Małopolskie, Śląskie, Opolskie, Dolnośląskie, Podkarpackie."
          />{" "}
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://olotour.pl/" />
          <meta property="og:title" content="Za granicę jedź z nami" />
          <meta
            property="og:description"
            content="Międzynarodowe przejazdy busem na trasie Polska-Niemcy-Belgia-Holandia. Obsługujemy województwa: Małopolskie, Śląskie, Opolskie, Dolnośląskie, Podkarpackie."
          />
          <meta
            property="og:image"
            content="https://olotour.pl/olotour-v2.png"
          />{" "}
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://olotour.pl/" />
          <meta property="twitter:title" content="Za granicę jedź z nami" />
          <meta
            property="twitter:description"
            content="Międzynarodowe przejazdy busem na trasie Polska-Niemcy-Belgia-Holandia. Obsługujemy województwa: Małopolskie, Śląskie, Opolskie, Dolnośląskie, Podkarpackie."
          />
          <meta
            property="twitter:image"
            content="https://olotour.pl/olotour-v2.png"
          />
        </Helmet>
        <Hero />
        <People />
        <Packages />
        <Amenities />
        <Author />
        <Pricing />
        <OutsideWrapper>
          <InsideWrapper>
            <h2 id="carouselHeading">Podróżuj komfortowo</h2>
            <Carousel id="carouselWrapper">
              {data.gallery.edges.map(({ node }) => (
                <Carousel.Item key={node.id}>
                  <GatsbyImage
                    image={node.childImageSharp.gatsbyImageData}
                    alt={node.base.split("-").join(" ").split(".")[0]}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </InsideWrapper>
        </OutsideWrapper>
        <Contact />
      </StyledContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    gallery: allFile(sort: { fields: base, order: ASC }) {
      edges {
        node {
          id
          base
          publicURL
          childImageSharp {
            gatsbyImageData(
              height: 800
              width: 1400
              transformOptions: { cropFocus: CENTER, fit: COVER }
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
