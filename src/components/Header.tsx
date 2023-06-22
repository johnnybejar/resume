import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <h2 className="name">john bejar</h2>
      <ul className="navbar">
        <li>
          <a>About Me</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
