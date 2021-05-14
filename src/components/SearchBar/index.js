import React, { useContext } from "react";
import { ImgContext } from "@context/ImagesContext";
import styled from "styled-components";

const SearchBar = () => {
  const { keywords, setKeywords, setRandom } = useContext(ImgContext);

  return (
    <SearchForm>
      <input
        type="text"
        placeholder="Find it!"
        onChange={e => setKeywords(e.target.value)}
        value={keywords}
      ></input>
      {/* <button onClick={e => e.preventDefault()}>Hit it!</button>{" "} */}
      <button
        onClick={e => {
          e.preventDefault();
          setRandom(true);
        }}
      >
        Random!
      </button>
      <span>
        For your convenience, NSFW images have been filtered.
      </span>
    </SearchForm>
  );
};

export default SearchBar;

//#E04485D
//#322885
//#FCE000
//#4CAA2B
//#AECF80

const SearchForm = styled.form`
  padding: 40px 1%;
  width: 100%;
  color: #fafafa;
  margin: 0 auto;

  span {
    display: block;
    margin-top: 32px;
    color: #e04485;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bold;
  }
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
