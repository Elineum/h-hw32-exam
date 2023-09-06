import { Link, NavLink } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import "./Header.scss";

type HeaderProps = {
  userScrollY: number;
};

export const Header: React.FC<HeaderProps> = ({ userScrollY }) => {
  return (
    <header className={`page-head ${userScrollY > 70 ? "sticky-active" : ""} `}>
      <div className="page-head__icon-wrap">
        <Link to="/" className="page-head__icon-link">
          <img src={logoImage} alt="logo" />
        </Link>
      </div>
      <nav className="page-head__nav">
        <ul className="page-head__nav-list">
          <li className="page-head__nav-item">
            <NavLink to="/" className="page-head__nav-link">
              Home
            </NavLink>
          </li>
          <li className="page-head__nav-item">
            <NavLink to="/constructor" className="page-head__nav-link">
              Constructor
            </NavLink>
          </li>
          <li className="page-head__nav-item">
            <NavLink to="/about-us" className="page-head__nav-link">
              About Us
            </NavLink>
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
