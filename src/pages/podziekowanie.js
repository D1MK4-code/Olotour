import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function Podziekowanie() {
  return (
    <Layout>
      <div>
        <h1>Dziękujemy za przeslanie do nas wiadomości!</h1>
        <p>Odpowiemy jak najszybciej</p>
        <p>Pozdrawiamy, OloTour</p>
        <Link to="/">Powrót</Link>
      </div>
    </Layout>
  )
}
