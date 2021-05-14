import React, { useState, useEffect } from "react";
import axios from "axios";
// import Utils from "../Utils.js";

export const ImgContext = React.createContext();

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

  useEffect(() => {
    setResults([]);
    setImages([]);
    setPagination(1);
    setAfter(null);
  }, [keywords]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const randomFetch = axios.get("https://random-word-api.herokuapp.com/word");

    let randomWord = "";
    
    if (random) {
      randomFetch.then(newRandom => {
        console.log(newRandom.data[0]);
        setKeywords(newRandom.data[0]);
        randomWord = newRandom.data[0];

        console.log(keywords, randomWord)
        setRandom(false);
      });
    }
    let afterParam = pagination > 1 && after !== null ? `?&after=${after}` : "";

    const string = `https://www.reddit.com/r/${random ? randomWord : keywords}/top.json${afterParam}`;
    const results = axios.get(string);

    results
      .then(newResults => {
        /* TODO : ONE RESULT BUG */
        if (results < 1 && after === null) {
          setLoading(false);
          return;
        }

        // const newImages = Utils.normalizeImages(newResults?.data?.data?.children);

        setAfter(newResults.data.data.after);

        console.log(newResults?.data?.data?.children?.map(child => child?.data?.preview));

        const newImages = newResults?.data?.data?.children
          .filter(child => child.data.over_18!==true)
          ?.map(child => child?.data?.url)
          .filter(url => url.match(/(i.redd|jpg|gif|imgur|jpeg|png)/) && url.match(/^(?!.*(default|self|nsfw|spoiler|gallery|v.|gifv|redgifs)).*$/)
          );

        setImages(prevImages => {
          return [...new Set([...prevImages, ...newImages])];
        });


        

        let info = [];
        info = newResults?.data?.data.children;
        setRandom(null);

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
        console.log(err);
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

// if (err.response) {
//   if (err.response.status === 403)
//     setErr400Message("It seems like this subreddit is private...");

//   if (err.response.status === 404)
//     setErr400Message("It seems like this subreddit doesn't exist...");

//   console.log(err.response.data);
//   console.log(err.response.status);
//   console.log(err.response.headers);
// }

// const [random, setRandom] = useState(null);

// axios.get("https://random-word-api.herokuapp.com/word")[0]

// al final de todo setearla a null -> no va a hacer falta porque la va a tapar otra
