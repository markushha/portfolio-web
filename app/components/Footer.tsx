import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className="footer clean-z">
      <Link
        className="cursor-pointer clean-z"
        to="nav"
        spy={true}
        smooth={true}
        offset={50}
        duration={800}
      >
        <p className="left-side clean-z ">MARK INGER | WEB-DEVELOPER</p>
      </Link>
      <p className="right-side clean-z">ALL RIGHTS ARE RESERVED | © 2024</p>
    </div>
  );
}
