import React from "react";
import CertificateSection from "../../CertificateSection";
import HeroSection from "../../HeroSection";
import LandingSection from "../../LandingSection";
import { HOME_COMMUNITY } from "./Data";

function Home() {
  return (
    <>
      <LandingSection></LandingSection>
      <HeroSection {...HOME_COMMUNITY} />
      <CertificateSection id="certificates_section"></CertificateSection>
    </>
  );
}

export default Home;
