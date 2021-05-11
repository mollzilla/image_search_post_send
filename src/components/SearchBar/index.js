import * as React from "react"
import styled from "styled-components"


const SearchBar = () => (
    <SearchForm>
      <input type="text" placeholder="Find it!"></input>
      <button>Hit it!</button> {/* According to assignment not necessary but for UI purposes will include it */}
    </SearchForm>
)

//#E04485D
//#322885
//#FCE000
//#4CAA2B
//#AECF80

export default SearchBar

const SearchForm = styled.form`

  padding: 40px 2%;
  width: 300px;
  color: #FAFAFA;
  margin: 0 auto;

  button {
    background: #4CAA2B;
    border: none;
    padding: 5px 15px;
    border-radius: 0 10px 10px 0;
    color: #FAFAFA;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  input {
    border: 2px solid #4CAA2B;
    padding: 3px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 75%;
  }

  @media(min-width:768px) {
    width: 600px;
  }
`
