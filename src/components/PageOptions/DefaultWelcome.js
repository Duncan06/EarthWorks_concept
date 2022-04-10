import React, { Suspense } from "react";
import classes from "./WelcomePage.module.css";

const MainInfo2 = React.lazy(() => import("./MainInfo2"));
const Carousel = React.lazy(() => import("./Carousel"));
const PrevNextButtons = React.lazy(() => import("./PrevNextButtons"));

function DefaultWelcome(props) {
  return (
    <div>
      <div className={classes.welcome}>Welcome!</div>
      <div className={classes.main}>
        <div className={classes.info}>
          <h1 className={classes.textTitle}>J.C. EarthWorks LLC</h1>
          <div className={classes.scrollSection}>
            <div
              className={`${classes.defaultHome} ${
                props.notHome ? "" : classes.defaultSelection
              }`}
            >
              <div className={classes.introHeader}>
                We'd be happy to help with your next project.
              </div>
              <p className={classes.introText}>
                Let us introduce ourselves, we're J.C. EarthWorks. We are a two
                man team comprising of John and Chris, who have been in the
                business longer than we should care to share. We are a
                foundation and structural improvement team who specialize in a
                number of areas. If you need assitance we'd be glad to lend our
                expertise.
              </p>
              <img
                className={classes.mainPicture}
                src="https://media.istockphoto.com/photos/ravenel-bridge-in-charleston-sc-picture-id117751351?b=1&k=20&m=117751351&s=170667a&w=0&h=WeN8wG9l2j08vTbP2W7hN5luC6PB4478TnHgCGh6IJY="
                alt="mainPic1"
              />
              <p className={classes.introText}>
                Let us introduce ourselves, we're J.C. EarthWorks. We are a two
                man team comprising of John and Chris, who have been in the
                business longer than we should care to share. We are a
                foundation and structural improvement team who specialize in a
                number of areas. If you need assitance we'd be glad to lend our
                expertise.
              </p>
              <p className={classes.introText}>
                Let us introduce ourselves, we're J.C. EarthWorks. We are a two
                man team comprising of John and Chris, who have been in the
                business longer than we should care to share. We are a
                foundation and structural improvement team who specialize in a
                number of areas. If you need assitance we'd be glad to lend our
                expertise.
              </p>
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

export default DefaultWelcome;
