import React from "react";
import HeroSection from "../../HeroSection";
import {
  HOME_OBJ_FOUR,
  HOME_OBJ_ONE,
  HOME_OBJ_THREE,
  HOME_OBJ_TWO,
} from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...HOME_OBJ_ONE} />
      <HeroSection {...HOME_OBJ_TWO} />
      <HeroSection {...HOME_OBJ_THREE} />
      <HeroSection {...HOME_OBJ_FOUR} />
    </>
  );
}

export default Home;
