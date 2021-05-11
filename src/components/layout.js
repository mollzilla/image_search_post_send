/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

import { createStore } from "redux"

const initialStore = {
  images: 0,
}

function reducer(state, action) {
  console.log("hello from reducer")
  console.log(state, action)

  if (action.type === "SEARCH") {
    console.log("search dispatched")
  }
  return state
}

const store = createStore(reducer, initialStore)

console.log(store.getState())

store.dispatch({ type: "SEARCH" })

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        results={store.getState()}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <main style={{ backgroundColor: "#AECF8080" }}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
