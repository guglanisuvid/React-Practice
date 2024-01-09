# Practicing ReactJs 🚀

# Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement / Hot Reloading - Automatic Refreshing
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimisation
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - to support older browsers
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Food Ordering App

- HEADER
- - Logo
- - Nav Items
- BODY
- - Search
- - Restaurant Container
- - - Restaurant Card
- - - Img
- - - Restaurant Name
- - - Cuisines
- - - Restaurant Rating
- - - Price for Two
- FOOTER
- - Copyright
- - Links
- - Address
- - Contact

# Types of Export / Import

- Default Export / Import

export default comp_name;
import comp_name from "comp_path";

- Named Export / Import (used to export / import multiple components)
  export const comp_name;
  import {comp_name} from "comp_path";

# React Hooks

- Normal JS Utility Functions
- useState() - used to generate state variables in react
  we need to import (named import) useState from react.
- useEffect()

# Failed to Fetch Error

- Please use a CORS Proxy Extension to fix the "Failed to Fetch" Error

# Routing in Web Apps

- Client Side Routing - a type of routing that allows users to navigate a website or application without reloading the entire page.
- Server Side Routing - requesting a new page from the server and providing it to the user every time a link is clicked.

# Redux Toolkit

- Install libraries (@reduxjs/toolkit and react-redux)
- Build our store
- Connect store to app
- create a slice
- modify data in store
- - action (click) on the ui layer
- - dispatch an action
- - reducer function
- - modify the data in the slice of the redux store
- fetching / reading data from redux store
- - slice (inside the redux store)
- - selector (subscribing to the store)
- - display / use the data

# Types of Testing

- Unit Testing - testing react components in isolation.
- Integration Testing - testing the integration of the component.
- End to End Testing (E to E Testing) - testing a react application as soon as the user lands on the website till the user leaves the website.

# Setting Up Testing in Our App

- install react testing library
- install jest
- install babel dependencies
- configure 'babel.config.js'
- configure parcel config file to disable default babel transpilation ('.parcelrc')
- configuring jest (npx jest --init)
- install jsdom library (npm install --save-dev jest-environment-jsdom)
- install @babel/preset-react - to make jsx work in test cases
- include @babel/preset-react inside babel.config.js (["@babel/preset-react", { runtime: "automatic" }])
- install @testing-library/jest-dom
