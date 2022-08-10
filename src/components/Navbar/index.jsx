/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""
        }`}
    >
      <div className="container container-wide">
        <div className="container">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <Link href="https://drive.google.com/file/d/15-_yN-BVaxJwBw1dlwR670Vs-NG6c0VN/view?usp=sharing">
                <a className="nav-link">CV</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
