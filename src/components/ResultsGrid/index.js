import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const ResultsGrid = ({
  results,
  loading,
  after,
  incrementPagination,
  children
}) => {
  const [offset, setOffset] = useState(1);
  const [viewportItems, setViewportItems] = useState(1);
  const [vh, setVh] = useState(0);

  const [visibleResults, setVisibleResults] = useState(
    [...results].slice(0, 60)
  );

  const observer = useRef();

  const lastImgRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(watched => {
        if (watched[0].isIntersecting) {
          console.log("found!");
          incrementPagination();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, after]
  );

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        {results.length > 0
          ? "Showing " + results.length + " results"
          : "No results to show"}
      </h1>
      <Grid>
        {results.map((result, i) =>
          results.length === i + 1 ? (
            <img
              ref={lastImgRef}
              src={result?.replace(/amp;/g, "")}
              alt="search result"
              key={i}
            />
          ) : (
            <img
              src={result?.replace(/amp;/g, "")}
              alt="search result"
              key={i}
            />
          )
        )}

        {/* {children.map((child, i) =>
          children.length === i + 1 ? (
            <img
              ref={lastImgRef}
              src={child?.image.replace(/amp;/g, "")}
              alt="search result"
              key={i}
            />
          ) : (
            <div>
            <img
              src={child?.image.replace(/amp;/g, "")}
              alt="search result"
              key={i}
            />
              <span>{child.title}</span>
              <span>{child.awards>0 && child.awards}</span>
            </div>
          )
        )} */}
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
  /* Prevent vertical gaps */
  line-height: 0;

  /* -webkit-column-count: 5;
  -webkit-column-gap: 0px;
  -moz-column-count: 5;
  -moz-column-gap: 0px; */
  column-count: 5;
  column-gap: 0px;

  img {
    /* Just in case there are inline attributes */
    width: 100% !important;
    height: auto !important;
    margin: 0 !important;
  }

  @media (max-width: 1200px) {
    column-count: 4;
  }
  @media (max-width: 1000px) {
    column-count: 3;
  }
  @media (max-width: 800px) {
    column-count: 2;
  }
  @media (max-width: 400px) {
    column-count: 1;
  }
`;

/* img {
    margin: 0 auto;
  }

  padding: 32px;
  display: grid;
  grid-template-rows: (minmax(1fr, 140px));
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  justify-content: center;

  @media (min-width: 600px) {
    padding: 32px 64px;
    grid-template-columns: Repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    padding: 32px 64px;
    grid-template-columns: Repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    padding: 32px 64px;
    grid-template-columns: Repeat(6, 1fr);
  } */

/* 
  @media (min-width: 1240px) {
    padding: 32px 128px;
    grid-template-columns: Repeat(7, 1fr);
  } */

// const getVh = () => {
//   const vh = Math.max(
//     document.documentElement.clientHeight || 0,
//     window.innerHeight || 0
//   );

//   const vw = window.innerWidth;
//   const position = document.documentElement.scrollTop+window.innerHeight;

//   /* 165 is grid item height */
//   let rows = Math.ceil(vh/165)

//   let rowItems;
//   let viewportItems;

//   /* switch deemed inadequate for variable comparison */
//   if (vw > 1240) rowItems = 6;
//   else if (vw > 1024) rowItems = 4;
//   else if (vw > 768) rowItems = 3;
//   else rowItems = 2;

//   viewportItems = rowItems*rows;

//   // console.log(rowItems, viewportItems, position)

//   console.log(position-vh*offset)

//   if(position-vh*offset>rows)
//     setOffset(offset*viewportItems)

//   return [viewportItems, position]
// };

// useEffect(() => {

//   setViewportItems(getVh()[0])

//   window.addEventListener("resize", getVh);
//   window.addEventListener("scroll", getVh);

//   return () => {
//     window.removeEventListener("resize");
//     window.removeEventListener("scroll");
//   };
// }, []);
