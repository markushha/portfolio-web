import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Props {}

function Navbar(props: Props) {
  const {} = props;
  const [active, setActive] = useState("home");

  const handleActive = (e: any) => {
    setActive(e.target.innerText.toLowerCase());
  };

  return (
    <nav>
      <div className="nav-title">
        <Link className="nav-title" href="/">MARK INGER</Link>
      </div>

      <div className="nav-menu">
        <Link href="/"><div onClick={(e) => handleActive(e)} className={`nav-menu-item ${active === "home" ? "active" : ""}`}>HOME</div></Link>
        <Link href="/"><div onClick={(e) => handleActive(e)} className={`nav-menu-item ${active === "contact" ? "active" : ""}`}>CONTACT</div></Link>
        <Link href="/projects"><div onClick={(e) => handleActive(e)} className={`nav-menu-item ${active === "projects" ? "active" : ""}`}>PROJECTS</div></Link>
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
