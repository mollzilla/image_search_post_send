export default class Utils {
  /**
   *
   * @param {resultsArray} resultsArr the raw array of data fetched from subreddit search, being images, galleries or other kind of posts
   * @returns A normalized array that captures the images of each posts either they are from a gallery or the URL. Thumbnail was also considered but discarded because of uncontrollable (because of the image sorce) image repetition
   */
  static normalizeImages(resultsArr) {
    const imagesThumbnail = [];
    let metadataImages = [];

    /* NOTICE there may be other exeptions not yet contemplated. For now, gallery images and images direct links contemplated */
    const imagesObject = resultsArr?.map(
      child => child?.data?.media_metadata
    )[0];

    /* in case of image thumbnails, elements like tags might be returned, or even empty images, therefore they have been filtered with a regexp */
    // const imagesThumbnail = resultsArr
    //   ?.map(child => child?.data?.thumbnail)
    //   .filter(
    //     url => url.match(/^(?!.*(default|self|nsfw|spoiler)).*$/) && url !== ""
    //   );

    /*  Thumbnail proposal discarded for now */

    const imagesUrl = resultsArr
      ?.map(child => child?.data?.url)
      .filter(
        url =>
          url.match(/^(?!.*(default|self|nsfw|spoiler|gallery|v.)).*$/) &&
          url !== ""
      );

      /* metadataimages are mapped to get the 320px resolution */
    if (imagesObject)
      metadataImages = Object.keys(imagesObject).map(
        key => imagesObject[key].p[1].u
      );

    return [...imagesUrl, ...metadataImages, ...imagesThumbnail];
  }

  static handleError(err) {

    if (err.response) {
      if (err.response.status === 403) {
        return("It seems like this subreddit is private...");
      }
      if (err.response.status === 404 || err.response.status === 451) {
        return("It seems like this subreddit doesn't exist...");
      }
    }
    return;
  }
}
