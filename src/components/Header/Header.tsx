import { Link, NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="page-head">
      <div className="page-head__icon-wrap">
        <Link to="/">
          <img src={logoImage} alt="logo" />
        </Link>
      </div>
      <nav className="page-head__nav">
        <ul className="page-head__nav-list">
          <li className="page-head__nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="page-head__nav-item">
            <NavLink to="/constructor">Constructor</NavLink>
          </li>
          <li className="page-head__nav-item">
            <NavLink to="/about-us">About Us</NavLink>
          </li>
        </ul>
      </nav>
      <div className="page-head__control-panel">
        <input type="text" className="page-head__control-input" />
        <ul className="page-head__control-list">
          <li className="page-head__control-item">
            <a href="">
              <img src="" alt="" />
            </a>
          </li>
          <li className="page-head__control-item">
            <a href="">
              <img src="" alt="" />
            </a>
          </li>
          <li className="page-head__control-item">
            <a href="">
              <img src="" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
