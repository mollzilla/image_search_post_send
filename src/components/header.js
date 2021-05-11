import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <h1 style={{ margin: 0 }}>
      <Link to="/">{siteTitle}</Link>
    </h1>

    <nav style={{ width: "60%" }}>
      <ul>
        <li style={{ margin: 0 }}>
          <Link to="/search">Search!</Link>
        </li>
        <li style={{ margin: 0 }}>
          <Link to="/404">About</Link>
        </li>
      </ul>
    </nav>
  </HeaderStyle>
)

export default Header

const HeaderStyle = styled.header`
  padding: 10px;
  background: #322885;

  ul {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
  }
  a {
    text-decoration: none;
    color: #fafafa;
    font-size: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
  }
  li {
    list-style: none;
  }
`
