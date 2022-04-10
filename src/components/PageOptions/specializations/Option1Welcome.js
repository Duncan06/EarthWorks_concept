import React, { Suspense } from "react";
import classes from "../WelcomePage.module.css";
import MainInfo2 from "../MainInfo2";

const Carousel = React.lazy(() => import("../Carousel"));
const PrevNextButtons = React.lazy(() => import("../PrevNextButtons"));

function Option1(props) {
  return (
    <div>
      <div className={classes.welcome}>Welcome!</div>
      <div className={classes.main}>
        <div className={classes.info}>
          <h1 className={classes.textTitle}>J.C. EarthWorks LLC</h1>
          <div className={classes.scrollSection}>
            <div className={classes.newSelection}>
              <div className={classes.introHeader}>Foundation Leveling</div>
              <p className={classes.introText}>
                Getting a handle on foundation leveling.
              </p>
              <img
                className={classes.mainPicture}
                src="https://images.unsplash.com/photo-1599365726864-ac222011504a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxhbmRzY2FwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
        <MainInfo2
          changeOption1={props.changeOption1}
          changeOption2={props.changeOption2}
          changeOption3={props.changeOption3}
          changeOption4={props.changeOption4}
          changeOption5={props.changeOption5}
        />
      </div>
    </div>
  );
}

export default Option1;
