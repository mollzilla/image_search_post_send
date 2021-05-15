import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to my Athonet Image Post Send Search Challenge</h1>
    <p>This is the instance where I continued to make progress after delivering the original repository, even if it's not considered, for personal betterment.</p>
    {/* TODO set static image */}
      <Link to="/search/">Go to Search layout</Link> <br />
      <a href="/using-typescript/">My Github</a>
  </Layout>
)

export default IndexPage
