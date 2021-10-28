import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledNavbar = styled.nav`
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3rem 2rem 0;
  z-index: 6;
  div {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  a {
    font-weight: 500;
    font-size: 1.5rem;
    color: #fe7062;
    text-decoration: none;
    font-style: italic;
  }
  ul {
    list-style: none;
    a {
      font-size: 1rem;
      font-weight: 600;
      color: #9f9fb9;
      font-style: normal;
      transition: all 0.2s ease-in-out;
      position: relative;
      margin-left: 3.5rem;
      &:after {
        content: "";
        position: absolute;
        bottom: -0.25rem;
        left: 0;
        margin: auto;
        width: 0%;
        color: transparent;
        background: #3f5df4;
        height: 1px;
        transition: all 0.2s ease-in-out;
      }
      &:hover {
        color: #3f5df4;
        &:after {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 767px) {
    padding: 1.5rem 1rem 0;
  }
`

export default function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <Link to="/">OloTour</Link>
        <ul className="links">
          <Link to="/faq">FAQ</Link>
          <Link to="/galeria">Galeria</Link>
          <Link to="/cennik">Cennik</Link>
        </ul>
      </div>
    </StyledNavbar>
  )
}
