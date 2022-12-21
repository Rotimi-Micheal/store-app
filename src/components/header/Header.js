import { useContext, useState } from "react";
import { Icon } from "react-icons-kit";
import { shoppingBag } from "react-icons-kit/feather/shoppingBag";
import { alignJustify } from "react-icons-kit/feather/alignJustify";
import { x } from "react-icons-kit/feather/x";

import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <header className={toggle ? "header expanded" : "header"}>
      {isLoggedIn && !toggle && (
        <li>
          <NavLink
            onClick={toggleHandler}
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/store"
          >
            <Icon icon={shoppingBag} size={40} />
          </NavLink>
        </li>
      )}
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/auth"
              >
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink
                onClick={toggleHandler}
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/welcome"
              >
                welcome
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink
                onClick={toggleHandler}
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink
                onClick={toggleHandler}
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/store"
              >
                store
              </NavLink>
            </li>
          )}

          {isLoggedIn && (
            <li onClick={toggleHandler}>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
        <div className="toggle-icon" onClick={toggleHandler}>
          {toggle && <Icon icon={x} size={35} />}
          {!toggle && <Icon icon={alignJustify} size={35} />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
