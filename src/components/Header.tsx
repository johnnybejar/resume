import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <h2 className="name">john bejar</h2>
      <ul className="navbar">
        <li>
          <Link className="link" to="/">
            About Me
          </Link>
        </li>
        <li>
          <Link className="link" to="/Projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
