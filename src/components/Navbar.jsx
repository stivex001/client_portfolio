/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/gabriel.webp";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary sm:px-16 px-6">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Gabriel <span className="sm:block hidden">| Elufidodo</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
