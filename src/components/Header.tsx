import { NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <h2 className="name">john bejar</h2>
      <ul className="navbar">
        <li>
          <NavLink className="link" to="/">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
