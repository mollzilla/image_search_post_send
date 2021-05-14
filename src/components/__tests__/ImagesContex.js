import React from "react"
import renderer from "react-test-renderer"

import ImgContextProvider from "../../context/ImagesContext.js"
// src/context/ImagesContext.js

describe("ImagesContext", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ImgContextProvider />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})