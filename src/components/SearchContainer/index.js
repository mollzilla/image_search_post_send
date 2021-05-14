import React from "react";
import SearchBar from "@components/SearchBar";
import ResultsGrid from "@components/ResultsGrid";
import styled from "styled-components";
import ImgContextProvider from "@context/ImagesContext";

const SearchContainer = () => {


  return (
    <ImgContextProvider>
      <Container>
        <SearchBar />
        <ResultsGrid />
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
  padding: 32px;

  @media (min-width: 600px) {
    padding: 32px 64px;
  }
  @media (min-width: 768px) {
    padding: 32px 64px;
  }
  @media (min-width: 1024px) {
    padding: 32px 64px;
  }

  @media (min-width: 1240px) {
    padding: 32px;
  }
`;
