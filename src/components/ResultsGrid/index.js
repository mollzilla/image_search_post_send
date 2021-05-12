import * as React from "react"
import styled from "styled-components"

const ResultsGrid = ({ results }) => {

  return (
    <>
      <h1 style={{textAlign: "center"}}>{results.length > 0 ? "Showing " + results.length + " results" : "No results to show"}</h1>
      <Grid>
        {results.map(result => (
          <img src={result?.replace(/amp;/g, "")} alt="search result" />
        ))}
      </Grid>
    </>
  )
}

export default ResultsGrid

//#E04485D
//#322885
//#FCE000
//#4CAA2B
//#AECF80

const Grid = styled.section`

  img {
    margin: 0 auto;
  }

  padding: 32px;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  grid-gap: 25px;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 32px 64px;
    grid-template: 1fr / Repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    padding: 32px 128px;
    grid-template: 1fr / Repeat(6, 1fr);
  }

  @media (min-width: 1240px) {
    grid-template: 1fr / Repeat(8, 1fr);
  }
`
