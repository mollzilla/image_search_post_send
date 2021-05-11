import * as React from "react"
import SearchBar from "@components/SearchBar";
import ResultsGrid from "@components/ResultsGrid";
import { Link } from "gatsby"

const SearchContainer = () => (
  <>
    <SearchBar />
    <ResultsGrid />
  </>
)

export default SearchContainer
