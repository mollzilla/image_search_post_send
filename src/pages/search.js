import * as React from "react"
import SearchContainer from "@components/SearchContainer";

import Layout from "../components/layout"
import Seo from "../components/seo"

const SearchPage = () => (
  <Layout>
    <Seo title="Search Page" />
    
    <SearchContainer />

  </Layout>
)

export default SearchPage
