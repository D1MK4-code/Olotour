import React, { useState } from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Data } from "../components/Data"
import { Helmet } from "react-helmet"

const StyledFaq = styled.div`
  min-height: calc(100vh - 136px);
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10rem 2rem;
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

const SingleItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
  padding: 1.25rem 0;
  @media (max-width: 767px) {
    padding: 1rem 0;
  }
`

const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  h4 {
    padding-right: 4rem;
    font-size: 1.25rem;
    margin: 0;
  }
  span {
    position: absolute;
    right: 1rem;
    top: 0;
  }

  @media (max-width: 767px) {
    h4 {
      font-size: 1.125rem;
    }
  }
`

const Dropdown = styled.div`
  margin-top: 1rem;
  p {
    font-size: 1rem;
    margin: 0;
  }
  @media (max-width: 767px) {
    margin-top: 0.75rem;
    p {
      font-size: 0.875rem;
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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
        <Helmet title="FAQ" defer={false} />
        <div>
          <h2>FAQ</h2>
          <Container>
            {Data.map((item, index) => {
              return (
                <>
                  <SingleItem>
                    <Wrap onClick={() => toggle(index)} key={index}>
                      <h4>{item.question}</h4>
                      <span>
                        {clicked === index ? (
                          <StaticImage
                            src="../../static/minus.svg"
                            alt="Ikonka minus"
                            placeholder={"tracedSVG"}
                            layout={"fixed"}
                            height={"24"}
                          />
                        ) : (
                          <StaticImage
                            src="../../static/plus.svg"
                            alt="Ikonka plus"
                            placeholder={"tracedSVG"}
                            layout={"fixed"}
                            height={"24"}
                          />
                        )}
                      </span>
                    </Wrap>
                    {clicked === index ? (
                      <Dropdown>
                        <p>{item.answer}</p>
                      </Dropdown>
                    ) : null}
                  </SingleItem>
                </>
              )
            })}
          </Container>
        </div>
      </StyledFaq>
    </Layout>
  )
}
