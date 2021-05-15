import React, { useContext } from "react";
import { ImgContext } from "@context/ImagesContext";
import styled from "styled-components";

/**
 * 
 * @returns The form including the search bar that updates as user types, and a  button that triggers a random word search. Contains also a NSFW filter advice to be toggled in next iteration
 */

const SearchBar = () => {
  const { keywords, setKeywords, setRandom, nsfwFilter, setNsfwFilter } = useContext(ImgContext);

  return (
    <SearchForm>
      <input
        type="text"
        placeholder="Find it!"
        onChange={e => setKeywords(e.target.value)}
        value={keywords}
      ></input>
      <button onClick={() => setRandom(true)}>Random!</button>
      {!nsfwFilter && <span>Warning! Random words might return unexpected NSFW images.</span>}
      <button onClick={() => setNsfwFilter(!nsfwFilter)}>{nsfwFilter===true ? "Disable NSFW filter" : "Enable NSFW filter"}</button>
    </SearchForm>
  );
};

export default SearchBar;

//#E04485D
//#322885
//#FCE000
//#4CAA2B
//#AECF80

const SearchForm = styled.div`
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
    text-align: center;
  }
  button {
    cursor: pointer;
    display: block;
    margin: 25px auto;
    justify-self: center;
    background: #322885;
    border: none;
    padding: 15px 25px;
    outline: none;
    border-radius: 25px;
    color: #fafafa;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  input {
    border: 2px solid #322885;
    padding: 3px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    width: 100%;
  }

  @media (min-width: 650px) {
    width: 600px;
  }
`;
