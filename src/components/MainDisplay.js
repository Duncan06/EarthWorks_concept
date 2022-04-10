import React, { Suspense } from "react";
import classes from "./MainDisplay.module.css";

const WelcomePage = React.lazy(() => import("./pageOptions/WelcomePage"));
const AboutPage = React.lazy(() => import("./pageOptions/AboutPage"));
const PricePage = React.lazy(() => import("./pageOptions/PricePage"));
const ContactPage = React.lazy(() => import("./pageOptions/ContactPage"));

function MainDisplay(props) {
  function CurrentInformation() {
    if (props.home) {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <WelcomePage
            notHome={props.notHome}
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
        </Suspense>
      );
    } else if (props.about) {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <AboutPage />
        </Suspense>
      );
    } else if (props.price) {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <PricePage />
        </Suspense>
      );
    } else {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <ContactPage />
        </Suspense>
      );
    }
  }
  return <div className={classes}>{CurrentInformation()}</div>;
}

export default MainDisplay;
