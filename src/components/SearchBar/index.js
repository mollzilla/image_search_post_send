import React, { useState } from "react";

import styled from "styled-components";

const SearchBar = ({ getKeywords }) => {
  const [keywords, setKeywords] = useState("");

  const onKeywordChange = e => {
    getKeywords(e.target.value);
    setKeywords(e.target.value);
  };

  return (
    <SearchForm>
      <input
        type="text"
        placeholder="Find it!"
        onChange={e => onKeywordChange(e)}
        value={keywords}
      ></input>
      <button> onClick={e => onKeywordChange} Hit it!</button>{" "}
      {/* According to assignment not necessary but for UI purposes will include it */}
    </SearchForm>
  );
};

//#E04485D
//#322885
//#FCE000
//#4CAA2B
//#AECF80

export default SearchBar;

const SearchForm = styled.form`
  padding: 40px 1%;
  width: 90%;
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
  }
  input {
    border: 2px solid #322885;
    padding: 3px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    width: 75%;
  }

  @media (min-width: 768px) {
    width: 600px;
  }
`;
