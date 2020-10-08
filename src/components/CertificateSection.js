import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./CertificateSection.css";
import ReactWOW from "react-wow";

function CertificateSection({ id }) {
  return (
    <>
      <div id={id} className="certificate__page darkBg">
        <ReactWOW animation="fadeIn">
          <div className="certificate__page-container container">
            <h1 className="certificate__page-head">Certificates</h1>
            <Carousel>
              <div>
                <img
                  src="images/certificate/flutter-udemy.jpg"
                  alt="certificates"
                />
                <p className="legend">Flutter Dart Course - Udemy</p>
              </div>
              <div>
                <img src="images/certificate/pdc-19.jpg" alt="certificates" />
                <p className="legend">
                  Product Development Conference Volunteer 2019
                </p>
              </div>
              <div>
                <img src="images/certificate/lnt-bncc.png" alt="certificates" />
                <p className="legend">
                  Mobile Apps Development Course - LnT BNCC
                </p>
              </div>
              <div>
                <img
                  src="images/certificate/LIPI-Intel.jpg"
                  alt="certificates"
                />
                <p className="legend">
                  Best Team at LIPI - Intel Inovation Day
                </p>
              </div>
              <div>
                <img
                  src="images/certificate/sql-certificate.jpg"
                  alt="certificates"
                />
                <p className="legend">Basic SQL from Solo Learn</p>
              </div>
              <div>
                <img
                  src="images/certificate/career-bncc.jpg"
                  alt="certificates"
                />
                <p className="legend">Career Seminar By BNCC</p>
              </div>
              <div>
                <img
                  src="images/certificate/mozilla-seminars.jpg"
                  alt="certificates"
                />
                <p className="legend">Mozilla Brand and Marketing Seminar</p>
              </div>
            </Carousel>
          </div>
        </ReactWOW>
      </div>
    </>
  );
}

export default CertificateSection;
