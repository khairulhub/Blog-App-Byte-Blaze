import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  { Toaster } from 'react-hot-toast';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { router } from './routes/route';







createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  <Toaster />
  </StrictMode>,
)
