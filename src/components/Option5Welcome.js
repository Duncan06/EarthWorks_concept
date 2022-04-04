import classes from "./WelcomePage.module.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SunnyIcon from "@material-ui/icons/WbSunny";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LocalShippingIcon from "@material-ui/icons/Landscape";
import GridOnIcon from "@material-ui/icons/GridOn";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Option5(props) {
  return (
    <div>
      <div className={classes.welcome}>Welcome!</div>
      <div className={classes.main}>
        <div className={classes.info}>
          <h1 className={classes.textTitle}>J.C. EarthWorks</h1>
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

export default Option5;
