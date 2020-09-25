import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./CertificateSection.css";

function CertificateSection() {
  return (
    <>
      <div ref="certificates" className="certificate__page darkBg">
        <div className="certificate__page-container container">
          <h1 className="certificate__page-head">Certificates</h1>
          <Carousel>
            <div>
              <img src="images/certificate/flutter-udemy.jpg" />
              <p className="legend">Flutter Dart Course - Udemy</p>
            </div>
            <div>
              <img src="images/certificate/pdc-19.jpg" />
              <p className="legend">
                Product Development Conference Volunteer 2019
              </p>
            </div>
            <div>
              <img src="images/certificate/lnt-bncc.png" />
              <p className="legend">
                Mobile Apps Development Course - LnT BNCC
              </p>
            </div>
            <div>
              <img src="images/certificate/LIPI-Intel.jpg" />
              <p className="legend">Best Team at LIPI - Intel Inovation Day</p>
            </div>
            <div>
              <img src="images/certificate/sql-certificate.jpg" />
              <p className="legend">Basic SQL from Solo Learn</p>
            </div>
            <div>
              <img src="images/certificate/career-bncc.jpg" />
              <p className="legend">Career Seminar By BNCC</p>
            </div>
            <div>
              <img src="images/certificate/mozilla-seminars.jpg" />
              <p className="legend">Mozilla Brand and Marketing Seminar</p>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default CertificateSection;
