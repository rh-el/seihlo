import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import Root from "./routes/root.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />
    },
    {
        path: 'app',
        element: <App />
    }
])


ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
  );