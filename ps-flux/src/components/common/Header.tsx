import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const activeStyle = {
    color: "orange",
  };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact={true}>
        Home
      </NavLink>{" "}
      |
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>{" "}
      |
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
    </nav>
  );
}

export default Header;
