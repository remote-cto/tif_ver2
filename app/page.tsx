import LandingPage from "./components/LandingPage";

import WhatWeDo from "./components/WhatWeDo";
import WeBuilding from "./components/WeBuilding";
import Different from "./components/Different";
import WorkWith from "./components/WorkWith";
import Footer from "./components/Footer";

import CampusToCareer from "./components/CampusToCareer";
import Navbar from "./components/Navbar";
// import CELTMSystem from "./components/CELTMSystem";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      {/* <CELTMSystem /> */}

      <CampusToCareer />

      <WhatWeDo />

      <WeBuilding />

      <Different />

      <WorkWith />

      <Footer />
    </div>
  );
}
