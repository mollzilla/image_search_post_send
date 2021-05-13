import React, { useState, useEffect, useRef, useCallback } from "react";
import SearchBar from "@components/SearchBar";
import ResultsGrid from "@components/ResultsGrid";
import Utils from "../../Utils.js";
import axios from "axios";
import styled from "styled-components";
import ImgSearch from "@hooks/ImgSearch";

const SearchContainer = () => {
  const [keywords, setkeywords] = useState("");
  const [pagination, setPagination] = useState(1);

  const scrollToLastEntry = useRef();

  const getKeywords = e => {
    setkeywords(e);
    setPagination(1);
  };

  const {
    results,
    resultsInfo,
    after,
    afterInfo,
    images,
    loading,
    error
  } = ImgSearch(keywords);



  return (
    <Container>
      <SearchBar getKeywords={getKeywords} />
      {/* <pre>{JSON.stringify(results?.children?.map(child => child.data), null, 4)}</pre> */}
      <pre>{JSON.stringify(results, null, 2)}</pre>
      {/* <pre>{JSON.stringify(resultsInfo, null, 1)}</pre> */}
      {/* <pre>{JSON.stringify(after, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(afterInfo, null, 1)}</pre> */}
      {loading && <p>Loading...</p>}
      {/* {error===403 &&  <p>It seems like some of the matched subreddits are forbidden...</p>} */}
      {/* {error && error!==403 &&  <p>Warning: some of the matching subreddits returned an error. This might be caused by a forbidden subreddit, or an inexistent one. </p>} */}


      <ResultsGrid results={images} loading={loading} />
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
