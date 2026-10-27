import * as React from "react"
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <h3>Olá Mundo Gatsby!</h3>
      <p>Esse é um parágrafo</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
