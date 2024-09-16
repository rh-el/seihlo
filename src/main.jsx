import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";


// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Root />
//     },
//     {
//         path: 'app',
//         element: <App />
//     }
// ])


ReactDOM.createRoot(document.getElementById("root")).render(
    //   <RouterProvider router={router} />
    <App />
  );