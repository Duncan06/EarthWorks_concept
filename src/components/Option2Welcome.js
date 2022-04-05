import classes from "./WelcomePage.module.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SunnyIcon from "@material-ui/icons/WbSunny";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LocalShippingIcon from "@material-ui/icons/Landscape";
import GridOnIcon from "@material-ui/icons/GridOn";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Option2(props) {
  return (
    <div>
      <div className={classes.welcome}>Welcome!</div>
      <div className={classes.main}>
        <div className={classes.info}>
          <h1 className={classes.textTitle}>J.C. EarthWorks</h1>
          <div className={classes.scrollSection}>
            <div className={classes.newSelection2}>
              <div className={classes.introHeader}>Irrigation</div>
              <p className={classes.introText}>
                These are the water systems that we deal with.
              </p>
              <img
                className={classes.mainPicture}
                src="https://images.unsplash.com/photo-1545641203-7d072a14e3b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cml2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="mainPic1"
              />
            </div>
          </div>
          <div className={classes.carouselNav}>
            <div className={classes.carousel}></div>
            <div className={classes.carousel}></div>
            <div
              className={`${classes.carousel} ${classes.carouselSelect}`}
            ></div>
            <div className={classes.carousel}></div>
            <div className={classes.carousel}></div>
            <div className={classes.carousel}></div>
          </div>
          <div className={classes.buttonContainer}>
            <button className={classes.previousButton} onClick={props.previous}>
              <ArrowBackIcon /> Previous
            </button>
            <button className={classes.nextButton} onClick={props.next}>
              Next <ArrowForwardIcon />
            </button>
          </div>
        </div>
        <div className={classes.info2}>
          <h1 className={classes.info2Title}>Specializations</h1>
          <button
            className={classes.optionOneHome}
            onClick={props.changeOption1}
          >
            <h2>Foundation leveling</h2>
            <LocalShippingIcon className={classes.optionOneIcon} />
          </button>
          <button
            className={classes.optionTwoHome}
            onClick={props.changeOption2}
          >
            <h2>Irrigation</h2>
            <SunnyIcon className={classes.optionTwoIcon} />
          </button>
          <button
            className={classes.optionThreeHome}
            onClick={props.changeOption3}
          >
            <h2>Site Anaylsis</h2>
            <GridOnIcon className={classes.optionTwoIcon} />
          </button>
          <button
            className={classes.optionFourHome}
            onClick={props.changeOption4}
          >
            <h2>Consulting</h2>
            <VerifiedUserIcon className={classes.optionTwoIcon} />
          </button>
          <button
            className={classes.optionFiveHome}
            onClick={props.changeOption5}
          >
            <h2>Code Compliance</h2>
            <MenuBookIcon className={classes.optionOneIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Option2;
