import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to my Athonet Image Search Challenge</h1>
    <p>It's not really my challenge. It's my attempt at solving the challenge.</p>
    {/* TODO set static image */}
      <Link to="/page-2/">Go to page 2</Link> <br />
      <a href="/using-typescript/">My Github</a>
  </Layout>
)

export default IndexPage
