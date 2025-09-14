import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Projects from './pages/projects'
import About from './pages/about'
import Certification from './pages/certification'
import Details from "./pages/projects/details.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/certification",
    element: <Certification />,
  },
  {
    path: "/projects/details/attendify",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)