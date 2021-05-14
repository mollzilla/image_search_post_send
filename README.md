<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Mili's Athonet image search Challenge
</h1>

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

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**
  This is using the default bolier plate
2.  **Remove unused files and creating first alias**
  Run gatsby clean to clear cached images on static queries.
    

99.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

100.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-default)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

AUTO-GENERATED-CONTENT:END
