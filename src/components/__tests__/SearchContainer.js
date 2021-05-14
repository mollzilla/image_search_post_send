import React from "react"
import renderer from "react-test-renderer"

import SearchContainer from "../SearchContainer/index.js"

describe("SearchContainer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SearchContainer />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})