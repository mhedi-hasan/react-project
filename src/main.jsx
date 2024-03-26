import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import MainLayouts from './layouts/MainLayouts.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
            {
                path: '/bookmarks',
                element: <Bookmarks></Bookmarks>,
            },
        ]
    },
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
)
