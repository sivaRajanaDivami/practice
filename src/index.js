import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Components/Error';
import Page1 from './Components/page1';
import Page2 from './Components/page2';
import Page from './Components/page';
import { Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/', element: <div>
      <App />
      <Outlet />
    </div>, errorElement: <ErrorPage />,
    children: [
      { path: '/page1', element: <Page1 /> },
      { path: '/page2', element: <Page2 /> },
      { path: '/page/:pageId', element: <Page /> },
    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
