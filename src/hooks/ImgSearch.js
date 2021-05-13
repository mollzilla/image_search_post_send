import { useState, useEffect } from "react";
import axios from "axios";
import Utils from "../Utils.js";

function ImgSearch(keywords) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [resultsInfo, setResultsInfo] = useState({})

  const [after, setAfter] = useState([]);
  const [afterInfo, setAfterInfo] = useState({})

  useEffect(() => {
    setLoading(true);
    setError(false);

    // try {

    const results = axios.get(`https://www.reddit.com/r/${keywords}/top.json`);
    const after = axios.get(`https://www.reddit.com/r/${keywords}/top.json?count=25&after=t3_namh32`);

    results
      .then(results => {
        console.log(results);
        setResults(results.data.data);

        /* images of metadata: child.data.media_metadata (object keys, it's an object) per key => p[2] */


        /* URL: check if url is image, or if media_metadata is present */

        let info = results.data.data
        setResultsInfo({
          children: info.children.map(child => ({
            id: child.data.id,
            kind: child.kind,
            awards: child.data.total_awards_received,
            image: child.data.url,
            title: child.data.title
          })),
          dist: info.dist,
          count: info.children.length,
          after: info.after,
          before: info.before
        })
      }).catch(err => console.log(err));

      after
      .then(after => {
        setAfter(after.data.data);

        let info = after.data.data
        setAfterInfo({
          children: info.children.map(child => ({
            id: child.data.id,
            kind: child.kind,
            likes: child.data.likes,
            image: child.data.url,
            title: child.data.title
          })),
          dist: info.dist,
          count: info.children.length,
          after: info.after,
          before: info.before
        })
      }).catch(err => console.log(err));

      // .then(results => setResults(results.)
      // console.log(results)
      // const images = await Utils.normalizeImages(results?.data?.data?.children.slice(0, 50))

      //  if (images && images.length > 0) setResults(images.flat(1));
      


  }, [keywords]);

  return { results, resultsInfo, after, afterInfo };
}

export default ImgSearch;
