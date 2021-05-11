import * as React from "react"
import SearchBar from "@components/SearchBar";
import ResultsGrid from "@components/ResultsGrid";
import { Link } from "gatsby"

const SearchContainer = () => (
  <>
    <h1>Hello from search container</h1>

    <SearchBar />
    <ResultsGrid />
  </>
)

export default SearchContainer
