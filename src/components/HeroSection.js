import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import ReactWOW from "react-wow";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  buttonTo,
  scrollTo,
  buttonBlank,
  img,
  alt,
  imgStart,
  id,
}) {
  return (
    <>
      <div
        id={id}
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <ReactWOW animation="fadeInUp">
                <div className="home__hero-text-wrapper">
                  <div className="top-line">{topLine}</div>
                  <h1 className={lightText ? "heading" : "heading dark"}>
                    {headline}
                  </h1>
                  <p
                    className={
                      lightTextDesc
                        ? "home__hero-subtitle"
                        : "home__hero-subtitle dark"
                    }
                  >
                    {description}
                  </p>
                  {buttonTo === "" ? (
                    <LinkScroll
                      to={scrollTo}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button buttonSize="btn--wide" buttonColor="blue">
                        {buttonLabel}
                      </Button>
                    </LinkScroll>
                  ) : (
                    <Link to={buttonTo} target={buttonBlank ? "blank" : null}>
                      <Button buttonSize="btn--wide" buttonColor="blue">
                        {buttonLabel}
                      </Button>
                    </Link>
                  )}
                </div>
              </ReactWOW>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <ReactWOW
                  animation={
                    imgStart === "start" ? "fadeInLeft" : "fadeInRight"
                  }
                >
                  <img src={img} alt={alt} className="home__hero-img" />
                </ReactWOW>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
