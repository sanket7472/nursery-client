import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './Views/Home/Home';
import PlantView from './Views/PlantView/PlantView';
import './index.css';






const router = createBrowserRouter([
 { path: '/',
  element: <Home/>,
 }
,

 {
  path: '/plantview',
  element: <PlantView/>,
 },

 {
  path: '*',
  element:<h1> 404 NOT FOUND </h1>,
 }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router} />);
