/* import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Main from './components/Main.jsx';
import Work from './components/Work.jsx';
import Project from './components/Project.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Sidenav from './components/Sidenav.jsx';

const routes = [
  {
    path: '/',
    element: (
      <>
        <Sidenav />
        <Main />
      </>
    ),
  },
  {
    path: '/work',
    element: 
    <>
      <Sidenav />
      <Work />
    </>
  },
  {
    path: '/project',
    element:
    <>
      <Sidenav />
      <Project />
    </>,
  },
  {
    path: '/resume',
    element: 
    <>
      <Sidenav />
      <Resume />
    </>,
  },
  {
    path: '/contact',
    element: 
    <>
      <Sidenav />
      <Contact />
    </>,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)