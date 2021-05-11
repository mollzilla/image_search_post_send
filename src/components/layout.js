import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import axios from "axios"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

/* REDUX STUFF BELOW */

const getImages = async () => {
  const results = await axios.get("https://www.reddit.com/r/puppy/top.json");
  console.log(results.data)
  return results.data;
}

getImages();

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

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <main style={{ backgroundColor: "#AECF8080" }}>{children}</main>
      <Footer />
      <pre>{JSON.stringify(getImages(), null, 2)}</pre>
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