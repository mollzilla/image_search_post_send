import React, { useState, useEffect, useRef, useCallback } from "react";
import SearchBar from "@components/SearchBar";
import ResultsGrid from "@components/ResultsGrid";
import Utils from "../../Utils.js";
import axios from "axios";
import styled from "styled-components";
import ImgSearch from "@hooks/ImgSearch";

import ImgContextProvider from "@context/ImagesContext";
import { ImgContext } from "@context/ImagesContext";

const SearchContainer = () => {
  // const [keywords, setkeywords] = useState("");
  // // const [pagination, setPagination] = useState("");

  // const {
  //   after,
  //   images,
  //   pagination,
  //   incrementPagination,
  //   loading,
  //   error,
  //   children
  // } = ImgSearch(keywords);

  // const [loading, setLoading] = useState(false); const { loading, error, images, results, pagination, after, keywords } = useContext()
  // const [error, setError] = useState(false);
  // const [images, setImages] = useState([]);

  // const [results, setResults] = useState([]);

  // const [pagination, setPagination] = useState(1);

  // const [after, setAfter] = useState("");
  // const [err400Message, setErr400Message] = useState("");
  // const [elements, setElements] = useState([]);

  const [keywords, setkeywords] = useState("")

  const getKeywords = e => {
    setkeywords(e);
  };

  return (
    <ImgContextProvider>
      <Container>
        {/* <SearchBar getKeywords={getKeywords} /> */}
        <SearchBar />
        {/* <pre>{JSON.stringify(results?.children?.map(child => child.data), null, 4)}</pre> */}
        {/* <pre>{JSON.stringify(children, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(results, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(resultsInfo, null, 1)}</pre> */}
        {/* <pre>{JSON.stringify(after, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(afterInfo, null, 1)}</pre> */}
        {/* {loading && <p>Loading...</p>} */}
        {/* {error===403 &&  <p>It seems like some of the matched subreddits are forbidden...</p>} */}
        {/* {error && error!==403 &&  <p>Warning: some of the matching subreddits returned an error. This might be caused by a forbidden subreddit, or an inexistent one. </p>} */}
        <ResultsGrid
          // children={children}
          // results={images}
          // loading={loading}
          // after={after}
          // pagination={pagination}
          // incrementPagination={incrementPagination}
        />
      </Container>
    </ImgContextProvider>
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
