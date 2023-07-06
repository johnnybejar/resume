import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";

function Header() {
  return (
    <div className="header">
      <div className="animation">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 1]} />
        </Canvas>
      </div>
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
