import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Expenses from "../pages/Expenses";
import Logout from "../pages/Auth/Logout";
import Root from "../pages/Root";
import ProtectedRoute from "../utils/ProtectedRoute";


const RouterConfig = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        index : true,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/expences",
        element: <ProtectedRoute><Expenses /></ProtectedRoute>,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

export default RouterConfig;
