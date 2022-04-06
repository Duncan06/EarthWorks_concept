import classes from "./WelcomePage.module.css";
import MainInfo2 from "./MainInfo2";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Option3(props) {
  return (
    <div>
      <div className={classes.welcome}>Welcome!</div>
      <div className={classes.main}>
        <div className={classes.info}>
          <h1 className={classes.textTitle}>J.C. EarthWorks LLC</h1>
          <div className={classes.scrollSection}>
            <div className={classes.newSelection3}>
              <div className={classes.introHeader}>Site Analysis</div>
              <p className={classes.introText}>
                Sizing up your site is essential to working in it.
              </p>
              <img
                className={classes.mainPicture}
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGl0ZWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="mainPic1"
              />
            </div>
          </div>
          <div className={classes.carouselNav}>
            <div className={classes.carousel}></div>
            <div className={classes.carousel}></div>
            <div className={classes.carousel}></div>
            <div
              className={`${classes.carousel} ${classes.carouselSelect}`}
            ></div>
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

export default Option3;
