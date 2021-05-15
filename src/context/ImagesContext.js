import React, { useState, useEffect } from "react";
import axios from "axios";
// import Utils from "../Utils.js";

export const ImgContext = React.createContext();

/**
 * 
 * @param {children} param0 
 * @returns provider for all children with fetched data
 */
export default function ImgContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);

  const [results, setResults] = useState([]);

  const [pagination, setPagination] = useState(1);

  const [after, setAfter] = useState("");
  const [err400Message, setErr400Message] = useState("");
  const [elements, setElements] = useState([]);

  const [keywords, setKeywords] = useState("");

  const [random, setRandom] = useState(false);

  /**
   * Clean up variables whenever user triggers a new search with a new keyword
   */

  useEffect(() => {
    setResults([]);
    setImages([]);
    setPagination(1);
    setAfter(null);
  }, [keywords]);

  /**
   * DataFetcher from Reddit -or random word, in case of selected- returns data processed and filtered for images populating.
   */

  useEffect(() => {
    setLoading(true);
    setError(false);
    setErr400Message("")

    const randomFetch = axios.get("https://random-word-api.herokuapp.com/word");

    let randomWord = "";

    /* In case user has clicked on a random word, trigger a fetch and set a local scope variable with it */
    if (random) {
      randomFetch.then(newRandom => {
        setKeywords(newRandom.data[0]);
        randomWord = newRandom.data[0];

        setRandom(false);
      });
    }

    /* build the (optional) parameter string with the "after" variable from previous fetch */
    let afterParam = pagination > 1 && after !== null ? `?&after=${after}` : "";
    console.log(keywords);
    if (keywords === "") return;

    /*Query string to be fetched */

    const string = `https://www.reddit.com/r/${
      random ? randomWord : keywords
    }/top.json${afterParam}`;

    const results = axios.get(string);

    results
      .then(newResults => {

        /* Originally a normalized images function was contemplated to retrieve not only image urls, but also gallery images and even icons */
        // const newImages = Utils.normalizeImages(newResults?.data?.data?.children);

        setAfter(newResults?.data?.data?.after);

        /* URL is filtered to include only safe for all content and matched with images files. Not used extensions because of i.redd cases*/
        const newImages = newResults?.data?.data?.children
          .filter(child => child.data.over_18 !== true)
          ?.map(child => child?.data?.url)
          .filter(
            url =>
              url.match(/(i.redd|jpg|gif|imgur|jpeg|png)/) &&
              url.match(
                /^(?!.*(default|self|nsfw|spoiler|gallery|v.|gifv|redgifs)).*$/
              )
          );

        /* Set and spread to add to previous elements but avoid repeated ones */
        setImages(prevImages => {
          return [...new Set([...prevImages, ...newImages])];
        });


        /* info fetched was considered for future iterations */
        let info = [];
        info = newResults?.data?.data.children;
        setRandom(null);

        /* Future iteration: add further information to images displayed */
        setElements(
          [...info].map(child => ({
            id: child.data.id,
            kind: child.kind,
            awards: child.data.total_awards_received,
            image: child.data.url,
            title: child.data.title
          }))
        );

        setResults(newResults);

        setLoading(false);
      })
      .catch(err => {
        setRandom(null);

        /* In case of errors 403 or 404, clarify to user cases of inexistent or private subreddit (such as "/ultimateclub" subreddit) */
        if (err.response) {
          if (err.response.status === 403) {
            setErr400Message("It seems like this subreddit is private...");
          }

          if (err.response.status === 404) {
            setErr400Message("It seems like this subreddit doesn't exist...");
          }
        }

        setLoading(false);

        return;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywords, pagination, random]);

  return (
    <ImgContext.Provider
      value={{
        results,
        after,
        images,
        pagination,
        setPagination,
        loading,
        error,
        elements,
        err400Message,
        keywords,
        setKeywords,
        random,
        setRandom
      }}
    >
      {children}
    </ImgContext.Provider>
  );
}