import React, { useCallback, useEffect, useState } from "react";

let logOutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, expirationTime) => {
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    logOutTimer = setTimeout(logoutHandler, expirationTime - Date.now());
    setToken(token);
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    clearTimeout(logOutTimer);
  }, []);

  useEffect(() => {
    if (token) {
      let timeLeft = localStorage.getItem("expirationTime") - Date.now();
      if (timeLeft < 6000) logoutHandler();
      logOutTimer = setTimeout(logoutHandler, timeLeft);
    }
  }, [token, logoutHandler]);

  const ContextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={ContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
