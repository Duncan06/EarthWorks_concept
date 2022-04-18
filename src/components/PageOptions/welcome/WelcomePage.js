import React, { Suspense, useState } from "react";
import classes from "./WelcomePage.module.css";
import useWindowDimensions from "../../useWindowDimensions";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const MainInfo2 = React.lazy(() => import("./MainInfo2"));
const SubjectSection = React.lazy(() => import("./SubjectSection"));
const Carousel = React.lazy(() => import("./Carousel"));
const PrevNextButtons = React.lazy(() => import("./PrevNextButtons"));

function Welcome(props) {
  const { width } = useWindowDimensions();
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);
  const [showing, setShowing] = useState(false);
  const notWideScreenWidth = 1650;

  const setOptions = [
    setOption1,
    setOption2,
    setOption3,
    setOption4,
    setOption5,
  ];

  function changeOption1() {
    setOption1(true);
    // Set remaining values to false (This is repeated in multiple lines).
    setOptions.filter((name) => name !== setOption1).map((func) => func(false));
    props.notFirstHome();
    props.applyNotHomeOption();
  }

  function changeOption2() {
    setOption2(true);
    setOptions.filter((name) => name !== setOption2).map((func) => func(false));
    props.notFirstHome();
    props.applyNotHomeOption();
  }

  function changeOption3() {
    setOption3(true);
    setOptions.filter((name) => name !== setOption3).map((func) => func(false));
    props.notFirstHome();
    props.applyNotHomeOption();
  }

  function changeOption4() {
    setOption4(true);
    setOptions.filter((name) => name !== setOption4).map((func) => func(false));
    props.notFirstHome();
    props.applyNotHomeOption();
  }

  function changeOption5() {
    setOption5(true);
    setOptions.filter((name) => name !== setOption5).map((func) => func(false));
    props.notFirstHome();
    props.applyNotHomeOption();
  }

  function next() {
    if (option1) {
      changeOption2();
    } else if (option2) {
      changeOption3();
    } else if (option3) {
      changeOption4();
    } else if (option4) {
      changeOption5();
    } else if (option5) {
      setOptions.map((func) => func(false));
      props.nowSetHome();
    } else {
      changeOption1();
    }
  }

  function previous() {
    if (option1) {
      setOptions.map((func) => func(false));
      props.nowSetHome();
    } else if (option2) {
      changeOption1();
    } else if (option3) {
      changeOption2();
    } else if (option4) {
      changeOption3();
    } else if (option5) {
      changeOption4();
    } else {
      changeOption5();
    }
  }

  function welcomeDisplay() {
    if (width > notWideScreenWidth) {
      return (
        <div>
          <div className={classes.welcome}>Welcome!</div>
          <div className={classes.main}>
            <div className={classes.info}>
              <h1 className={classes.textTitle}>J.C. EarthWorks LLC</h1>
              <Suspense fallback={<div>Loading...</div>}>
                <SubjectSection
                  notHome={props.notHome}
                  option1={option1}
                  option2={option2}
                  option3={option3}
                  option4={option4}
                  option5={option5}
                />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <Carousel
                  option1={option1}
                  option2={option2}
                  option3={option3}
                  option4={option4}
                  option5={option5}
                />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <PrevNextButtons previous={previous} next={next} />
              </Suspense>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <MainInfo2
                changeOption1={changeOption1}
                changeOption2={changeOption2}
                changeOption3={changeOption3}
                changeOption4={changeOption4}
                changeOption5={changeOption5}
              />
            </Suspense>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className={classes.welcome}>Welcome!</div>
          <div className={classes.main}>
            <div className={classes.info}>
              <h1 className={classes.textTitle}>J.C. EarthWorks LLC </h1>
              <button
                className={classes.collapsedSelectionMenu}
                onClick={() => setShowing(!showing)}
              >
                {showing ? <CloseIcon /> : <MenuIcon />} Specializations
              </button>
              {showing && (
                <div className={classes.selectionMenuOptions}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <MainInfo2
                      changeOption1={changeOption1}
                      changeOption2={changeOption2}
                      changeOption3={changeOption3}
                      changeOption4={changeOption4}
                      changeOption5={changeOption5}
                    />
                  </Suspense>
                </div>
              )}
              <Suspense fallback={<div>Loading...</div>}>
                <SubjectSection
                  notHome={props.notHome}
                  option1={option1}
                  option2={option2}
                  option3={option3}
                  option4={option4}
                  option5={option5}
                />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <Carousel
                  option1={option1}
                  option2={option2}
                  option3={option3}
                  option4={option4}
                  option5={option5}
                />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <PrevNextButtons previous={previous} next={next} />
              </Suspense>
            </div>
          </div>
        </div>
      );
    }
  }

  return <div>{welcomeDisplay()}</div>;
}

export default Welcome;
