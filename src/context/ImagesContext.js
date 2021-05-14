import React, { useState, useEffect } from "react";
import axios from "axios";
import Utils from "../Utils.js";

export const ImgContext = React.createContext();

export default function ImgContextProvider({children}) {


  const [mili, setMili] = useState("hello from context")


  return (
    <ImgContext.Provider
      // value={
      //   results,
      //   after,
      //   images,
      //   pagination,
      //   incrementPagination,
      //   loading,
      //   error,
      //   elements,
      //   err400Message
      // }
      value={{mili}}
    >
      {children}
    </ImgContext.Provider>
  );
}















  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [images, setImages] = useState([]);

  // const [results, setResults] = useState([]);

  // const [pagination, setPagination] = useState(1);

  // const [after, setAfter] = useState("");
  // const [err400Message, setErr400Message] = useState();
  // const [elements, setElements] = useState([]);

  // const [keywords, setkeywords] = useState("")


  // const incrementPagination = () => setPagination(pagination + 1);

  // useEffect(() => {
  //   setResults([]);
  //   setImages([]);
  //   setPagination(1);
  // }, [keywords]);

  // useEffect(() => {
  //   setLoading(true);
  //   setError(false);

  //   let afterParam = pagination > 1 && after !== null ? `?&after=${after}` : "";

  //   const string = `https://www.reddit.com/r/${keywords}/top.json${afterParam}`;
  //   const results = axios.get(string);

  //   results
  //     .then(newResults => {
  //       /* TODO : ONE RESULT BUG */
  //       if (results < 1 && after === null) {
  //         return;
  //       }

  //       // const newImages = Utils.normalizeImages(newResults?.data?.data?.children);
  //       console.log(newResults.data.data.after);

  //       setAfter(newResults.data.data.after);

  //       const newImages = newResults?.data?.data?.children
  //         ?.map(child => child?.data?.url)
  //         .filter(url => url.match(/(i.redd|jpg|gif|imgur|jpeg|png)/));

  //       setImages(prevImages => {
  //         return [...new Set([...prevImages, ...newImages])];
  //       });

  //       setResults(newResults);

  //       let info = [];
  //       info = newResults?.data?.data.children;

  //       setElements(
  //         [...info].map(child => ({
  //           id: child.data.id,
  //           kind: child.kind,
  //           awards: child.data.total_awards_received,
  //           image: child.data.url,
  //           title: child.data.title
  //         }))
  //       );

  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       setLoading(false);

  //       // if (err.response) {
  //       //   if (err.response.status === 403)
  //       //     setErr400Message("It seems like this subreddit is private...");

  //       //   if (err.response.status === 404)
  //       //     setErr400Message("It seems like this subreddit doesn't exist...");

  //       //   console.log(err.response.data);
  //       //   console.log(err.response.status);
  //       //   console.log(err.response.headers);
  //       // }

  //       return;
  //     });
  // }, [keywords, pagination]);