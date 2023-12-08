import { NavLink } from "react-router-dom";

import useSound from "use-sound";

import click from "../assets/click.mp3";

import logo from "../assets/favicon.ico";

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
        className="w-10 h-10 rounded-lg  items-center justify-center flex font-bold "
      >
        <img src={logo} alt="" />
      </NavLink>

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
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-newWhite-500" : "text-newWhite-200"
          }
          onClick={handleClick}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
