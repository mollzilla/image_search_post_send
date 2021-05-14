import React, { useContext, useRef, useCallback } from "react";
import styled from "styled-components";
import { ImgContext } from "@context/ImagesContext";

const ResultsGrid = () => {
  const {
    loading,
    error,
    images,
    pagination,
    setPagination,
    after,
    results,
    keywords,
    setKeywords,
    elements
  } = useContext(ImgContext);

  console.log(pagination);

  const observer = useRef();

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
      <pre>{JSON.stringify(results, null, 1)}</pre>

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


img {
    margin: 0 auto;
  }
  padding: 32px;
  display: grid;
  grid-template-rows: (minmax(1fr, 140px));
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    padding: 32px 64px;
    grid-template-columns: Repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    padding: 32px 64px;
    grid-template-columns: Repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    padding: 32px 64px;
    grid-template-columns: Repeat(4, 1fr);
  }

  @media (min-width: 1240px) {
    padding: 32px;
    grid-template-columns: Repeat(6, 1fr);
  }
`;
