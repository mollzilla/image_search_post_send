import * as React from "react"
import styled from "styled-components"

const ResultsGrid = ({ results }) => {
  console.log(results)

  return (
    <>
      <h1>Showing 20 results</h1>
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

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;

  @media (min-width: 768px) {
    grid-template: 1fr / 1fr 1fr;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    grid-template: 1fr / 1fr 1fr 1fr;
    justify-content: center;
  }

  @media (min-width: 1240px) {
    grid-template: 1fr / 1fr 1fr 1fr 1fr;
    justify-content: center;
  }
`
