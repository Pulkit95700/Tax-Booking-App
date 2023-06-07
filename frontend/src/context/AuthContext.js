import React from "react";
import { createContext, useState } from "react";

const initialState = {
  isAuthenticated: false,
  role: null,
  name: null,
  setAuth: (boolean) => {},
};

export const AuthContext = createContext(
  initialState // default value
);

const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("accessToken")
  );

  const [role, setRole] = useState(localStorage.getItem("role"));
  const [name, setName] = useState(localStorage.getItem("name"));

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuth,
        role,
        name,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
