import React, { useState, useEffect } from "react";
import SearchBar from "@components/SearchBar";
import ResultsGrid from "@components/ResultsGrid";
import Utils from "../../Utils.js";
import axios from "axios";
import styled from "styled-components";

const SearchContainer = () => {
  const [results, setResults] = useState([]);
  const [keywords, setkeywords] = useState("");

  const getKeywords = e => {
    setkeywords(e);
  };

  useEffect(() => {
    const getImages = async () => {
      let subreddits = {};
      let subredditKeywords = [];

      try {
        subreddits = await axios.get(
          `https://www.reddit.com/subreddits/search.json?q=${keywords}`
        );

        if (subreddits?.data?.data?.children) {
          subredditKeywords = subreddits.data.data.children.map(
            subreddit => subreddit.data.display_name
          );
        }

        await Promise.all(
          subredditKeywords.map(keyword =>
            axios.get(`https://www.reddit.com/r/${keyword}/top.json`)
          )
        )
          .then(images =>
            images.map(image =>
              Utils.normalizeImages(image?.data?.data?.children.slice(0, 50))
            )
          )
          .then(results => setResults(results.flat(1)));
      } catch (err) {
        console.log(err);
        alert("Sorry, there has been an error");
      }
    };

    getImages();
  }, [keywords]);

  return (
    <Container>
      <SearchBar getKeywords={getKeywords} />
      <ResultsGrid results={results} />
    </Container>
  );
};

export default SearchContainer;

//#E04485D
//#322885
//#FCE000
//#4CAA2B
//#AECF80

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;
