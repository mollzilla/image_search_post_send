import React from "react"
import renderer from "react-test-renderer"
import ResultsGrid from "../ResultsGrid/index.js"

describe("ResultsGrid", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ResultsGrid />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})