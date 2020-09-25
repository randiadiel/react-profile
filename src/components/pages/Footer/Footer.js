import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiCode } from "react-icons/di";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <DiCode className="navbar-icon" />
            </Link>
          </div>
          <small className="website-rights">Randi Adiel Gianufian © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={"//www.facebook.com/randi.adiel/"}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.instagram.com/randiadiel/"}
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.linkedin.com/in/randiadiel/"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
