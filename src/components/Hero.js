import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import { StaticImage } from "gatsby-plugin-image"

const StyledHero = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;
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
  h1 {
    font-size: 4rem;
    line-height: 1.2em;
    margin-bottom: 2rem;
    color: #070879;
    position: relative;
    z-index: 4;
  }
  p {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
    max-width: 300px;
    color: #9f9fb9;
    line-height: 1.15em;
    position: relative;
    z-index: 4;
  }
  button {
    /* background-color: #6666ff; */
    background-color: #fe7062;
    border: none;
    outline: none;
    border-radius: 0.35rem;
    color: #fff;
    font-size: 0.875rem;
    text-transform: uppercase;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    position: relative;
    z-index: 4;
    &:hover {
      background-color: #3f5df4;
    }
  }
  @media (max-width: 1399px) {
    h1 {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 1199px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 767px) {
    padding: 0 1rem;
    > div {
      flex-direction: column;
      &:first-child {
        padding-top: 8rem;
      }
    }
    h1,
    p {
      max-width: 600px;
      width: 100%;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
  }
  @media (max-width: 575px) {
    min-height: auto;

    h1 {
      font-size: 2.25rem;
    }
    p {
      font-size: 1rem;
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
  margin: 0 auto 0 0 !important;
  @media (max-width: 767px) {
    width: 100%;
  }
`

const StyledRight = styled.div`
  display: block;
  min-height: 515px;
  position: absolute;
  align-items: flex-end;
  z-index: 1;
  width: 60%;
  bottom: 0px;
  right: 0px;
  max-width: 1150px;
  div {
    width: 100%;
  }
  img {
    height: auto;
  }
  @media (max-width: 1599px) {
    width: 65%;
  }
  @media (max-width: 1399px) {
    align-items: center;
  }
  @media (max-width: 991px) {
    width: 60%;
  }
  @media (max-width: 767px) {
    width: 100%;
    align-items: flex-start;
    padding-top: 2rem;
    min-height: 450px;
    position: static;
    img {
      max-width: 550px;
      margin: 0 auto;
    }
  }
  @media (max-width: 575px) {
    min-height: auto;
  }
`

export default function Hero() {
  return (
    <StyledHero>
      <div>
        <StyledLeft>
          <h1>
            Za granicę <br />
            jedź z nami!
          </h1>
          <p>
            Oferujemy międzynarodowy przewóz osób z adresu pod adres. Dodatkowo
            zajmujemy się również przewozem korespondencji i paczek na tej samej
            trasie.
          </p>
          <button type="button">Sprawdź trasę</button>
        </StyledLeft>
        <StyledRight>
          <StaticImage
            src="../../static/hero-bg.svg"
            alt="Główne zdjęcie"
            placeholder={"tracedSVG"}
            layout={"fullWidth"}
          />
        </StyledRight>
      </div>
    </StyledHero>
  )
}
