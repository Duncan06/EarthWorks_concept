import React, { Suspense } from "react";
import "./MainDisplay.module.css";

const WelcomePage = React.lazy(() => import("./pageOptions/welcome/WelcomePage"));
const AboutPage = React.lazy(() => import("./pageOptions/AboutPage"));
const PricePage = React.lazy(() => import("./pageOptions/PricePage"));
const ContactPage = React.lazy(() => import("./pageOptions/ContactPage"));

function MainDisplay(props) {
  function CurrentInformation() {
    if (props.home) {
      return (
        <WelcomePage
          notHome={props.notHome}
          nowSetHome={props.nowSetHome}
          applyNotHomeOption={props.applyNotHomeOption}
          notFirstHome={props.notFirstHome}
        />
      );
    } else if (props.about) {
      return <AboutPage />;
    } else if (props.price) {
      return <PricePage />;
    } else {
      return <ContactPage />;
    }
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>{CurrentInformation()}</Suspense>
  );
}

export default MainDisplay;
