import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#2d2d30";
      document.body.style.transition = "all 0.3s ease-in";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [mode]);
  return (
    <header id="mc" className="shadow-lg">
      <nav className="w-full mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/movielogo.jpg"
            alt="logo"
            className="h-12 w-12 mr-2"
          />
          <span className="text-xl font-bold hidden sm:flex text-vishwam ">
            MovieApp
          </span>
        </Link>
        <ul className="text-gray-600 hidden sm:flex items-center justify-evenly w-64">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-400 hover:text-white text-lg p-2 ${
                  isActive ? "bg-blue-600 text-white" : "text-vishwam"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li className="flex gap-1">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-400 hover:text-white p-2
              text-lg ${isActive ? "bg-blue-600 text-white" : "text-vishwam"}`
              }
            >
              Login
            </NavLink>
          </li>
          {/* Conditional rendering for mode icons */}
          <li className="mx-3 cursor-pointer flex gap-1" onClick={toggle}>
            {mode === "light" ? (
              <span className="material-symbols-outlined">dark_mode</span>
            ) : (
              <span className="material-symbols-outlined">light_mode</span>
            )}
          </li>
        </ul>

        {/* Hamburger menu icon for small screens */}
        <i className="fa-solid fa-bars block sm:hidden fa-xl"></i>
      </nav>
    </header>
  );
}

export default Header;
