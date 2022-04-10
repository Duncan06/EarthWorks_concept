import classes from "./WelcomePage.module.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function PrevNextButtons(props) {
  return (
    <div className={classes.buttonContainer}>
      <button className={classes.previousButton} onClick={props.previous}>
        <ArrowBackIcon /> Previous
      </button>
      <button className={classes.nextButton} onClick={props.next}>
        Next <ArrowForwardIcon />
      </button>
    </div>
  );
}

export default PrevNextButtons;
