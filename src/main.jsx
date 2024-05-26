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

// Importing the weekly pages.
import Week1 from './pages/Week1.jsx';
import Week2 from './pages/Week2.jsx';
import Week3 from './pages/Week3.jsx';
import Week4 from './pages/Week4.jsx';
import Week5 from './pages/Week5.jsx';
import Week6 from './pages/Week6.jsx';
import Week7 from './pages/Week7.jsx';
import Week8 from './pages/Week8.jsx';
import Week9 from './pages/Week9.jsx';
import Week10 from './pages/Week10.jsx';
import Week11 from './pages/Week11.jsx';
import Week12 from './pages/Week12.jsx';
import Phase1 from './pages/Phase1.jsx';
import Phase2 from './pages/Phase2.jsx';
import Phase3 from './pages/Phase3.jsx';
import Phase4 from './pages/Phase4.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/resume",
    element: <Resume />
  },
  {
    path: "/about",
    element: <AboutMe />
  },
  {
    path: "phase1",
    element: <Phase1 />
  },
  {
    path: "/phase2",
    element: <Phase2 />
  },
  {
    path: "/phase3",
    element: <Phase3 />
  },
  {
    path: "/phase4",
    element: <Phase4 />
  },
  {
    path: "/week1",
    element: <Week1 />
  },
  {
    path: "/week2",
    element: <Week2 />
  },
  {
    path: "/week3",
    element: <Week3 />
  },
  {
    path: "/week4",
    element: <Week4 />
  },
  {
    path: "/week5",
    element: <Week5 />
  },
  {
    path: "/week6",
    element: <Week6 />
  },
  {
    path: "/week7",
    element: <Week7 />
  },
  {
    path: "/week8",
    element: <Week8 />
  },
  {
    path: "/week9",
    element: <Week9 />
  },
  {
    path: "/week10",
    element: <Week10 />
  },
  {
    path: "/week11",
    element: <Week11 />
  },
  {
    path: "/week12",
    element: <Week12 />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);