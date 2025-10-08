import React from "react";
import { useState } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Scroller from "../components/Scroller";
import AboutUs from "../components/AboutUs";
import OurExpertise from "../components/OurExpertise";
import Welcome from "../components/Welcome";
import CreateAtVivere from "../components/CreateAtVirere";


export default function Home() {
  return (
    <>
      <Scroller />
      <Welcome/>
      <AboutUs/>
      <OurExpertise />
      <CreateAtVivere/>
    </>
  );
}
