import {
  FaPhoneSquareAlt,
  FaEnvelopeOpen,
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

import { BsFillSendPlusFill } from "react-icons/bs";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact section">
        <h1 className="section-title">
          Get In <span>Touch</span>
        </h1>
        <div className="contact-container container grid">
          <div className="contact-content">
            <h3 className="content-title">Don't Be Shy !</h3>
            <p className="content-description">
              Feel free to get in touch with me . Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Beatae rerum eligendi fugit non.
              Quis, iure.
            </p>
            <div className="content-info">
              <div className="info-item">
                <FaEnvelopeOpen className="info-icon" />
                <div className="">
                  <span className="info-title">Email Me</span>
                  <span className="info-description"> me@mail.com</span>
                </div>
              </div>
              <div className="info-item">
                <FaPhoneSquareAlt className="info-icon" />
                <div className="">
                  <span className="info-title">Call Me</span>
                  <span className="info-description"> +21621184010</span>
                </div>
              </div>
            </div>
            <div className="content-social">
              <a href="https://github.com" className="social-link">
                <FaGithub />
              </a>
              <a href="https://instagram.com" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://whatsapp.com" className="social-link">
                <FaWhatsapp />
              </a>
              <a href="https://youtube.com" className="social-link">
                <FaYoutube />
              </a>
            </div>
          </div>
          <form action="" className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
              />
              <input
                type="text"
                placeholder="Your Subject"
                className="form-input"
              />
            </div>
            <div className="form-text">
              <textarea
                placeholder="Your Message"
                className="form-input"
              ></textarea>
            </div>

            <a href="" className="btn">
              Send Message
              <span className="btn-icon">
                <BsFillSendPlusFill />
              </span>
            </a>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
