import { Link } from "gatsby"
import React, { useRef, useEffect } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 1.2em;
    color: #f22e2e;
    text-decoration: none;
    font-style: italic;
  }
  .nav-links {
    list-style: none;
    display: flex;
    li {
      margin-left: 5rem;
    }
    a,
    button {
      font-size: 1rem;
      font-weight: 700;
      color: #111;
      font-style: normal;
      transition: all 0.15s ease-in-out;
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
  @media (min-width: 768px) {
    #navLogo,
    .nav-links {
      visibility: hidden;
    }
  }
  @media (max-width: 991px) {
    .nav-links {
      li {
        margin-left: 3rem;
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
    .nav-links {
      position: absolute;
      right: 0;
      height: 100vh;
      top: 0;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      background-color: #333;
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
        color: #fff;
        font-size: 1.5rem;
        pointer-events: all;
        background: transparent;
      }
      &.active {
        transform: translateX(0);
      }
    }
    .gatsby-image-wrapper {
      width: 200px !important;
      img {
        object-fit: contain !important;
      }
    }
  }
  @media (max-width: 320px) {
    .gatsby-image-wrapper {
      width: 160px !important;
    }
  }
`

const DirectContact = styled.div`
  flex-direction: column;
  max-width: 360px;
  margin: 0 auto;
  display: none;
  visibility: hidden;
  ul {
    margin-top: 1rem;
    padding: 4rem 0 0 0 !important;
    li {
      margin-bottom: 1.5rem !important;
      padding-left: 2.5rem;
      position: relative;
      a {
        font-size: 1rem !important;
        color: #9090a8;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        &:hover {
          color: #f22e2e;
        }
      }
      div {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .gatsby-image-wrapper {
    width: 1.5rem !important;
    img {
      object-fit: contain !important;
    }
  }
  @media (max-width: 991px) {
    ul {
      padding-top: 0.5rem;
    }
  }
  @media (max-width: 767px) {
    display: flex;
    margin-bottom: 3rem;
    visibility: visible;
  }
  @media (max-width: 575px) {
    max-width: 100%;
    margin: 0 0 3rem;
    /*   ul {
      li {
        a {
          font-size: 1rem !important;
        }
      }
    } */
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
    background-color: #fff;
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
        navLinks.forEach(link => {
          link.addEventListener("click", event => {
            nav.classList.remove("active")
            burger.classList.remove("toggle")
          })
        })
        // Burger Animation
        burger.classList.toggle("toggle")
      })
    }
    navSlide()

    if (window.innerWidth > 767) {
      gsap.from("#navLogo", {
        x: 200,
        duration: 0.6,
        autoAlpha: 0,
        opacity: 0,
        delay: 0.5,
      })
      gsap.from(".nav-links", {
        x: -200,
        duration: 0.8,
        autoAlpha: 0,
        opacity: 0,
        delay: 0.5,
      })
    } else {
      gsap.from("#navLogo", {
        x: 100,
        duration: 0.5,
        autoAlpha: 0,
        opacity: 0,
        delay: 0.4,
      })
      gsap.from(".burger", {
        x: -100,
        duration: 0.5,
        autoAlpha: 0,
        opacity: 0,
        delay: 0.4,
      })
    }
  })
  return (
    <StyledNavbar>
      <div>
        <Link to="/" id="navLogo">
          <StaticImage
            src="../../static/olotour-v2.png"
            alt="Główne zdjęcie"
            placeholder={"none"}
            layout={"fixed"}
            height={"40"}
            loading={"eager"}
          />
        </Link>

        <ul className="nav-links">
          {/* <li>
            <button onClick={() => scrollTo("#pricing")}>Cennik</button>
          </li>
          <li>
            <button onClick={() => scrollTo("#contact")}>Kontakt</button>
          </li> */}
          <li>
            <Link to="/galeria">Galeria</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <DirectContact>
            <ul>
              <li>
                {" "}
                <StaticImage
                  src="../../static/phone.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"blurred"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                <a href="tel:697524834">+48 697 524 834</a>
              </li>
              <li>
                {" "}
                <StaticImage
                  src="../../static/mail.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"blurred"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                <a href="mailto:lukaszmotyka6@wp.pl">lukaszmotyka6@wp.pl</a>
              </li>
              <li>
                <StaticImage
                  src="../../static/facebook.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"blurred"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                <a
                  href="https://www.facebook.com/people/OloTour/100063745921043/"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <StaticImage
                  src="../../static/whatsapp.svg"
                  alt="Ikonka potwierdzenia"
                  placeholder={"blurred"}
                  layout={"fixed"}
                  loading={"lazy"}
                  height={"24"}
                />
                <a href="https://wa.me/697524834" target="_blank">
                  WhatsApp
                </a>
              </li>
            </ul>
          </DirectContact>
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
