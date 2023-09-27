import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import Home from './component/Home/Home';
import Root from './component/Root/Root';
import Donation from './component/Donation/Donation';
import Statistics from './component/Statistics/Statistics';
import DonationDetails from './component/DonationDetails/DonationDetails';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, 
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader:()=>fetch('../public/data.json')
      }, 
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }, 
      {
        path: '/details/:id',
        element: <DonationDetails></DonationDetails>,
        loader:()=>fetch('../public/data.json')
      }, 
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
