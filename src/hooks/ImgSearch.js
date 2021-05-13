import { useState, useEffect } from "react";
import axios from "axios";
import Utils from "../Utils.js";

function ImgSearch(keywords) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);

  const [results, setResults] = useState([]);
  const [resultsInfo, setResultsInfo] = useState({});

  const [pagination, setPagination] = useState(1);

  const [after, setAfter] = useState("");
  const [afterInfo, setAfterInfo] = useState({});
  const [children, setChildren] = useState([]);

  const incrementPagination = () => setPagination(pagination + 1);

  useEffect(() => {
    setResults([]);
    setImages([]);
    setPagination(1);
  }, [keywords]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setAfterInfo({});

    let afterParam = pagination > 1 && after !== null ? `?&after=${after}` : "";

    const string = `https://www.reddit.com/r/${keywords}/top.json${afterParam}`;
    console.log(string);

    const results = axios.get(string);
    //     let params = {
    //       after: "after",
    //       count: 60;

    // count
    // a positive integer (default: 0)

    // limit
    // the maximum number of items desired (default: 25, maximum: 100)
    //     }

    // `https://www.reddit.com/r/${keywords}/top.json?&count=25&after=t3_nb20r5`

    results
      .then(newResults => {
        // 403 == cannot get any data from subreddit
        // subreddit_type !== public (although 200 status) wont be able to query



        if (newResults.status !== 200) return;
        if (results<1 && after===null) {
          return;
        };


        // const newImages = Utils.normalizeImages(newResults?.data?.data?.children);
        console.log(newResults.data.data.after);

        setAfter(newResults.data.data.after);

        const newImages = newResults?.data?.data?.children?.map(
          child => child?.data?.url
        ).filter(url => url.match(/(i.redd|jpg|gif|imgur)/));
        
        setImages(prevImages => {
          return [...prevImages, ...newImages];
        });

        setResults(newResults);

        let info = [];
        info = newResults?.data?.data.children;

        setChildren(
          [...info].map(child => ({
            id: child.data.id,
            kind: child.kind,
            awards: child.data.total_awards_received,
            image: child.data.url,
            title: child.data.title
          }))
        );

        setLoading(false);
      })
      .catch(err => {
        setResultsInfo({});
        console.log(err);
        setLoading(false);
      });

  }, [keywords, pagination]);

  return {
    results,
    resultsInfo,
    after,
    images,
    pagination,
    incrementPagination,
    loading,
    error,
    children
  };
}

export default ImgSearch;
