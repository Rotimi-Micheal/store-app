import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import "./Header.css";

const Header = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink to="/auth">Login</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/welcome">welcome</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/store">store</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
