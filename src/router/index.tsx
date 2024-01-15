import App from '../layout/app/App.tsx'
import Other from '../layout/other/Other.tsx'
import Home from '../pages/Home/index.tsx'
import About from '../pages/About/index.tsx'
import {  Empty } from 'antd';
import {
  createHashRouter,
  createBrowserRouter
} from "react-router-dom";
import { useState } from 'react';

const layout = true
export const router =  createHashRouter([
    {
      path: "/",
      element: layout ? <App /> : <Other />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/*",
          element: <Empty  description="没有匹配到页面"/>,
        }
      ]
    },
    
  ]);



  