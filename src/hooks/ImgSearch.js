import { useState, useEffect } from "react";
import axios from "axios";
import Utils from "../Utils.js";

function ImgSearch(keywords) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

      const subredditsPromise = axios.get(
        `https://www.reddit.com/subreddits/search.json?q=${keywords}`
      );

      subredditsPromise
        .then(subreddits =>
          subreddits?.data?.data?.children.map(
            subreddit => subreddit.data.display_name
          )
        )
        .then(subredditsNames => {
          if (subredditsNames && subredditsNames.length > 0)
            return Promise.all(
              subredditsNames.map(keyword =>
                axios.get(`https://www.reddit.com/r/${keyword}/top.json`)
              )
            );
        })
        .then(allResults => {
          console.log(allResults[0], allResults[1], allResults[2], allResults[3])
          if (allResults && allResults.length > 0) {
            return allResults.map(result =>
              Utils.normalizeImages(result?.data?.data?.children.slice(0, 50))
            );
          }
        })
        .then(results => {
          if (results && results.length > 0) setResults(results.flat(1));
          setLoading(false);
        }).catch(err => {
          console.log(err)

          setError(true)
        })
  }, [keywords]);

  return { loading, error, results };
}

export default ImgSearch;
