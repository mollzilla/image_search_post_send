import { element } from "prop-types";
import React, { useContext, useRef, useCallback } from "react";
import styled from "styled-components";
import { ImgContext } from "../../context/ImagesContext";

/**
 *
 * @returns A grid containing the results amount as it populates, the images fetched and, in case of inexistent or private subreddit, a message to the user
 */

const ResultsGrid = () => {
  const {
    loading,
    images,
    pagination,
    setPagination,
    after,
    err400Message,
    results,
    elements
  } = useContext(ImgContext);

  const observer = useRef();

  /**
   * Creates an intersection observer for the Ref of last item in the list. When intersected, and in case there is still data after this page, the pagination is updated thus triggering a new fetch
   */

  const lastImgRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(watched => {
        if (watched[0].isIntersecting && after !== null) {
          setPagination(pagination + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, after]
  );

  return (
    <>
      {/* <pre>{JSON.stringify(results, null, 1)}</pre> */}
      <h1 style={{ textAlign: "center" }}>
        {images && images.length > 0
          ? "Showing " + images.length + " results"
          : "No results to show"}
      </h1>
      {err400Message && <h2>{err400Message}</h2>}

      <Grid>

        {/* id: child.data.id,
            kind: child.kind,
            awards: child.data.total_awards_received,
            image: child.data.url,
            title: child.data.title */}

        {elements &&
          elements.map((element, i) =>
            elements.length === i + 1 ? (
              //<a href={element?.image}>
                <div
                  style={{
                    boxShadow: "5px 5px 30px #AAAAAA",
                    borderRadius: "5px",
                    overflow: "hidden"
                  }}
                >
                  <img
                    ref={lastImgRef}
                    src={element.image?.replace(/amp;/g, "")}
                    alt="search result"
                    key={i}
                  />
                  <p>{element.title || "No title"}</p>
                </div>
           //   </a>
            ) : (
            //  <a href={element?.image}>
                <div
                  style={{
                    overflow: "hidden",
                    width: "100%",
                    boxShadow: "5px 5px 30px #AAAAAA",
                    borderRadius: "5px"
                  }}
                >
                  <img
                    src={element.image?.replace(/amp;/g, "")}
                    alt="search result"
                    key={i}
                  />
                  <p>{element.title || "No title"}</p>
                </div>
            //  </a>
            )
          )}
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

  p {
    padding: 10px;

    margin-bottom: 0;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
