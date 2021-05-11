import * as React from "react"

const gridStyle = {
  display: "grid",
  gridTemplate: "1fr"
}


const ResultsGrid = () => (
  <>
    <h1>Showing 20 results</h1>
    <div style={gridStyle}>
      <img src="https://place-puppy.com/300x300" />
      <img src="https://place-puppy.com/300x300" />
      <img src="https://place-puppy.com/300x300" />
      <img src="https://place-puppy.com/300x300" />
      <img src="https://place-puppy.com/300x300" />
      <img src="https://place-puppy.com/300x300" />
    </div>
  </>
)

export default ResultsGrid
