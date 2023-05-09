/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/gabriel.webp";
import { navLinks } from "../constants";
import { Close, Menu } from "@mui/icons-material";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuToggle, setMenuToggle] = useState(false);

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
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Gabriel &nbsp;
            <span className="sm:block hidden">| Elufidodo</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* MOBILE VIEW */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {menuToggle ? (
            <Close
              className="object-contain cursor-pointer"
              onClick={() => setMenuToggle(!menuToggle)}
            />
          ) : (
            <Menu
              className="object-contain cursor-pointer"
              onClick={() => setMenuToggle(!menuToggle)}
            />
          )}
          <div
            className={`${
              !menuToggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setMenuToggle(!menuToggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
