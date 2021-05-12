export default class Utils {
  static  normalizeImages(resultsArr) {

    
    /* NOTICE there may be other exeptions not yet contemplated. For now, gallery images and images direct links contemplated */
    const imagesObject = resultsArr?.map(child => child?.data?.media_metadata)[0];
    const imagesUrl = resultsArr?.map(child => child?.data?.thumbnail).filter(url => url.match(/^(?!.*(default|self|nsfw|spoiler)).*$/) && url!="");
  
    let metadataImages = [];
    if(imagesObject) metadataImages = (Object.keys(imagesObject).map(key => imagesObject[key].p[1].u)).filter(url => url.match(/^(?!.*(default|self|nsfw|spoiler)).*$/) && url!="");
  

    console.log(imagesUrl.slice(0,50).filter(string => string!=""))
    console.log(metadataImages.slice(0,50))
    return ([...imagesUrl, ...metadataImages])
  }
}
// (jpg)|(imgur)|(i.redd)