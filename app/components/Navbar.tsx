import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  const handleActive = (path: string) => {
    setActive(path);
  };

  return (
    <nav>
      <div className="nav-title">
        <Link className="nav-title" href="/">MARK INGER</Link>
      </div>

      <div className="nav-menu">
        <Link href="/"><div onClick={(e) => handleActive("home")} className={`nav-menu-item ${active === "/" ? "active" : ""}`}>HOME</div></Link>
        <Link href="/projects"><div onClick={(e) => handleActive("projects")} className={`nav-menu-item ${active === "/projects" ? "active" : ""}`}>PROJECTS</div></Link>
        <Link href="/hire"><div onClick={(e) => handleActive("hire")} className={`nav-menu-item ${active === "/hire" ? "active" : ""}`}>HIRE ME</div></Link>
      </div>

      <div className="nav-location">
        <div className="mr-[5px]">
          <Image src="/location.svg" alt="location" width={20} height={20}/>
        </div>
        <p>ALMATY</p>
      </div>
    </nav>
  );
}

export default Navbar;
