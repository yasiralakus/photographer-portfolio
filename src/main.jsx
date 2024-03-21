import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Blog from './Pages/Blog.jsx'
import Contact from './Pages/Contact.jsx'

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },

            {
                path: '/about',
                element: <About />
            },

            {
                path: '/services',
                element: <Services />
            },

            {
                path: '/blog',
                element: <Blog />
            },

            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
