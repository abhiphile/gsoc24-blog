import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from './pages/Contact.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Resume from './pages/Resume.jsx';
import AboutMe from './pages/AboutMe.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path : "/contact",
    element : <Contact />
  },
  {
    path : "/resume",
    element : <Resume />
  },
  {
    path : "/about",
    element : <AboutMe/>
  }
]);
  
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);