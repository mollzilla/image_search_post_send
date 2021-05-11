import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const headerStyle = {
  backgroundColor: "#E0485D",
  color: "#000",
  display: "flex",
  flexDirection: "column",
}

const linkStyle = {
  color: "#FAFAFA",
  fontSize: "2rem",
  textDecoration: "none",
  lineHeight: "2rem",
}

const ulStyle = {
  listStyle: "none",
}

const Header = ({ siteTitle }) => (
  <header style={headerStyle}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={linkStyle}>
          {siteTitle}
        </Link>
      </h1>

      <nav style={{ width: "60%" }}>
        <ul style={ulStyle}>
          <li style={{ margin: 0 }}>
            <Link to="/search" style={linkStyle}>
              Search!
            </Link>
          </li>
          <li style={{ margin: 0 }}>
            <Link to="/404" style={linkStyle}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
