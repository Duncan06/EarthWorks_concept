import React, { Suspense } from "react";
import "./MainDisplay.module.css";

const WelcomePage = React.lazy(() => import("./pageOptions/WelcomePage"));
const AboutPage = React.lazy(() => import("./pageOptions/AboutPage"));
const PricePage = React.lazy(() => import("./pageOptions/PricePage"));
const ContactPage = React.lazy(() => import("./pageOptions/ContactPage"));

function MainDisplay(props) {
  function CurrentInformation() {
    if (props.home) {
      return (
        <WelcomePage
          home={props.home}
          notHome={props.notHome}
          nowSetHome={props.nowSetHome}
          applyNotHomeOption={props.applyNotHomeOption}
          notFirstHome={props.notFirstHome}
          option1={props.option1}
          changeOption1={props.changeOption1}
          option2={props.option2}
          changeOption2={props.changeOption2}
          option3={props.option3}
          changeOption3={props.changeOption3}
          option4={props.option4}
          changeOption4={props.changeOption4}
          option5={props.option5}
          changeOption5={props.changeOption5}
          next={props.next}
          previous={props.previous}
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
