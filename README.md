

# SQL Editor

![scr](https://user-images.githubusercontent.com/63285005/167256497-52e2285c-a8ce-43dc-aa27-d115a552ac51.jpg)

## π Demo

<a href="https://github.com/rishipurwar1/coding-space" target="blank">
<img src="https://img.shields.io/website?url=https://www.codingspace.codes&logo=github&style=flat-square" />
</a>

Here : [SQL Editor](https://sql-editor-azure.vercel.app/)

## π Features
π Users can get data from either runing query on SQL Editor or the Sidebar Menu. \
π The search bar allows users to look for specific information among many records. \
π By clicking the Table Header field title, users can sort data immediately. \
π Pagination allows users to jump to different pages. \
π The query runtime is displayed in milliseconds for users (ms). \
π With only one click, users may download data in CSV and JSON formats. 


## β Tech

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### β Page Load time

![scr2](https://user-images.githubusercontent.com/63285005/167260605-fe1979ce-09d0-4cef-82d9-990d2d3a392b.jpg)

π This website's page load time on desktop is between 0.2Β and 0.6 seconds.\
π I used these two tools to analyze the website's performance and load time: Lighthouse Chrome DevTools.

## π How I Optimized the page

π For a faster page load, i used code splitting with 'React.Lazy()' and 'Suspense' to lazy load the components and separate javaScript into numerous parts utilising Dynamic runtime Imports.\
π Optimized the render performance of functional components using 'React.Memo()'.\
π Used the Lighthouse DevTools Extension to identify performance issues and implement their recommendations.
##
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.