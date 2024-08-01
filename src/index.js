import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './Views/Home/Home';
import AddPlant from './Views/AddPlant/AddPlant';
import PlantView from './Views/PlantView/PlantView';
import './index.css';
import toast ,{ Toaster}  from 'react-hot-toast';





const router = createBrowserRouter([
 { path: '/',
  element: <Home/>,
 }
,

 {
  path: '/add',
  element: <AddPlant/>,
 },

 {
  path: '*',
  element:<h1> 404 NOT FOUND </h1>,
 }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
    <Toaster/>
<RouterProvider router={router} /></div>);
