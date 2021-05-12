import React, { useState, useEffect } from "react"
import SearchBar from "@components/SearchBar"
import ResultsGrid from "@components/ResultsGrid"
import Utils from "../../Utils.js"
import axios from "axios"
import styled from "styled-components"

const SearchContainer = () => {
  const [results, setResults] = useState([])
  const [keywords, setkeywords] = useState("")
  const [subreddits, setSubreddits] = useState("")
  const [mili, setMili] = useState([]);

  const getKeywords = e => {
    setkeywords(e)
  }

  useEffect(() => {
    const getImages = async () => {
      try {      

        const subreddits = await axios.get(
          `https://www.reddit.com/subreddits/search.json?q=${keywords}`
        )

        // const results = await axios.get(
        //   `https://www.reddit.com/r/${keywords}/top.json`
        // )

        const subredditKeywords = subreddits.data.data.children.map(subreddit=> subreddit.data.display_name);

        const images =  await Promise.all(subredditKeywords.map(keyword => axios.get(
          `https://www.reddit.com/r/${keyword}/top.json`
        )))
        .then(images => images.map(image => Utils.normalizeImages(image?.data?.data?.children)))
        .then(mili => setMili(mili.flat(1)))

        console.log(images)
        // const resultsArray = results?.data?.data?.children
        // setResults(Utils.normalizeImages(resultsArray))
        setSubreddits(subreddits.data.data.children.map(subreddit=> subreddit.data.display_name))
      } catch (err) {
        console.log(err)
      }
    }

    getImages()
  }, [keywords])

  return (
    <Container>
      <SearchBar getKeywords={getKeywords} />
      {/* <pre>{JSON.stringify(subreddits,null,2)}</pre> */}
      <pre>{JSON.stringify(mili,null,2)}</pre>

      <ResultsGrid results={mili} />
    </Container>
  )
}

export default SearchContainer

//#E04485D
//#322885
//#FCE000
//#4CAA2B
//#AECF80

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`
