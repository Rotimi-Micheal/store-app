import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/welcome">welcome</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/store">store</NavLink>
          </li>
          <li>
            <NavLink to="/auth">auth</NavLink>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
