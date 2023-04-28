import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineMail
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer clean-z">
      <Link
        className="cursor-pointer clean-z"
        href="/"
      >
        <p className="footer-left-side clean-z">MARK INGER<span className="additional-footer">| WEB-DEVELOPER</span></p>
      </Link>

      <div className="footer-socials">
        <a href="mailto:mark@starfund.app"><AiOutlineMail className="footer-social-item" /></a>
        <a href="https://github.com/markushha"><AiOutlineGithub className="footer-social-item" /></a>
        <a href="https://www.linkedin.com/in/mark-inger-098541231/"><AiOutlineLinkedin className="footer-social-item" /></a>
      </div>

      <p className="footer-right-side clean-z"><span className="additional-footer">ALL RIGHTS ARE RESERVED |</span> © 2024</p>
    </div>
  );
}
