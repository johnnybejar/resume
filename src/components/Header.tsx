import { NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <h2 className="name">John Bejar</h2>
      <ul className="navbar">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "isPending" : isActive ? "isActive" : "isPending"
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Projects"
            className={({ isActive, isPending }) =>
              isPending ? "isPending" : isActive ? "isActive" : "isPending"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive, isPending }) =>
              isPending ? "isPending" : isActive ? "isActive" : "isPending"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
