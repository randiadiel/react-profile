import React from "react";
import CertificateSection from "../../CertificateSection";
import HeroSection from "../../HeroSection";
import { HOME_OBJ_ONE, HOME_OBJ_TWO } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...HOME_OBJ_ONE} />
      <HeroSection {...HOME_OBJ_TWO} />
      <CertificateSection></CertificateSection>
    </>
  );
}

export default Home;
