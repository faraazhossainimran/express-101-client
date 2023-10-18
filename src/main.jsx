import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostUser from './component/PostUser.jsx';
import DisplayUser from './component/DisplayUser.jsx';
import UpdateData from './component/UpdateData.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <PostUser></PostUser>,
  },
  {
    path: "/users",
    element: <DisplayUser></DisplayUser>,
    loader:() => fetch('http://localhost:5001/users')
  },
  {
    path: "/users/:id",
    element: <UpdateData></UpdateData>,
    loader:({params}) => fetch(`http://localhost:5001/users/${params.id}`)
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
