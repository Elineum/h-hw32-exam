import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const logoImgSrc = "/static/images/logo.png";

type HeaderProps = {
  userScrollY: number;
};

export const Header: React.FC<HeaderProps> = ({ userScrollY }) => {
  return (
    <header className={`page-head ${userScrollY > 70 ? "sticky-active" : ""} `}>
      <div className="page-head__wrap container">
        <div className="page-head__icon-wrap">
          <Link to="/" className="page-head__icon-link">
            <img src={logoImgSrc} alt="logo" />
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
          <div className="page-head__input-holder">
            <input type="text" className="page-head__control-input" />
            <a href="" className="page-head__search-icon">
              [i]
              <img src="" alt="" />
            </a>
          </div>
          <ul className="page-head__control-list">
            <li className="page-head__control-item">
              <a href="">
                [i]
                <img src="" alt="" />
              </a>
            </li>
            <li className="page-head__control-item">
              <a href="">
                [i]
                <img src="" alt="" />
              </a>
            </li>
            <li className="page-head__control-item">
              <a href="">
                [i]
                <img src="" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
