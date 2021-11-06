import { Link } from "gatsby"
import React, { useEffect } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"

const StyledFooter = styled.nav`
  background: #353535;
  padding: 1.5rem;
  width: 100vw;
  section {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div {
    display: flex;
    flex-direction: column;
    a {
      margin-bottom: 0.75rem;
      display: block;
      font-size: 1.25rem;
      font-weight: 700;
      color: #fff;
      text-decoration: none;
      transition: all 0.15s ease-in-out;
      &:hover {
        color: #f22e2e;
      }
      &:last-child {
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 0;
      }
    }
  }
  ul {
    display: flex;
    a,
    button {
      font-size: 1rem;
      font-weight: 700;
      color: #fff;
      font-style: normal;
      transition: all 0.15s ease-in-out;
      position: relative;
      border: none;
      outline: none;
      cursor: pointer;
      background: transparent;
      padding: 0;
      margin: 0;
      text-decoration: none;
      &:after {
        content: "";
        position: absolute;
        bottom: -0.25rem;
        left: 0;
        margin: auto;
        width: 0%;
        color: transparent;
        background: #f22e2e;
        height: 1px;
        transition: all 0.15s ease-in-out;
      }
      &:hover {
        color: #f22e2e;
        &:after {
          width: 100%;
        }
      }
    }
  }
  li {
    margin-left: 2rem;
  }
  p {
    margin: 0 0 0.75rem 0;
    color: #f0f0f0;
    font-size: 1rem;
  }
  @media (max-width: 575px) {
    padding: 1.5rem 1rem;
    section {
      flex-direction: column;
      align-items: flex-start;
    }
    div {
      a {
        font-size: 1.125rem;
        margin-bottom: 0.75rem;
        &:last-child {
          margin-bottom: 1.125rem;
          font-size: 0.75rem;
        }
      }
    }
    p {
      font-size: 0.875rem;
    }
    ul {
      a,
      button {
        font-size: 0.875rem;
      }
    }
    li {
      margin: 0 1rem 0 0;
    }
  }
`
export default function Footer() {
  return (
    <StyledFooter>
      <section>
        <div>
          <Link to="/">OloTour</Link>
          <p>Copyright © 2021 OloTour</p>
          <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
        </div>
        <ul className="nav-links">
          <li>
            <button onClick={() => scrollTo("#pricing")}>Cennik</button>
          </li>

          <li>
            <Link to="/galeria">Galeria</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </section>
    </StyledFooter>
  )
}
