import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="header">
        <li className="headerlist">
          <NavLink exact to="/">
            HOME
          </NavLink>
        </li>
        <li className="headerlist">
          <NavLink to="/about">ABOUT ME</NavLink>
        </li>
        <li className="headerlist">
          <NavLink to="/education">EDUCATION</NavLink>
        </li>
        <li className="headerlist">
          <NavLink to="/skills">SKILLS</NavLink>
        </li>
        <li className="headerlist">
          <NavLink to="/experience">EXPERIENCE</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
