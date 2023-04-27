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
        <p className="footer-left-side clean-z ">MARK INGER | WEB-DEVELOPER</p>
      </Link>
      <p className="footer-right-side clean-z"><span className="additional-footer">ALL RIGHTS ARE RESERVED |</span> © 2024</p>
    </div>
  );
}
