import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Expenses from "../pages/Expenses";
import Logout from "../pages/Auth/Logout";

const RouterConfig = createBrowserRouter([
    {
      element: <Home />,
      path:"/",
      children: 
      [
          {
                path:"/login",  
                element: <Login />
              },
              {
                path:"/register",
                element: <Register />  
              },
              {
                path:"/expences",  
                element: <Expenses />
              },
              {
                path:"/logout",  
                element: <Logout />
              },
          
      ]
    },
  ]);
  
  export default RouterConfig;