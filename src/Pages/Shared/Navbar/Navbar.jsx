import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#education">Education</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#1a0e2a] shadow-md sticky top-0 z-50 text-white font-semibold backdrop-blur-md bg-opacity-50">
      <div className="navbar-start">
        {/* Dropdown for small screens */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#1f1232] text-white rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl font-black tracking-wide">
          𝕻𝖔𝖗𝖙𝖋𝖔𝖑𝖎𝖔
        </Link>
      </div>

      {/* Horizontal Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Resume Button */}
      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/1I38jkMKagTRVnjf1RxYpfBLJpLRx4rc4/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline border-indigo-400 text-indigo-200 hover:bg-indigo-600 hover:text-white"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
