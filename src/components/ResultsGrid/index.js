import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ResultsGrid = ({ results }) => {
  const [offset, setOffset] = useState(0);
  const [viewportItems, setViewportItems] = useState()

  const getVh = () => {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    const vw = window.innerWidth;
    const position = document.documentElement.scrollTop;
    // console.log(vh, vw, position);


    /* 165 is grid item height */
    let rows = Math.ceil(vh/165)

    let rowItems;
    let viewportItems;

    /* switch deemed inadequate for variable comparison */
    if (vw > 1240) rowItems = 6;
    else if (vw > 1024) rowItems = 4;
    else if (vw > 768) rowItems = 3;
    else rowItems = 2;

    viewportItems = rowItems*rows;

    console.log(rowItems, viewportItems, position)

    return [viewportItems, position]
  };

  useEffect(() => {

    setViewportItems(getVh()[0])

    window.addEventListener("resize", getVh);
    window.addEventListener("scroll", getVh);

    return () => {
      window.removeEventListener("resize");
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        {results.length > 0
          ? "Showing " + results.length + " results"
          : "No results to show"}
      </h1>
      <Grid>
        {results.map(result => (
          <img src={result?.replace(/amp;/g, "")} alt="search result" />
        ))}
      </Grid>
    </>
  );
};

export default ResultsGrid;

//#E04485D
//#322885
//#FCE000
//#4CAA2B
//#AECF80

const Grid = styled.section`
  img {
    margin: 0 auto;
  }

  padding: 32px;
  display: grid;
  grid-template-rows: (minmax(1fr, 140px));
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 32px 64px;
    grid-template-columns: Repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    padding: 32px 64px;
    grid-template-columns: Repeat(4, 1fr);
  }


  @media (min-width: 1240px) {
    padding: 32px 128px;
    grid-template-columns: Repeat(6, 1fr);
  }

`;
