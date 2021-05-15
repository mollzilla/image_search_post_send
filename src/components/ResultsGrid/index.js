import { element } from "prop-types";
import React, { useContext, useRef, useCallback } from "react";
import styled from "styled-components";
import { ImgContext } from "../../context/ImagesContext";

import star from "@images/star.png";

/**
 *
 * @returns A grid containing the results amount as it populates, the images fetched and, in case of inexistent or private subreddit, a message to the user
 */

const ResultsGrid = () => {
  const {
    loading,
    pagination,
    setPagination,
    after,
    err400Message,
    elements,
    addToStore,
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
        {elements && elements.length > 0
          ? "Showing " + elements.length + " results"
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
              <div className="result">
                <a
                  id={element.id}
                  href={element?.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
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
                </a>
                <button onClick={() => console.log("click!")} className="add-favorites">Add to favorites</button>
              </div>
            ) : (
              <div className="result">
                <a
                  id={element.id}
                  href={element?.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
                      width: "100%"
                    }}
                  >
                    <img
                      src={element.image?.replace(/amp;/g, "")}
                      alt="search result"
                      key={i}
                    />
                    <p>{element.title || "No title"}</p>
                  </div>
                  {(element.awards && (
                    <div className="awards-star">
                      <img src={star} alt="awards star" />
                      <span>Awarded!</span>
                    </div>
                  )) ||
                    ""}
                </a>
                <button onClick={() => addToStore(element.image)} className="add-favorites">Add to favorites</button>
              </div>
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  .result {
    @keyframes pop {
      0% {
        box-shadow: 5px 5px 10px #bcbcbc;
      }
      75% {
        box-shadow: 0px 0px 25px 10px #aaa;
      }
      100% {
        box-shadow: 5px 5px 10px #bcbcbc;
      }
    }
  }

  .result {
    overflow: hidden;
    border-radius: 25px;
    box-shadow: 5px 5px 30px #aaaaaa;
  }

  .result:hover {
    animation: pop 0.6s;
  }

  a {
    position: relative;
    text-decoration: none;
    color: #303030;
  }
  img {
    margin: 0 auto;
  }

  p {
    padding: 10px;

    margin-bottom: 0;
    text-align: center;
  }

  .awards-star {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
  }

  .awards-star img {
    height: 30px;
  }

  .awards-star span {
    font-size: 14px;
    display: block;
    margin: 0 auto;
    color: #fff;
    -webkit-text-stroke: 1px #000; /* width and color */
    font-weight: bolder;
  }

  @keyframes bouncy {
    40% {
      transform: scale(1.1);
      opacity: 0.6;
    }
    60% {
      transform: scale(1.025);
      opacity: 0.8;
    }
    85% {
      transform: scale(1.05);
      opacity: 0.9;
    }
    94% {
      transform: scale(1.025);
      opacity: 1;
    }
  }

  .add-favorites {
    cursor: pointer;
    display: block;
    margin: 10px auto;
    justify-self: center;
    background: #322885;
    border: none;
    padding: 5px 10px;
    outline: none;
    border-radius: 110px;
    color: #fafafa;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .add-favorites:hover {
    animation: bouncy 0.4s;
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
