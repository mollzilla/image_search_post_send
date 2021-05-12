export default class Utils {
  static  normalizeImages(resultsArr) {

    
    /* NOTICE there may be other exeptions not yet contemplated. For now, gallery images and images direct links contemplated */
  
    const imagesObject = resultsArr?.map(child => child?.data?.media_metadata)[0];
    const imagesUrl = resultsArr?.map(child => child?.data?.url).filter(url => !url.includes("comments") && !url.includes("gallery") && !url.includes("v.redd") && !url.includes("youtu.be"));
  
    let metadataImages = [];
    if(imagesObject) metadataImages = (Object.keys(imagesObject).map(key => imagesObject[key].p[2].u)).filter(url => !url.includes("gallery"));
  
    return ([...imagesUrl, ...metadataImages])
  }
}
// (jpg)|(imgur)|(i.redd)