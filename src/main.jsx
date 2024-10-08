import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Contact from './pages/Contact.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import Week9 from './pages/Week9.jsx';
import Week10 from './pages/Week10.jsx';
import Week11 from './pages/Week11.jsx';
import Week15 from './pages/Week15.jsx';

const router = createBrowserRouter([
  {
    path: '/gsoc24-blog/',
    element: <App />
  },
  {
    path: '/gsoc24-blog/contact',
    element: <Contact />
  },
  {
    path: '/gsoc24-blog/resume',
    element: <Resume />
  },
  {
    path: '/gsoc24-blog/about',
    element: <AboutMe />
  },
  {
    path: '/gsoc24-blog/week1',
    element: <Week1 />
  },
  {
    path: '/gsoc24-blog/week2',
    element: <Week2 />
  },
  {
    path: '/gsoc24-blog/week3',
    element: <Week3 />
  },
  {
    path: '/gsoc24-blog/week4',
    element: <Week4 />
  },
  {
    path: '/gsoc24-blog/week5',
    element: <Week5 />
  },
  {
    path: '/gsoc24-blog/week6',
    element: <Week6 />
  },
  {
    path: '/gsoc24-blog/week7',
    element: <Week7 />
  },
  {
    path: '/gsoc24-blog/week9',
    element: <Week9 />
  },
  {
    path: '/gsoc24-blog/week10',
    element: <Week10 />
  },
  {
    path: '/gsoc24-blog/week11-12',
    element: <Week11 />
  },
  {
    path: '/gsoc24-blog/week15',
    element: <Week15 />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
