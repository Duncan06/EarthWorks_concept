import React, { Suspense } from "react";
import classes from "./WelcomePage.module.css";

const MainInfo2 = React.lazy(() => import("./MainInfo2"));
const SubjectSection = React.lazy(() => import("./SubjectSection"));
const Carousel = React.lazy(() => import("./Carousel"));
const PrevNextButtons = React.lazy(() => import("./PrevNextButtons"));

function Welcome(props) {
  return (
    <div>
      <div className={classes.welcome}>Welcome!</div>
      <div className={classes.main}>
        <div className={classes.info}>
          <h1 className={classes.textTitle}>J.C. EarthWorks LLC</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <SubjectSection
              home={props.home}
              notHome={props.notHome}
              option1={props.option1}
              option2={props.option2}
              option3={props.option3}
              option4={props.option4}
              option5={props.option5}
            />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Carousel
              option1={props.option1}
              option2={props.option2}
              option3={props.option3}
              option4={props.option4}
              option5={props.option5}
            />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <PrevNextButtons previous={props.previous} next={props.next} />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <MainInfo2
            changeOption1={props.changeOption1}
            changeOption2={props.changeOption2}
            changeOption3={props.changeOption3}
            changeOption4={props.changeOption4}
            changeOption5={props.changeOption5}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default Welcome;
