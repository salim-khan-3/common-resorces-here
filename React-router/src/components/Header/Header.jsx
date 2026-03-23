import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <h1>Hello header....</h1>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/mobile">Mobile</NavLink>
          </li>
          <li>
            <NavLink to="/laptop">Laptop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/users">users</NavLink>
          </li>
          <li>
            <NavLink to="/users2">users2</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
