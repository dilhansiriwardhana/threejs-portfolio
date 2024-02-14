import { NavLink } from "react-router-dom";

import useSound from "use-sound";

import click from "../assets/click.mp3";

import logo from "../assets/logs.png";

import "./Navbar.css";

const Navbar = () => {
  const soundUrl = click;

  const [play] = useSound(click);

  const handleClick = () => {
    play();
  };

  return (
    <header className="header w-full text-newWhite-500 ">
      <NavLink
        to="/"
        className=" h-10 rounded-lg  items-center justify-center flex font-bold "
      >
        <img className="headerimg" src={logo} alt="" />
      </NavLink>
      <div className=" ml-24 " />
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-newWhite-500" : "text-newWhite-200"
          }
          onClick={handleClick}
        >
          About
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-newWhite-500" : "text-newWhite-200"
          }
          onClick={handleClick}
        >
          Blog
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
