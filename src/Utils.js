export default class Utils {
  static normalizeImages(resultsArr) {
    /* NOTICE there may be other exeptions not yet contemplated. For now, gallery images and images direct links contemplated */
    const imagesObject = resultsArr?.map(
      child => child?.data?.media_metadata
    )[0];

 /* in case of image thumbnails, elements like tags might be returned, or even empty images, therefore they have been filtered with a regexp */
    const imagesUrl = resultsArr
      ?.map(child => child?.data?.thumbnail)
      .filter(
        url => url.match(/^(?!.*(default|self|nsfw|spoiler)).*$/) && url !== ""
      );

    let metadataImages = [];
    if (imagesObject)
      metadataImages = Object.keys(imagesObject)
        .map(key => imagesObject[key].p[1].u)

    return [...imagesUrl, ...metadataImages];
  }
}
// (jpg)|(imgur)|(i.redd)
