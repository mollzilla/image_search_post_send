import React from "react"
import { createGlobalStyle } from "styled-components"

// provider

const GlobalStyle = createGlobalStyle`

  :root {
    --blue: #1e90ff;
    --white: #ffffff;
  }

  body {
    background-color: yellow;
  }
  
  h1,  h2, h3, h4, h5, h6 {
    color: var(--blue);//"#FAFAFA";
    color: red;
  }
  header {
    background-image: linear-gradient(to right, red , yellow);
  }
`
export const wrapRootELement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}
