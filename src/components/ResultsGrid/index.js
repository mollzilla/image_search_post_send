import * as React from "react"
import styled from "styled-components"

const ResultsGrid = () => (
  <>
    <h1>Showing 20 results</h1>
    <Grid >
      <img src="https://place-puppy.com/300x300" alt="search result" />
      <img src="https://place-puppy.com/300x300" alt="search result" />
      <img src="https://place-puppy.com/300x300" alt="search result" />
      <img src="https://place-puppy.com/300x300" alt="search result" />
      <img src="https://place-puppy.com/300x300" alt="search result" />
      <img src="https://place-puppy.com/300x300" alt="search result" />
    </Grid>
  </>
)

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

  @media(min-width: 768px) {
    grid-template: 1fr / 1fr 1fr;
    justify-content: center;
  }

  @media(min-width: 1024px) {
    grid-template: 1fr / 1fr 1fr 1fr;
    justify-content: center
  }

  @media(min-width: 1240px) {
    grid-template: 1fr / 1fr 1fr 1fr 1fr;
    justify-content: center
  }
`
