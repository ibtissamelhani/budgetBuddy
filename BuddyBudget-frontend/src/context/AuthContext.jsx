import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};
  const storedToken = localStorage.getItem("token") || "";

  const [user, setUser] = useState(storedUser);
  const [token, setToken] = useState(storedToken);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize isAuthenticated to false

  useEffect(() => {
    // Update isAuthenticated based on the presence of a token
    setIsAuthenticated(!!token);
  }, [token]);

  useEffect(() => {
    if (!isAuthenticated) {
      // If not authenticated, clear user and token from state and localStorage
      setUser({});
      setToken("");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
