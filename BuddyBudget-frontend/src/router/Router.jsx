import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

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
              }
          
      ]
    },
  ]);
  
  export default RouterConfig;