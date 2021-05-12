import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

/* REDUX STUFF BELOW */

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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main style={{ backgroundColor: "#AECF8080" }}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// import { createStore } from "redux"

// const initialStore = {
//   images: 0,
// }

// function reducer(state, action) {
//   console.log("hello from reducer")
//   console.log(state, action)

//   if (action.type === "SEARCH") {
//     console.log("search dispatched")
//   }
//   return state
// }

// const store = createStore(reducer, initialStore)

// console.log(store.getState())

// store.dispatch({ type: "SEARCH" })
