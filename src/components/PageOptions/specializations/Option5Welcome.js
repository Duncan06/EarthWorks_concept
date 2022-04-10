import React, { Suspense } from "react";
import classes from "../WelcomePage.module.css";

const MainInfo2 = React.lazy(() => import("../MainInfo2"));
const Carousel = React.lazy(() => import("../Carousel"));
const PrevNextButtons = React.lazy(() => import("../PrevNextButtons"));

function Option5(props) {
  return (
    <div>
      <div className={classes.welcome}>Welcome!</div>
      <div className={classes.main}>
        <div className={classes.info}>
          <h1 className={classes.textTitle}>J.C. EarthWorks LLC</h1>
          <div className={classes.scrollSection}>
            <div className={classes.newSelection5}>
              <div className={classes.introHeader}>Code Compliance</div>
              <p className={classes.introText}>
                We'll help you keep up to date with state and local regulations.
              </p>
              <img
                className={classes.mainPicture}
                src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGF3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="mainPic1"
              />
            </div>
          </div>
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

export default Option5;
