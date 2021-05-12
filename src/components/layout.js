import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import normalizeImages from "@utils/normalizeImages";
import axios from "axios"
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

  const [results, setResults] = useState()

  useEffect(() => {

    const getImages = async () => {
      const results = await axios.get(
        "https://www.reddit.com/r/pepe/top.json"
      )

      const resultsArray = results?.data?.data?.children
      setResults(normalizeImages(resultsArray))
      
    }

    getImages();
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main style={{ backgroundColor: "#AECF8080" }}>{children}</main>
    

      <div>
        {results?.length > 0 &&
          results?.map(result => (
            <>
              <img src={result?.replace(/amp;/g, "")} style={{width: "150px"}} />
            </>
          ))}
      </div>


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
