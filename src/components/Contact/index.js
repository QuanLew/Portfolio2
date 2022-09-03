import React, { useState, useRef, useEffect } from "react";
import { AnimatedLetter } from "..";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine, RiMessengerLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import "./index.scss";
import PreLoader from "../PreLoading/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kabbstv",
        "template_urwkljq",
        form.current,
        "6wFQ3BEdaXvGfG0To"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    let timer_loading = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer_loading);
    };
  }, []);

  return (
    <>
      <div className="container contact-page">
        {loading ? (
          <div className="main-load">
            <PreLoader />
          </div>
        ) : (
          <div className="main-content">
            <div className="text-zone">
              <h1>
                <AnimatedLetter
                  letterClass={letterClass}
                  strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                  idx={15}
                />
              </h1>
              <p>
                I am interested in freelance opportunities - especially
                ambitious or large projects. If you have any questions please do
                not hesitate to contact me using below form either.
              </p>
            </div>
            <div className="contact__container">
              <div className="contact__options">
                <article className="contact__option">
                  <MdOutlineEmail className="contact__option-icon" />
                  <h4>Email</h4>
                  <a href="mailto:miquanle1006@gmail.com" target="_blank">
                    Send a message
                  </a>
                </article>
                <article className="contact__option">
                  <RiMessengerLine className="contact__option-icon" />
                  <h4>Messenger</h4>
                  <a href="https://m.me/" target="_blank">
                    Send a message
                  </a>
                </article>
                <article className="contact__option">
                  <RiWhatsappLine className="contact__option-icon" />
                  <h4>WhatsApp</h4>
                  <a
                    href="https:api.whatsapp.com/send?phone=+1232323232"
                    target="_blank"
                  >
                    Send a message
                  </a>
                </article>
              </div>
              {/* END OF CONTACT OPTIONS */}

              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Your Message"
                  required
                />
                <button className="btn1" type="submit">
                  <FontAwesomeIcon
                    icon="paper-plane"
                    size="2x"
                    aria-hidden="true"
                    className="send"
                  />
                  <FontAwesomeIcon
                    icon="paper-plane"
                    size="2x"
                    aria-hidden="true"
                    className="send2"
                  />
                  <p>send</p>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
