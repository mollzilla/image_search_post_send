import React from "react"
import renderer from "react-test-renderer"

import SearchBar from "../SearchBar/index.js"

describe("SearchBar", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SearchBar />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})