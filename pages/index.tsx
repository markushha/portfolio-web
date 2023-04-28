import Meta from "@/app/utils/Meta";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Modal from "@/app/components/Modal";

import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiSass, SiGit } from "react-icons/si";

import { Link } from "react-scroll";

import emailjs from "@emailjs/browser";

import { useState, useRef, useEffect } from "react";
import { service, template_id, public_key } from ".././config";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useRef<HTMLInputElement>();

  const submitEmail = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const currentForm = (form.current as any) || null;

    try {
      setLoading(true);
      setError("");
      await emailjs.sendForm(
        service,
        template_id,
        form.current as any,
        public_key
      );
      setIsSubmitted(true);
      setLoading(false);

      currentForm.reset();
    } catch (err: any) {
      setLoading(false);
      setError(err.text);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSubmitted]);

  return (
    <>
      <Meta title="Mark Inger" />
      <div className="flex flex-col items-center justify-center w-[100%]">
        <div className="container nav">
          <Navbar />
        </div>

        <div className="container">
          <div className="first-section">
          <div className="first-section-adaptive">
              <Image
                className="first-image"
                src={"/bio-photo-4.jpg"}
                alt="photo"
                width={160}
                height={160}
              />
            </div>

            <div className="first-section-left">
              <div className="first-left-top self-start flex">
                <h1 className="h1-title">
                  Hello, I{"'"}m Mark
                </h1>
              </div>
              <div className="first-left-mid">
                <p className="sub-title clean-z">
                  Experienced Web-Developer who{"'"}s here to help you promote
                  and improve your business. Together we{"'"}ll build the most
                  powerful and modern website
                </p>
              </div>
              <div className="first-left-bottom clean-z">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={800}
                >
                  <button className="action-btn clean-z">CONTACT ME</button>
                </Link>
              </div>
            </div>

            <div className="first-section-mid">
              <h2 className="h2-title">
                My Skills &<br />
                Technologies
              </h2>
              <div className="first-mid-techs">
                <div className="icon-wrapper"><SiJavascript className="icon" /></div>
                <div className="icon-wrapper"><SiTypescript className="icon" /></div>
                <div className="icon-wrapper"><SiHtml5 className="icon" /></div>
                <div className="icon-wrapper"><SiCss3 className="icon" /></div>
                <div className="icon-wrapper"><SiReact className="icon" /></div>
                <div className="icon-wrapper"><SiNextdotjs className="icon" /></div>
                <div className="icon-wrapper"><SiSass className="icon" /></div>
                <div className="icon-wrapper"><SiGit className="icon" /></div>
              </div>
            </div>

            <div className="first-section-right">
              <Image
                className="first-image"
                src={"/bio-photo-4.jpg"}
                alt="photo"
                width={266}
                height={266}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="techs-adaptive">
            <h2 className="h2-title">
              My Skills &
              Technologies
            </h2>
            <div className="first-mid-techs">
              <SiJavascript className="icon" />
              <SiTypescript className="icon" />
              <SiHtml5 className="icon" />
              <SiCss3 className="icon" />
              <SiReact className="icon" />
              <SiNextdotjs className="icon" />
              <SiSass className="icon" />
              <SiGit className="icon" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="second-section">
            <div className="second-section-top">
              <h2 className="h2-second-title">Project Process</h2>
              <div className="line" />
              <p className="sub-title-second">
                LET{"'"}S TALK ABOUT YOUR
                <br />
                PROJECT
              </p>
            </div>

            <div className="progress-content">
              <div className="second-section-item">
                <div className="progress-item">01</div>
                <p className="stage-title">ANALYSE</p>
                <p className="stage-descr">
                  On this stage I{"'"}ll understand your needs and we will
                  discuss all the details about your project
                </p>
              </div>

              <div className="second-section-item ml-[60px]">
                <div className="progress-item">02</div>
                <p className="stage-title">UI/UX</p>
                <p className="stage-descr">
                  What users see above all is the visual product. On this stage
                  we will create user-friendly design and interface
                </p>
              </div>

              <div className="second-section-item ml-[60px]">
                <div className="progress-item">03</div>
                <p className="stage-title">DEVELOPMENT</p>
                <p className="stage-descr">
                  At this stage we{"'"}re going to finish what we{"'"}ve started
                  and turn your imaginations into reality
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="contact">
            <div className="contact-form">
              <h2 className="contact-title">Send me an email</h2>
              <form className="form" onSubmit={submitEmail} ref={form as any}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="mark@icloud.com"
                  className="form-input"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message..."
                  className="form-textarea"
                  required
                />
                <button className="form-btn">
                  {loading ? "Loading..." : "SEND"}
                </button>
              </form>
            </div>

            <div className="contact-right">
              <Image
                className="contact-img"
                src="/bio-photo.jpg"
                alt="memoji"
                width={240}
                height={240}
              />
              <p className="contact-descr">
                AFTER I{"'"}LL SEE YOUR MESSAGE I{"'"}M GOING TO REACH YOU BACK
                ASAP TO DISCUSS OUR FURTHER PARTNERSHIP. I{"'"}LL DO MY BEST TO
                PROVIDE YOU WITH THE BEST SERVICE
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
      {isSubmitted && <Modal error={false} onClose={setIsSubmitted} />}
      {error && <Modal errorMessage={error} error={true} onClose={setError} />}
    </>
  );
}
