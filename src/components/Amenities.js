import React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import { StaticImage } from "gatsby-plugin-image"

const StyledAmenities = styled.div`
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
  ul {
    margin-bottom: 1rem;
    li {
      font-size: 1.125rem;
      color: #9f9fb9;
      margin-bottom: 1.5rem;
      position: relative;
      display: flex;
      align-items: center;
      div {
        margin: 0 0 0 1rem;
      }
    }
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
    min-height: 70vh;
  }

  @media (max-width: 991px) {
    min-height: 60vh;
  }

  @media (max-width: 767px) {
    padding: 0 1rem;
    > div {
      flex-direction: column-reverse;
    }
    h2 {
      max-width: 600px;
      width: 100%;
      margin-bottom: 1.5rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        font-size: 1rem;
        width: 50%;
      }
    }
  }
  @media (max-width: 575px) {
    min-height: auto;
    padding: 3rem 1rem 0;
    ul {
      li {
        width: 100%;
      }
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

export default function Amenities() {
  return (
    <StyledAmenities>
      <div>
        <StyledLeft>
          <StaticImage
            src="../../static/amenities.svg"
            alt="Zdjęcie udogodnień"
            placeholder={"tracedSVG"}
            layout={"fullWidth"}
            loading={"lazy"}
          />
        </StyledLeft>
        <StyledRight>
          <h2>Udogodnienia</h2>
          <ul>
            <li>
              Wygodne fotele
              <StaticImage
                src="../../static/happy.svg"
                alt="Ikona szczęścia"
                placeholder={"tracedSVG"}
                layout={"fixed"}
                loading={"lazy"}
                height={"24"}
              />
            </li>
            <li>
              Klimatyzacja
              <StaticImage
                src="../../static/air-conditioning.svg"
                alt="Ikona klimatyzacji"
                placeholder={"tracedSVG"}
                layout={"fixed"}
                loading={"lazy"}
                height={"24"}
              />
            </li>
            <li>
              Wi-fi
              <StaticImage
                src="../../static/wifi.svg"
                alt="Ikona wifi"
                placeholder={"tracedSVG"}
                layout={"fixed"}
                loading={"lazy"}
                height={"24"}
              />
            </li>
            <li>
              TV
              <StaticImage
                src="../../static/tv.svg"
                alt="Ikona tv"
                placeholder={"tracedSVG"}
                layout={"fixed"}
                loading={"lazy"}
                height={"24"}
              />
            </li>
            <li>
              Gniazdka
              <StaticImage
                src="../../static/socket.svg"
                alt="Ikona gniazdka"
                placeholder={"tracedSVG"}
                layout={"fixed"}
                loading={"lazy"}
                height={"24"}
              />
            </li>
            <li>
              Podstawki pod napoje
              <StaticImage
                src="../../static/drink.svg"
                alt="Ikona napoju"
                placeholder={"tracedSVG"}
                layout={"fixed"}
                loading={"lazy"}
                height={"24"}
              />
            </li>
            <li>
              Przestrzeń bagażowa
              <StaticImage
                src="../../static/bag.svg"
                alt="Ikona bagażu"
                placeholder={"tracedSVG"}
                layout={"fixed"}
                loading={"lazy"}
                height={"24"}
              />
            </li>
          </ul>
          <button type="button">Skontaktuj się</button>
        </StyledRight>
      </div>
    </StyledAmenities>
  )
}
