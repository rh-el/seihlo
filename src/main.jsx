import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root.jsx";

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
      <Root />
  );