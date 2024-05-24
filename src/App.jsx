import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

export const API_URL =  "https://659935c9a20d3dc41cef6114.mockapi.io/Axios_Task_json";

function App() {

  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router}/>
  </>
}

export default App