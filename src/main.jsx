import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./components/errorPage.jsx";
import Info from "./components/Info.jsx";
import Sign from "./components/Sign.jsx";
import Home from "./components/Home.jsx";
import Root from "./routes/router.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/sign",
    element: <Sign />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);



// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "./routes/router.jsx";


// {/* <Root></Root>  */}



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);