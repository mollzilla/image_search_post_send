
import * as React from "react"
import "./layout.css"

const Footer = () => (
  <footer
    style={{
      marginTop: `2rem`,
    }}
  >
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://github.com/mollzilla">Gatsby by Mollzilla.</a>
    <br />
    <a href="https://github.com/mollzilla">
      Find out why they call me Mollzilla.
    </a>
  </footer>
)

export default Footer
