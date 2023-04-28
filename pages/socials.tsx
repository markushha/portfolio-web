import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import Meta from "@/app/utils/Meta";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";

import Link from "next/link";

interface Props {}

function Socials(props: Props) {
  const {} = props;

  return (
    <>
      <div className="container">
        <Navbar />
        <Meta title="Socials" />
      </div>

      <div className="container">
        <div className="socials-head">
          <p className="socials-title">Where you can find me</p>
        </div>
      </div>

      <div className="container">
        <div className="socials-wrapper">
          <div className="socials-body">
            <div className="socials-media">
              <div className="social-media-item">
                <p className="socials-media-title">GitHub</p>
                <Link
                  className="social-media-contact-item"
                  href="https://github.com/markushha"
                >
                  <AiOutlineGithub className="social-media-icon" />
                  <p className="social-media-contact-title">markushha</p>
                </Link>
              </div>

              <div className="social-media-item">
                <p className="socials-media-title">LinkedIn</p>
                <Link
                  className="social-media-contact-item"
                  href="https://www.linkedin.com/in/mark-inger-098541231/"
                >
                  <AiOutlineLinkedin className="social-media-icon" />
                  <p className="social-media-contact-title">Mark Inger</p>
                </Link>
              </div>

              <div className="social-media-item">
                <p className="socials-media-title">YouTube</p>
                <Link
                  className="social-media-contact-item"
                  href="https://www.youtube.com/@rightp1que612"
                >
                  <AiOutlineYoutube className="social-media-icon" />
                  <p className="social-media-contact-title">Mark Inger</p>
                </Link>
              </div>

              <div className="social-media-item">
                <p className="socials-media-title">Instagram</p>
                <Link
                  className="social-media-contact-item"
                  href="https://www.instagram.com/marx2do/"
                >
                  <AiOutlineInstagram className="social-media-icon" />
                  <p className="social-media-contact-title">@marx2do</p>
                </Link>
              </div>

              <div className="social-media-item">
                <p className="socials-media-title">Telegram</p>
                <Link
                  className="social-media-contact-item"
                  href="https://t.me/marx2do"
                >
                  <RiTelegramLine className="social-media-icon" />
                  <p className="social-media-contact-title">@marx2do</p>
                </Link>
              </div>
            </div>

            <p className="socials-title">OR</p>

            <div className="socials-email">
              <p className="socials-subtitle">Email Me</p>
              <a href="mailto:mark@starfund.app"><p className="socials-email-title">mark@starfund.app</p></a>
              <p className="socials-descr mt-2 text-left">
                Mark Inger
                <br />
                Front-End Developer
              </p>
              <p className="socials-descr">Almaty, Kazakhstan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default Socials;
