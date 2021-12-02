import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 2rem 2rem 4rem;
  position: relative;
  > div {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  > div {
    width: 100%;
  }
  .button {
    margin-bottom: 5px;
  }
  h2 {
    line-height: 1.2em;
    margin-bottom: 2rem;
    position: relative;
    z-index: 4;
  }

  @media (max-width: 767px) {
    padding: 2rem 1rem 0;
    > div {
      flex-direction: column-reverse;
    }
    h2 {
      max-width: 600px;
      width: 100%;
      margin-bottom: 1.5rem;
    }
  }
  @media (max-width: 575px) {
    min-height: auto;
    padding: 1rem 1rem 0;
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

const LeftWrapper = styled.div`
  width: 50%;
  padding: 0 1rem;
  .gatsby-image-wrapper {
    width: auto;
    margin: 0 auto 3rem;
  }
  img {
    height: auto;
    width: 100%;
  }

  @media (max-width: 991px) {
    img {
      height: 100%;
      width: 100%;
      object-fit: contain !important;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 3rem 0;
    display: flex;
    flex-direction: column-reverse;
    .gatsby-image-wrapper {
      width: 100%;
    }
  }
`

const RightWrapper = styled.div`
  width: 50%;
  padding: 0 1rem;
  form {
    div {
      display: flex;
      flex-direction: column;
      label {
        font-size: 1rem;
        color: #929292;
        margin-bottom: 0.75rem;
      }
      input,
      textarea {
        color: #353535;
        font-size: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #9f9fb9;
        outline: none;
        margin-bottom: 2rem;
        padding: 0.75rem;
        transition: all 0.15s ease-in-out;
        &:focus,
        &:active,
        &:focus-within,
        &:hover {
          border: 1px solid #353535;
        }
      }
      textarea {
        height: 150px;
      }
    }
  }
  @media (max-width: 1199px) {
    form {
      div {
        textarea {
          height: 145px;
        }
      }
    }
  }
  @media (max-width: 991px) {
    form {
      div {
        label {
          margin-bottom: 0.5rem;
        }
        input,
        textarea {
          padding: 0.75rem;
          margin-bottom: 1.5rem;
        }
        textarea {
          height: 115px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 1rem 0;
  }
`

const DirectContact = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  margin: 0 auto;
  h6 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  ul {
    margin-top: 1rem;
    padding-top: 1rem;
    li {
      margin-bottom: 1.5rem;
      padding-left: 2.5rem;
      position: relative;
      a {
        font-size: 1.125rem;
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
  @media (max-width: 991px) {
    ul {
      padding-top: 0.5rem;
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 3rem;
  }
  @media (max-width: 575px) {
    max-width: 100%;
    margin: 0 0 3rem;
    ul {
      li {
        a {
          font-size: 1rem;
        }
      }
    }
  }
`

export default function Contact() {
  useEffect(() => {
    if (window.innerWidth > 767) {
      gsap.from("#leftContact", {
        y: -300,
        duration: 0.8,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#leftContact",
          start: "top 50%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
      gsap.from("#leftContactImage", {
        y: -300,
        duration: 0.8,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#leftContactImage",
          start: "top 20%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
      gsap.from("#rightContact", {
        y: -400,
        duration: 0.8,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#rightContact",
          start: "top 20%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
    } else {
      gsap.from("#rightContact", {
        y: 300,
        duration: 0.6,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#rightContact",
          start: "top 150%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
      gsap.from("#leftContact", {
        y: 300,
        duration: 0.6,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#leftContact",
          start: "top 150%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
      gsap.from("#leftContactImage", {
        y: 300,
        duration: 0.6,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: "#leftContactImage",
          start: "top 150%",
          end: "bottom 50%",
          ease: "Power2.easeInOut",
          autoAlpha: 1,
        },
      })
    }
  })
  return (
    <StyledContact id="contact">
      <div>
        <LeftWrapper>
          <div id="leftContactImage">
            <StaticImage
              src="../../static/contact.svg"
              alt="Zdjęcie kontaktu"
              placeholder={"tracedSVG"}
              layout={"fullWidth"}
              loading={"lazy"}
            />
          </div>
          <DirectContact id="leftContact">
            <h6>Skontaktuj się bezpośrednio</h6>
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
        </LeftWrapper>
        <RightWrapper id="rightContact">
          <h2>Kontakt</h2>
          <form
            method="post"
            name="contactform"
            data-netlify="true"
            action="/podziekowanie"
          >
            <input type="hidden" name="form-name" value="contactform" />
            <div>
              <label for="name">Imię:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label for="date">Data wyjazdu:</label>
              <input type="date" id="date" name="date" />
            </div>
            <div>
              <label for="number">Numer telefonu:</label>
              <input type="text" id="number" name="number" />
            </div>
            <div>
              <label for="email">Adres e-mail:</label>
              <input type="text" id="email" name="email" />
            </div>
            <div>
              <label for="text">Wiadomość:</label>
              <textarea type="text" id="text" name="text" />
            </div>
            <input type="submit" value="Wyślij wiadomość" className="button" />
          </form>
        </RightWrapper>
      </div>
    </StyledContact>
  )
}
