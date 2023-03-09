import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Weather from './routes/Weather'
import Cep from './routes/Cep'
import Contact from './routes/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <Weather/>},
      {path: "/cep", element: <Cep/>},
      {path: "/contact", element: <Contact/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
