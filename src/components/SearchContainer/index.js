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

console.log(ImgSearch(keywords))
  return (
    <Container>
      <SearchBar getKeywords={getKeywords} />
      {/* {results.map(image => <p>{image}</p>)} */}
      {/* {loading && <p>Loading...</p>} */}
      {/* {error && <p>Error</p>} */}
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
