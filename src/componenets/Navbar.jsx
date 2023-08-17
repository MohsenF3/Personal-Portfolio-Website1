import { NavLink } from "react-router-dom";

import { links } from "../data";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className="nav">
        <div className={showNav ? "nav-menu show-nav" : "nav-menu"}>
          <ul className="nav-list">
            {links.map(({ name, icon, path }, index) => {
              return (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                    onClick={() => setShowNav(!showNav)}
                  >
                    {icon}
                    <h3 className="nav-name">{name}</h3>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={showNav ? "toggle-btn show-btn" : "toggle-btn"}
          onClick={() => setShowNav(!showNav)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
