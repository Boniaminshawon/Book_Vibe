import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home';
import ListedBooks from './Pages/ListedBooks';
import PagesRead from './Pages/PagesRead';
import BookDetails from './Pages/BookDetails';
import ReadBooks from './components/ReadBooks';
import Wishlist from './components/Wishlist';
import  { Toaster } from 'react-hot-toast';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('../public/books.json')
      },
      {
        path:'/:book_Id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('../public/books.json')
      },
      
      {
        path:'/listBook',
        element:<ListedBooks></ListedBooks>,
        children:[
          {
            index:true,
            element:<ReadBooks></ReadBooks>,
          },
          {
            path:'wishlist',
            element:<Wishlist></Wishlist>,
          }
        ]
      },
      {
        path:'/pagesRead',
        element:<PagesRead></PagesRead>,
        loader:()=>fetch('../public/books.json')
      }
      
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <Toaster />
  </React.StrictMode>,
)
