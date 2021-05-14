import React, { useContext, useRef, useCallback } from "react";
import styled from "styled-components";
import ImgContextProvider from "@context/ImagesContext";
import { ImgContext } from "@context/ImagesContext";

const ResultsGrid = () => {
  const {
    loading,
    error,
    results,
    images,
    pagination,
    setPagination,
    after,
    keywords,
    setKeywords,
    elements
  } = useContext(ImgContext);

  console.log(pagination, error, keywords, setKeywords);

  const observer = useRef();

  console.log();

  const lastImgRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(watched => {
        if (watched[0].isIntersecting) {
          console.log("found!");
          setPagination(pagination + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, after]
  );

  return (
    <>
      {/* <pre>{JSON.stringify(images, null, 1)}</pre> */}
      {/* <pre>{JSON.stringify(pagination, null, 1)}</pre> */}

      <h1 style={{ textAlign: "center" }}>
        {images && images.length > 0
          ? "Showing " + images.length + " results"
          : "No results to show"}
      </h1>

      <Grid>
        {images &&
          images.map((result, i) =>
            images.length === i + 1 ? (
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
  line-height: 0;

  column-count: 5;
  column-gap: 0px;

  img {
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
