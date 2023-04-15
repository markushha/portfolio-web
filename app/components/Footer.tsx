import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className="footer">
      <Link className="cursor-pointer" to="nav" spy={true} smooth={true} offset={50} duration={800}><p className="left-side">MARK INGER | WEB-DEVELOPER</p></Link>
      <p className="right-side">ALL RIGHTS ARE RESERVED | © 2024</p>
    </div>
  )
}
