import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import Donation from './component/Donation/Donation';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import DonationDetails from './component/DonationDetails/DonationDetails';
import Statistics from './component/Statistics/Statistics';




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
        loader:()=>fetch('/data.json')
      }, 
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader:()=>fetch('/data.json')
      }, 
      {
        path: '/donation/:id',
        element: <DonationDetails></DonationDetails>,
        loader:()=>fetch('/data.json')
      }, 
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
