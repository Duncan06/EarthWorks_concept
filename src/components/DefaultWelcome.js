import classes from "./WelcomePage.module.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SunnyIcon from "@material-ui/icons/WbSunny";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LocalShippingIcon from "@material-ui/icons/Landscape";
import GridOnIcon from "@material-ui/icons/GridOn";

function DefaultWelcome(props) {
  return (
    <div>
      <div className={classes.welcome}>Welcome!</div>
      <div className={classes.main}>
        <div className={classes.info}>
          <h1 className={classes.textTitle}>J.C. EarthWorks</h1>
          <div className={classes.introHeader}>
            We'd be happy to help with your next project.
          </div>
          <p className={classes.introText}>
            Let us introduce ourselves, we're J.C. EarthWorks. We are a two man
            team comprising of John and Chris, who have been in the business
            longer than we should care to share. We are a foundation and
            structural improvement team who specialize in a number of areas. If
            you need assitance we'd be glad to lend our expertise.
          </p>
          <img
            className={classes.mainPicture}
            src="https://media.istockphoto.com/photos/ravenel-bridge-in-charleston-sc-picture-id117751351?b=1&k=20&m=117751351&s=170667a&w=0&h=WeN8wG9l2j08vTbP2W7hN5luC6PB4478TnHgCGh6IJY="
            alt="mainPic1"
          />
          <div className={classes.buttonContainer}>
            <button className={classes.previousButton} onClick={props.previous}>Previous</button>
            <button className={classes.nextButton} onClick={props.next}>Next</button>
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

export default DefaultWelcome;
