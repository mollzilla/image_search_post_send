<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Mili's Athonet image search Challenge
</h1>

THIS IS A CONTINUATION OF THE ORIGINAL CHALLENGE, CONTINUED AFTER VIRTUAL DEADLINE OF FRIDAY 14TH 4.PM

I'm attempting to tackle all, or at least some of the unfinished but desired features, since original code was set back significantly by an attempt at add excesive complexity that eventually led to the necessity of starting over.

I want to deliver the best project, and even if it's post deadline and it won't be considered for my evaluation, I want to do it for my personal betterment.


*********************************************

This code is going to pose several challenges considering my tech stack and I'm ready and excited about embarking on the process.
At this point I'm going to enumerate the steps and elaborate once the code is more rounded up.

I am going to lay out the UI and then add the functionality since that is the process I was taught during my training.

First going to set layout, then apply styled components.

Styled components proved quite a challenge. Wanted to add global styles but that might be a bit too much for now.

I know I said I'd finish the style first, but decided to add functionality and take advantage of the boost of the complete task to renew my motivation for achieving the best looks.

Palette was chosen from a designer's blog but it's becoming apparent I might not have the best eye for colors...

Achieved style compatible with small mobiles, which are not required in today's standards but it's a plus considering the amount of old devices in circulation nowadays.

Hamburger will be revisited later as well.

Achieved accessiblity 100% by modifying the layout of the color palette.

While starting to implement Redux, thought that a more interesting option would have been injecting the fetched data to the graphql data layer via a custom plugin, but redux would be a good exerise of implementation. Could do both in the future?

Before setting up Redux, decided to test API. Proved a good idea since the data returned was intrincate. Had to use a regular expression to bypass a legacy encoded &.

Undecided on using thumbnail or url, since thumbnail won't display the gif, but image will have trouble adjusting to style.

Contemplated images coming from galleries

want to get rid of the ugly 404 message when there is not an existent subreddit

Used another filter to add subreddits according to key letters instead of keywords and therefore broaden the search, and thus preventing 404 for inexistent subreddits.

Considered axios CancelToken but decided against it to follow exactly the guideline of updating search as the user types.

Finally decided to use thumbnails due to the amount of results. Will calculate number of items and screen height to slice the thumbnail array accordingly

Decided to attempt to create my own lazy loading paginator

Previous attempt at pagination was overly complicated because of consideration of both screen height and screen width to decide offset and number of elements. Furthermore, it had its own calculation of viewport height offset instead of intersection observer. Researched some more.

Moved the fetch logic into custom hook and added loading and error variables.

Decided to make pagination depend on a fixed number of results and not a calculation of viewport height, width, position of scroll and number of cards displayed. Instead, results will paginate every n amount of results that deems convenient for all screen sizes.

Unfortunately, after carefully reading the briefing again, it became evident that the pagination was to be done by calling the API, and therefore the complex search including all matching subreddits became virtually impossible to handle. Therefore, modified the query to match only one subreddit.

Started over with the api. Studied it carefully and found the variables "after" and "before" that provide the data needed to create the offset. Also will need more data than the images, in order to use the entry id to identify the last picture in display and trigger the new search.

Followed a tutorial which familiarized me with the useCallback hook, which allowed me to use IntersectionObserver without the two event listeners that I set originally.

Soon realized scalability and readability would not be possible without a provider. Decided that would implement pagination successfully before moving data to provider in order to pinpoint the how and what to be stored and passed down.

Once pagination was understood, applied and finally debugged, added some masonry to the looks and started to think about the structure of a provider and additional data that may be added

After context provider was applied, code improved significantly

Another unexpected and unwelcomed setback, the fancy masonry grid was shifting items around and therefore effectively destroying the intersection observer functionality. Went over all the variables to make sure they were cleaned up before resorting to revise the styling.

Decided to add a Random Word funtionality. Upnfortunately many words chosen return NSFW results. Unsure about keeping feature.

Applied NSFW filter to prevent random words from returning unexpectedly explicit results. Might consider applying an optional filter ahead.

Time to attempt unit test.

Test seems to not like the gatsby aliases. For the purpose of delivering an MVP this issue will not be addressed as of now.

unit testing was implemented in components in a rudimentary manner. Future testings shoud include utils and more methods used along the code. Furthermore, methods should be isolated from its components.

Fortunately site performance was 90% or above (excluding performance affected by local server). Cropped image in images folder.


All in all, the site was challenging and a good experience to have. Time constraints generated by overly complicated initial aspirations influenced the scope of the final outcome, however, they will remain personal challenges that I will continue to tackle.

Thanks for the opportunity!