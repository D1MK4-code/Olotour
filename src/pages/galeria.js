import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import { Helmet } from "react-helmet"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const StyledGallery = styled.div`
  min-height: calc(100vh - 136px);

  h2 {
    font-size: 2.25rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  @media (max-width: 767px) {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }
  }
  @media (max-width: 575px) {
    min-height: calc(100vh - 170px);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 10rem 1rem 5rem;
  @media (max-width: 767px) {
    padding: 7rem 1rem 3rem;
  }
`

const SingleImage = styled.div`
  width: calc(33.33% - 1.25rem);
  margin-bottom: 1.875rem;
  &:nth-child(3n + 1) {
    margin-right: 1.875rem;
  }
  &:nth-child(3n + 2) {
    margin-right: 1.875rem;
  }
  @media (max-width: 1199px) {
    width: calc(33.33% - 0.834rem);
    margin-bottom: 1.25rem;
    &:nth-child(3n + 1) {
      margin-right: 1.25rem;
    }
    &:nth-child(3n + 2) {
      margin-right: 1.25rem;
    }
  }
  @media (max-width: 767px) {
    width: calc(50% - 0.625rem);
    &:nth-child(3n + 1) {
      margin-right: 0;
    }
    &:nth-child(3n + 2) {
      margin-right: 0;
    }
    &:nth-child(odd) {
      margin-right: 1.25rem;
    }
  }
  @media (max-width: 575px) {
    width: 100%;
    margin-bottom: 1rem;

    &:nth-child(odd) {
      margin-right: 0;
    }
  }
`

export default function Galeria({ data }) {
  /* useEffect(() => {
    if (window.innerWidth > 767) {
      gsap.from("#singleGallery div", {
        opacity: 0,
        stagger: 0.05,
        y: 100,
        duration: 0.6,
        delay: 0.5,
        autoAlpha: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#singleGallery",
          start: "top 40%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
    } else {
      gsap.from("#singleGallery div", {
        opacity: 0,
        stagger: 0.05,
        y: 100,
        duration: 0.6,
        delay: 0.5,
        autoAlpha: 0,
        ease: "power4.out",
      })
    }
  }) */

  return (
    <Layout>
      <StyledGallery>
        <Helmet title="Galeria" defer={false} />
        <SimpleReactLightbox>
          <SRLWrapper>
            <Wrapper id="singleGallery">
              {data.gallery.edges.map(({ node }) => (
                <SingleImage key={node.id}>
                  <a href={node.publicURL}>
                    <GatsbyImage
                      image={node.childImageSharp.gatsbyImageData}
                      alt={node.base.split("-").join(" ").split(".")[0]}
                    />
                  </a>
                </SingleImage>
              ))}
            </Wrapper>
          </SRLWrapper>
        </SimpleReactLightbox>
      </StyledGallery>
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
              height: 540
              width: 810
              transformOptions: { fit: COVER }
              placeholder: BLURRED
              webpOptions: { quality: 50 }
            )
          }
        }
      }
    }
  }
`
