import React, { useState, useContext } from "react";
import { ImgContext } from "@context/ImagesContext";
import styled from "styled-components";

const SearchBar = ({ getKeywords }) => {

  const { keywords, setKeywords } = useContext(ImgContext)

console.log(keywords, setKeywords)

  return (
    <SearchForm>
      <input
        type="text"
        placeholder="Find it!"
        onChange={e => setKeywords(e.target.value)}
        value={keywords}
      ></input>
      <button onClick={e => e.preventDefault()}>Hit it!</button>{" "}
      {/* According to assignment not necessary but for UI purposes will include it */}
    </SearchForm>
  );
};

export default SearchBar;

const SearchForm = styled.form`
  padding: 40px 1%;
  width: 100%;
  color: #fafafa;
  margin: 0 auto;

  button {
    background: #322885;
    border: none;
    padding: 5px 15px;
    border-radius: 0 10px 10px 0;
    color: #fafafa;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      width: 25%;
  }
  input {
    border: 2px solid #322885;
    padding: 3px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    width: 75%;
  }

  @media (min-width: 650px) {
    width: 600px;
  }
`;
