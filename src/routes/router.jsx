import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import Info from '../components/Info';
import Sign from '../components/Sign';
import Home from '../components/Home';
import ErrorPage from "../components/errorPage.jsx";

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

export default router;