import React, { useState, useEffect } from "react";
import SearchBar from "@components/SearchBar";
import ResultsGrid from "@components/ResultsGrid";
import Utils from "../../Utils.js";
import axios from "axios";
import styled from "styled-components";
import ImgSearch from "@hooks/ImgSearch";


const SearchContainer = () => {
  const [keywords, setkeywords] = useState("");

  const getKeywords = e => {
    setkeywords(e);
  };

const {
  results,
  loading,
  error
} = ImgSearch(keywords);

  return (
    <Container>
      <SearchBar getKeywords={getKeywords} />
      {loading && <p>Loading...</p>}
      {/* {error===403 &&  <p>It seems like some of the matched subreddits are forbidden...</p>} */}
      {error && error!==403 &&  <p>Warning: some of the matching subreddits returned an error. This might be caused by a forbidden subreddit, or an inexistent one. </p>}
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
