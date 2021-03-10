import React from "react";
import { Button } from "./Button";
import { Link as LinkScroll } from "react-scroll";
import { BiChevronDownCircle } from "react-icons/bi";
import "./LandingSection.css";
import ReactWOW from "react-wow";

function LandingSection() {
  return (
    <>
      <div className="home__landing-section ">
        <ReactWOW animation="fadeIn" duration="500">
          <div className="container">
            <div className="home__landing-top-line">
              Front-end Web Developer and Product Enthusiast
            </div>
            <div className="home__landing-title">Randi Adiel Gianufian</div>
            <p className="home__landing-subtitle">
              A Design-Oriented developer skilled in React.js, Front-end
              Development (HTML & CSS), Java, and Laravel currently studying in
              School Of Computer Science from Universitas Bina Nusantara
              (Binus).
            </p>
            <div className="home__landing-button-container">
              <a
                href="./CV_RandiAdielGianufian.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button buttonSize="btn--wide" buttonColor="red">
                  See My CV
                </Button>
              </a>
              <LinkScroll
                className="home__landing-scroll"
                to="community_section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <BiChevronDownCircle />
                <p>Know me more</p>
              </LinkScroll>
            </div>
          </div>
        </ReactWOW>
      </div>
    </>
  );
}

export default LandingSection;
