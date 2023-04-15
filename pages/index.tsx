import Head from "next/head";
import Meta from "@/app/utils/Meta";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Modal from "@/app/components/Modal";

import {Link} from 'react-scroll';

import emailjs from "@emailjs/browser";

import { useState, useRef, useEffect } from "react";
import { service, template_id, public_key } from ".././config";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const form =  useRef<HTMLInputElement>();

  const submitEmail = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const currentForm = form.current as any || null;
    
    try {
      setLoading(true);
      setError("");
      await emailjs.sendForm(service, template_id, form.current as any, public_key);
      setIsSubmitted(true);
      setLoading(false);

      currentForm.reset();
    } catch(err: any) {
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
            <div className="first-section-left">
              <div className="first-left-top self-start flex">
                <h1 className="h1-title">
                  Hello, <br />I{"'"}m Mark
                  <div className="mt-[73px] ml-[15px]">
                    <Image
                      className="emoji"
                      src="/emojis/waving_hand.svg"
                      alt="emoji"
                      width={50}
                      height={50}
                    />
                  </div>
                </h1>
              </div>
              <div className="first-left-mid mb-[10px]">
                <p className="sub-title">
                  Experienced Web-Developer who{"'"}s here to help you promote and
                  improve your business. Together we{"'"}ll build the most powerful
                  and modern website
                </p>
              </div>
              <div className="first-left-bottom">
                <Link to="contact" spy={true} smooth={true} offset={50} duration={800}><button className="action-btn">CONTACT ME</button></Link>
              </div>
            </div>

            <div className="first-section-mid">
              <h2 className="h2-title">
                My Skills &<br />
                Technologies
              </h2>
              <div className="first-mid-techs">
                <i className="devicon-react-original icon" />
                <i className="devicon-nextjs-line icon" />
                <i className="devicon-typescript-plain icon"></i>
                <i className="devicon-javascript-plain icon"></i>
                <i className="devicon-html5-plain icon"></i>
                <i className="devicon-css3-plain icon"></i>
                <i className="devicon-sass-original icon"></i>
                <i className="devicon-git-plain icon"></i>
              </div>
            </div>

            <div className="first-section-right">
              <Image
                className="first-image"
                src={"/memoji.svg"}
                alt="photo"
                width={266}
                height={266}
              />
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

            <div className="second-section-bottom">
              <div className="progress-bar">
                <div className="progress-item">01</div>
                <div className="progress-line" />
                <div className="progress-item">02</div>
                <div className="progress-line-2" />
                <div className="progress-item">03</div>
              </div>
            </div>

            <div className="progress-content">
              <div className="second-section-item">
                <p className="stage-title">ANALYSE</p>
                <p className="stage-descr">
                  On this stage I{"'"}ll understand your needs and we will discuss
                  all the details about your project
                </p>
              </div>

              <div className="second-section-item ml-[60px]">
                <p className="stage-title">UI/UX</p>
                <p className="stage-descr">
                  What users see above all is the visual product. On this stage
                  we will create user-friendly design and interface
                </p>
              </div>

              <div className="second-section-item ml-[60px]">
                <p className="stage-title">DEVELOPMENT & DEPLOY</p>
                <p className="stage-descr">
                  At this stage we{"'"}re going to finish what we{"'"}ve started and
                  turn your imaginations into reality
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="contact">
            <div className="contact-form">
              <h2 className="contact-title">Contact</h2>
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
                <button className="form-btn">{loading ? "Loading..." : "REACH ME"}</button>
              </form>
            </div>

            <div className="contact-right">
              <Image
                className="contact-img"
                src="/Rectangle.svg"
                alt="memoji"
                width={288}
                height={288}
              />
              <p className="contact-descr">
                AFTER I{"'"}LL SEE YOUR MESSAGE I{"'"}M GOING TO REACH YOU BACK ASAP TO
                DISCUSS OUR FURTHER PARTNERSHIP. I{"'"}LL DO MY BEST TO PROVIDE YOU
                WITH THE BEST SERVICE
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
      <div className="circle-blur" id="circle-1" />
      <div className="circle-blur" id="circle-2" />
      <div className="circle-blur" id="circle-3" />
      <div className="circle-blur" id="circle-4" />
      <div className="circle-blur" id="circle-5" />
      </>
  );
}
