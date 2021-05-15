import React, { useState, useEffect } from "react";
import axios from "axios";
import Utils from "../Utils";
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

  const [keywords, setKeywords] = useState("");
  const [random, setRandom] = useState(false);

  const [images, setImages] = useState([]);
  const [elements, setElements] = useState([]);

  const [results, setResults] = useState([]);
  const [pagination, setPagination] = useState(1);

  const [after, setAfter] = useState("");
  const [err400Message, setErr400Message] = useState("");

  const [nsfwFilter, setNsfwFilter] = useState(true);

  /**
   * Clean up variables whenever user triggers a new search with a new keyword
   */

  useEffect(() => {
    setResults([]);
    setImages([]);
    setElements([]);
    setPagination(1);
    setAfter(null);
    setRandom(false);
    setErr400Message("");
  }, [keywords]);

  /**
   * DataFetcher from Reddit -or random word, in case of selected- returns data processed and filtered for images populating.
   */

  useEffect(() => {
    setLoading(true);
    setError(false);

    let randomWord = "";

    /* In case user has clicked on a random word, trigger a fetch and set a local scope variable with it */

    if (keywords === "" && randomWord === "") return;

    /* build the (optional) parameter string with the "after" variable from previous fetch */
    let afterParam = pagination > 1 && after !== null ? `?&after=${after}` : "";

    const subreddit = axios.get(
      `https://www.reddit.com/subreddits/search.json?q=${keywords}`
    );

    const queryString = `https://www.reddit.com/r/${
      random ? randomWord : keywords
    }/top.json${afterParam}`;

    if (random) {
      return axios
        .get(
          "https://secret-ocean-49799.herokuapp.com/https://random-word-api.herokuapp.com/word"
        )
        .then(newRandom => {
          setKeywords(newRandom.data[0]);
          randomWord = newRandom.data[0];
        })
        .catch(err => {
          console.log(err);
        });
    }

    subreddit
      // .then(subreddits =>
      //   subreddits.data.data.children.filter(
      //     child => child.data.display_name === keywords
      //   )
      // )
      .then(subreddits => {
        console.log(subreddits.data.data.children.length);
        if (subreddits.data.data.children.length === 0) {
          setError(true);
          console.log(94);
          setErr400Message("It seems like this subreddit doesn't exist...");
          throw new Error("It seems like this subreddit doesn't exist...");
        } else {
          console.log(subreddits);
        }
        return subreddits;
      })
      .then(() => axios.get(queryString))
      .then(newResults => {
        /* Originally a normalized images function was contemplated to retrieve not only image urls, but also gallery images and even icons */
        // const newImages = Utils.normalizeImages(newResults?.data?.data?.children);
        console.log(newResults)
        setErr400Message("");
        setAfter(newResults?.data?.data?.after);

        let info = newResults?.data?.data.children;
        setRandom(null);

        let newElements = [...info]
          .filter(child => child.data.over_18 !== true)
          .filter(
            /* URL is filtered to include only safe for all content and matched with images files. Not used extensions because of i.redd cases*/
            child =>
              child.data.url.match(/(i.redd|jpg|gif|imgur|jpeg|png)/) &&
              child.data.url.match(
                /^(?!.*(default|self|nsfw|spoiler|gallery|v.|gifv|redgifs)).*$/
              )
          ).filter(child => {
            if(nsfwFilter)
              return child.data.url.match(/^(?!.*(nsfw)).*$/);
            else
              return child;
            })
          .map(child => ({
            id: child.data.id,
            kind: child.kind,
            awards: child.data.total_awards_received,
            image: child.data.url,
            title: child.data.title
          }));

        setElements(prevElements => {
          return [...new Set([...prevElements, ...newElements])];
        });

        setResults(newResults);

        setLoading(false);
      })

      .catch(err => {
        setRandom("");
        setLoading(false);
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
        setRandom,
        nsfwFilter,
        setNsfwFilter
      }}
    >
      {children}
    </ImgContext.Provider>
  );
}
