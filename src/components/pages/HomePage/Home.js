import React from "react";
import CertificateSection from "../../CertificateSection";
import HeroSection from "../../HeroSection";
import LandingSection from "../../LandingSection";
import { HOME_COMMUNITY, HOME_DEVELOPER } from "./Data";

function Home() {
  return (
    <>
      <LandingSection></LandingSection>
      <HeroSection {...HOME_COMMUNITY} />
      <HeroSection {...HOME_DEVELOPER} />
      <CertificateSection id="certificates_section"></CertificateSection>
    </>
  );
}

export default Home;
