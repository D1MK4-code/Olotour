import React, { useState } from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Data } from "../components/Data"
const StyledFaq = styled.div`
  min-height: calc(100vh - 136px);
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1400px;
    margin: 0 auto;
    padding: 10rem 1rem;
  }
  h2 {
    font-size: 2.25rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  @media (max-width: 767px) {
    > div {
      padding: 7rem 1rem;
    }
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }
  }
  @media (max-width: 575px) {
    min-height: calc(100vh - 170px);
  }
`

const Wrap = styled.div`
  cursor: pointer;
`

const Dropdown = styled.div`
  font-size: 1rem;
`

export default function Faq() {
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {
      // if question is active - close it
      return setClicked(null)
    }
    setClicked(index)
  }

  return (
    <Layout>
      <StyledFaq>
        <div>
          <h2>FAQ</h2>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h3>{item.question}</h3>
                  <span>{clicked === index ? <img /> : <img />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            )
          })}
        </div>
      </StyledFaq>
    </Layout>
  )
}
