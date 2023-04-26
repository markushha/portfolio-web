import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

function Navbar() {
  const [active, setActive] = useState("");
  const [burger, setBurger] = useState(false);

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
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
        <p className="clean-z">ALMATY</p>
      </div>

      <div className="adaptive-burger clean-z" onClick={handleBurger}>
        {!burger && (
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        )}
        {burger && (
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
      {burger && (
        <div className="adaptive-menu">
          <Link className="clean-z" href="/">
            <div className={`nav-menu-item`}>HOME</div>
          </Link>
          <Link className="clean-z" href="/projects">
            <div className={`nav-menu-item `}>PROJECTS</div>
          </Link>
          <Link className="clean-z" href="/socials">
            <div className={`nav-menu-item`}>SOCIALS</div>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
