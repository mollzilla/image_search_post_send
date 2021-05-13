import { useState, useEffect } from "react";
import axios from "axios";
import Utils from "../Utils.js";

function ImgSearch(keywords) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);

  const [results, setResults] = useState([]);
  const [resultsInfo, setResultsInfo] = useState({});

  const [offset, setOffset] = useState("");

  const [after, setAfter] = useState("");
  const [afterInfo, setAfterInfo] = useState({});

  useEffect(() => {
    setResults([]);
    setImages([]);
  }, [keywords]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setAfter([]);
    setAfterInfo({});

    // try {

    const results = axios.get(`https://www.reddit.com/r/${keywords}/top.json`);

    //     let params = {
    //       after: "after",
    //       count: 60;

    // count
    // a positive integer (default: 0)

    // limit
    // the maximum number of items desired (default: 25, maximum: 100)
    //     }

    /* CLEANUP SEARCH! */
    // if(results?.data?.data?.children[0].data.id !== )

    const after = axios.get(
      `https://www.reddit.com/r/${keywords}/top.json?&count=25&after=t3_nb20r5`
    );

    results
      .then(results => {
        console.log(results);

        const newImages = Utils.normalizeImages(results?.data?.data?.children);
        console.log(newImages);

        /* KEEP AN EYE ON THIS, still need to do array cleanup in case of new search */
        setImages(prevImages => {
          return [...prevImages, ...newImages];
        });

        console.log(images);
        results.last =
          results?.data?.data?.children[
            results?.data?.data?.children?.length - 1
          ].data.id;

        results.first = results?.data?.data?.children[0].data.id;

        console.log(results.last);
        delete results?.data?.data?.children;
        setResults(results);

        setOffset(results.data.data.after);

        /* URL: check if url is image, or if media_metadata is present */

        // let info = results.data.data;
        // setResultsInfo({
        //   children: info.children.map(child => ({
        //     id: child.data.id,
        //     kind: child.kind,
        //     awards: child.data.total_awards_received,
        //     image: child.data.url,
        //     title: child.data.title
        //   })),
        //   dist: info.dist,
        //   count: info.children.length,
        //   after: info.after,
        //   before: info.before
        // });

        setLoading(false);
      })
      .catch(err => {
        // setResults([]);
        setResultsInfo({});
        console.log(err);
        setLoading(false);
      });

    after
      .then(after => {
        //   setAfter(after.data.data);

        //   let info = after.data.data
        //   setAfterInfo({
        //     children: info.children.map(child => ({
        //       id: child.data.id,
        //       kind: child.kind,
        //       likes: child.data.likes,
        //       image: child.data.url,
        //       title: child.data.title
        //     })),
        //     dist: info.dist,
        //     count: info.children.length,
        //     after: info.after,
        //     before: info.before
        //   })
        after.first = after?.data?.data?.children[0].data?.id;

        delete after.data.data.children;

        setAfter(after);
      })
      .catch(err => console.log(err));

    // .then(results => setResults(results.)
    // console.log(results)
    // const images = await Utils.normalizeImages(results?.data?.data?.children.slice(0, 50))

    //  if (images && images.length > 0) setResults(images.flat(1));
  }, [keywords]);

  return { results, resultsInfo, after, afterInfo, images, loading, error };
}

export default ImgSearch;
