import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function Navbar() {
  const [active, setActive] = useState("");
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  const handleActive = (path: string) => {
    setActive(path);
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
            onClick={(e) => handleActive("home")}
            className={`nav-menu-item ${active === "/" ? "active" : ""}`}
          >
            HOME
          </div>
        </Link>
        <Link className="clean-z" href="/projects">
          <div
            onClick={(e) => handleActive("projects")}
            className={`nav-menu-item ${
              active === "/projects" ? "active" : ""
            }`}
          >
            PROJECTS
          </div>
        </Link>
        <Link className="clean-z" href="/socials">
          <div
            onClick={(e) => handleActive("socials")}
            className={`nav-menu-item ${active === "/socials" ? "active" : ""}`}
          >
            SOCIALS
          </div>
        </Link>
      </div>

      <div className="nav-location">
        <div className="mr-[5px] clean-z">
          <Image
            className="clean-z"
            src="/location.svg"
            alt="location"
            width={20}
            height={20}
          />
        </div>
        <p className="clean-z">ALMATY</p>
      </div>

      <div className="adaptive-burger clean-z" onClick={handleBurger}>
        
          {!burger && (
            <CSSTransition
              in={!burger}
              timeout={500}
              classNames={"fade"}
              unmountOnExit
            >
            <Image
              className="clean-z"
              src="/icons/hamburger.svg"
              alt="burger"
              width={24}
              height={24}
            />
            </CSSTransition>
          )}
          {burger && (
            <CSSTransition
            in={burger}
            timeout={500}
            classNames={"fade"}
            unmountOnExit
          >
            <Image
              className="clean-z"
              src="/icons/close-bar.svg"
              alt="burger"
              width={24}
              height={24}
            />
                        </CSSTransition>
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
