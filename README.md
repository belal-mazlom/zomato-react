<h1 align="center">
    Zomato React Sample
</h1>

## About this sample

Sample react application to show restaurants and filter them using Zomato APIs

## Installation

Clone project:<br>
`git clone git@github.com:belal-mazlom/zomato-react.git`

Install Gatsby CLI:<br>
`npm install -g gatsby-cli`
or `yarn global add gatsby-cli`


<b>Note:</b> In case you get any issue during install gatsby, please refe offical page: https://www.gatsbyjs.com/docs/tutorial/part-zero/

Run inside root project directory:<br/>
`npm i` or `yarn`

To run dev server:<br>
`gatsby develop`

To build production version:<br>
`gatsby clean`<br>
`gatsby build`<br>

Result will be in `public` directory

To run production result in local server:<br>
`gatsby serve`

To run test inside root directory:<br>
`npm run test` or `yarn test`


## Stracture
Project using Gatsby stracture:

    ├── public // auto generated files and production
    ├── src
    |    └── assets
    |    |     ├─── fonts   // All custom fonts
    |    |     ├─── images  // Images used inside project
    |    |     └─── styles  // scss files optional
    |    ├── components // All compoents available here, please check components section for details
    |    ├── config
    |    |     ├─── settings.ts // All settings like Base url and API key
    |    |     ├─── store.ts  // Redux store configuration
    |    |     └─── wrap-app.js // Gatsby wrapper for redux provider
    |    ├── layouts
    |    |     ├─── default.tsx  // default layout used in pages
    |    |     ├─── header.tsx  // header component
    |    |     └─── seo.tsx // seo with main meta tags
    |    ├── pages
    |    |     ├─── 404.tsx  // 404 page
    |    |     └─── index.tsx // master page
    |    ├── utils
    |    |     ├─── redux // All files required to run redux inside project, please check redux section for details
    |    |     └─── defines.ts // general defined interfaces and types for Typescript
    ├── custom.d.ts  // Used to define custom types and module
    ├── gatsby-browser.js  // gatsby browser API
    ├── gatsby-config.js  // All gatsby config with plugins related
    ├── gatsby-ssr.js // gatsby ssr API
    ├── package.json
    └── README.md
    

## Project components

- checkbox: used for top header list
- preloader: appear during pull data from APIs
- rangeFilter: used for cost and rate range slider in top header
- restaurantDetails: main component to show restaurant details
- sideList: used to list restaurants
- styledComponents: all styled components used in project
- toggleTheme: used to switch dark/light theme
- topFilter: main component to show all filters


## Redus files in project

- actions.ts: all simple actions:
         setLoading, toggleCategory, toggleCuisine, setRating, setCost, selectRestaurant
- api.ts: all calls for zomato APIs
- middlewares.ts: contain UpdateRestaurants middleware used to update restaurants after change filters by actions
- rootReducer.ts: main reducer for redux
- slices.ts: list of functions used to update state after call actions
         setLoading, setCategories, toggleCategory, setCuisine, toggleCuisine, setRating, setCost, setMaxCost, setRestaurants, appendRestaurants, setStartPage, selectRestaurant
- types.ts: used to create types for redux action using `dacho reaction`


## Gatsby Details

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

2.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

3.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

4.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.


## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
