import { Link } from "gatsby"
import React, { useEffect } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"

const StyledNavbar = styled.nav`
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3rem 2rem 0;
  z-index: 6;
  > div {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.2em;
    color: #fe7062;
    text-decoration: none;
    font-style: italic;
  }
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 5rem;
    }
    a,
    button {
      font-size: 1rem;
      font-weight: 600;
      color: #7e97f3;
      font-style: normal;
      transition: all 0.2s ease-in-out;
      position: relative;
      border: none;
      outline: none;
      cursor: pointer;
      background: transparent;
      padding: 0;
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
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    a {
      pointer-events: all;
    }
    ul {
      position: absolute;
      right: 0;
      height: 100vh;
      top: 0;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      background-color: #f5f8ff;
      transform: translateX(100%);
      transition: transform 0.3s ease-in;
      padding: 8rem 0 0;
      pointer-events: all;
      li {
        margin: 0 0 2.5rem 0;
        pointer-events: all;
      }
      a,
      button {
        color: #070879;
        font-size: 1.5rem;
        pointer-events: all;
        background: transparent;
      }
      &.active {
        transform: translateX(0);
      }
    }
  }
`

const StyledBurger = styled.div`
  display: none;
  position: relative;
  z-index: 10;
  pointer-events: all;
  div {
    width: 2rem;
    height: 3px;
    background-color: #070879;
    margin: 0.35rem;
    transition: all 0.3s ease;
  }
  &.toggle {
    div {
      &:nth-child(1) {
        transform: rotate(-45deg) translate(-0.25rem, 0.25rem);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(45deg) translate(-0.5rem, -0.5rem);
      }
    }
  }
  @media (max-width: 767px) {
    display: block;
    cursor: pointer;
  }
`

export default function Navbar() {
  useEffect(() => {
    const navSlide = () => {
      const burger = document.querySelector(".burger")
      const nav = document.querySelector(".nav-links")
      const navLinks = document.querySelectorAll(".nav-links li")

      burger.addEventListener("click", () => {
        // Toggle Nav
        nav.classList.toggle("active")
        // Animate Links
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = ""
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.1
            }s`
          }
        })
        // Burger Animation
        burger.classList.toggle("toggle")
      })
    }

    navSlide()
  })
  return (
    <StyledNavbar>
      <div>
        <Link to="/">OloTour</Link>
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
        <StyledBurger className="burger">
          <div></div>
          <div></div>
          <div></div>
        </StyledBurger>
      </div>
    </StyledNavbar>
  )
}
