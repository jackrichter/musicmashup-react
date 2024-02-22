import LogoComponent from "./LogoComponent";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <LogoComponent />
      <ul className="nav-items">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
