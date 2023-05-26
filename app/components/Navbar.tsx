import Link from "next/link";
import { useState, useEffect } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { NavbarData } from "./NavbarData";
import { Switch } from "./switch";

import { useThemeStore } from "../../store";

function Navbar() {
  const [active, setActive] = useState("");
  const [burger, setBurger] = useState(false);
  const setTheme = useThemeStore((state) => state.setTheme);
  const theme = useThemeStore((state) => state.theme);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  const handleActive = (path: string) => {
    if (active !== path) {
      setActive(path);
    }
  };

  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <nav>
      <div className="adaptive-burger">
        <div className="burger" onClick={handleBurger}>
          <FaIcons.FaBars size={15} />
        </div>
        {burger && (
          <nav className="nav-menu-adaptive">
              <div className="burger clean-z">
                <AiIcons.AiOutlineClose
                  className="clean-z"
                  size={15}
                  onClick={handleBurger}
                />
              </div>
            {NavbarData.map((item, index) => (
              <Link className="clean-z flex" href={item.path} key={index}>
                {item.icon}
                <p>{item.title}</p>
              </Link>
            ))}
          </nav>
        )}
      </div>

      <div className="nav-title">
        <Link className="nav-title" href="/">
          MARK INGER
        </Link>
      </div>

      <div className="nav-menu">
        <Link className="clean-z" href="/">
          <div
            onClick={(e) => handleActive("/")}
            className={`nav-menu-item ${active === "/" ? "active" : ""}`}
          >
            HOME
          </div>
        </Link>
        <Link className="clean-z" href="/projects">
          <div
            onClick={(e) => handleActive("/projects")}
            className={`nav-menu-item ${
              active === "/projects" ? "active" : ""
            }`}
          >
            PROJECTS
          </div>
        </Link>
        <Link className="clean-z" href="/socials">
          <div
            onClick={(e) => handleActive("/socials")}
            className={`nav-menu-item ${active === "/socials" ? "active" : ""}`}
          >
            SOCIALS
          </div>
        </Link>
      </div>

      <div className="nav-location">
        <div className="mr-[5px] clean-z">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
        <p className="clean-z">ALMATY</p>
        <Switch onClick={toggleTheme} className="ml-4" />
      </div>
    </nav>
  );
}

export default Navbar;
