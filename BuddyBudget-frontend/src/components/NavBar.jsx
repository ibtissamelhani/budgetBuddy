import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Logout from "../pages/Auth/Logout";

const NavBar = () => {
  const authContext = useContext(AuthContext); 
  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome Back, to buddyBudget!
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
            {authContext.isAuthenticated
                ? `user Name : ${authContext.user?.name}`
                : "Sign In"}!              
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
          {authContext.isAuthenticated && (
              <Logout />
            )}

            {!authContext.isAuthenticated && (
              <>
          <Link
                to="/login"
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                Sign In
              </Link>
              <Link
                to="/register"
                className="inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
                >
                Sign up
              </Link> 
              </>
              )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
