import React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import { StaticImage } from "gatsby-plugin-image"

const StyledPricing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 0 2rem 4rem;
  position: relative;
  > div {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
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
  @media (max-width: 1199px) {
    padding-top: 2rem;
  }

  @media (max-width: 767px) {
    padding: 2rem 1rem 0;
    > div {
      flex-direction: column;
    }
    h2 {
      max-width: 600px;
      width: 100%;
      margin-bottom: 1.5rem;
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

const CardWrapper = styled.div`
  display: flex;
  justify-content: center !important;
  align-items: stretch;
  width: 100%;
  flex-direction: row !important;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`

const SingleCard = styled.div`
  width: calc(33% - 20px);
  margin: 0 30px 0 0;
  box-shadow: 0 0px 10px 2px #dedede;
  padding: 1.5rem;
  border-radius: 0.75rem;
  &::last-child {
    margin-right: 0;
  }
  span {
    color: #9f9fb9;
    display: block;
  }
  h5 {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1rem;
  }
  span {
    color: #353535;

    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  ul {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e4e4f3;
    li {
      margin-bottom: 1.5rem;
      font-size: 0.9375rem;
      color: #737373;
      font-weight: 600;
      padding-left: 2.5rem;
      position: relative;
      div {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  @media (max-width: 991px) {
    width: calc(50% - 15px);
    margin: 0 0 2rem 0;

    &:first-child {
      margin-right: 30px;
    }
    span {
      font-size: 2rem;
    }
  }

  @media (max-width: 575px) {
    width: 100%;
    margin: 0 0 2rem 0;
    &:first-child {
      margin-right: 0;
    }
  }
`

export default function Pricing() {
  return (
    <StyledPricing id="pricing">
      <div>
        <h2>Cennik</h2>
        <CardWrapper>
          <SingleCard>
            <h5>Przejazd jednorazowy</h5>
            <span>400zł / 90€</span>
            <p>Powyższa cena dotyczy jednorazowego przejazdu.</p>
            <ul>
              <li>
                {" "}
                <StaticImage
                  src="../../static/checked.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                Podróż z punktu A do punktu B
              </li>
              <li>
                {" "}
                <StaticImage
                  src="../../static/checked.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                Odbiór z miejsca ustalonego przez pasażera
              </li>
              <li>
                {" "}
                <StaticImage
                  src="../../static/checked.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                Komfortowa podróż
              </li>
              <li>
                {" "}
                <StaticImage
                  src="../../static/checked.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                Zapewnione postoje
              </li>
              <li>
                {" "}
                <StaticImage
                  src="../../static/checked.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                Szybko i bezpiecznie
              </li>
              <li>
                {" "}
                <StaticImage
                  src="../../static/checked.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                Miła atmosfera
              </li>
            </ul>
          </SingleCard>
          <SingleCard>
            <h5>Przewóz paczek i przesyłek</h5>
            <span>150zł / 35€</span>
            <p>Ceny większych paczek są ustalane indywidualnie</p>
            <ul>
              <li>
                <StaticImage
                  src="../../static/package.svg"
                  alt="Ikonka paczki"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"20"}
                />
                do 30kg - 150zł / 35€
              </li>
              <li>
                <StaticImage
                  src="../../static/package.svg"
                  alt="Ikonka paczki"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"25"}
                />
                ponad 30kg - cenę ustalam indywidualnie
              </li>
            </ul>
          </SingleCard>
          <SingleCard>
            <h5>Karta stałego klienta</h5>
            <span>-50%</span>
            <p>Co 6-ty przejazd kosztuje -50% ceny jednorazowego przejazdu</p>
            <ul>
              <li>
                {" "}
                <StaticImage
                  src="../../static/checked.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                Podróż z punktu A do punktu B
              </li>
              <li>
                {" "}
                <StaticImage
                  src="../../static/checked.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                Odbiór z miejsca ustalonego przez pasażera
              </li>
              <li>
                {" "}
                <StaticImage
                  src="../../static/checked.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                Komfortowa podróż
              </li>
              <li>
                {" "}
                <StaticImage
                  src="../../static/checked.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                Zapewnione postoje
              </li>
              <li>
                {" "}
                <StaticImage
                  src="../../static/checked.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                Szybko i bezpiecznie
              </li>
              <li>
                {" "}
                <StaticImage
                  src="../../static/checked.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"tracedSVG"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                Miła atmosfera
              </li>
            </ul>
          </SingleCard>
        </CardWrapper>
      </div>
    </StyledPricing>
  )
}
