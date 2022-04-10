import classes from "./WelcomePage.module.css";

function Carousel(props) {
  if (props.option1) {
    return (
      <div className={classes.carouselNav}>
        <div className={classes.carousel}></div>
        <div className={`${classes.carousel} ${classes.carouselSelect}`}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
      </div>
    );
  } else if (props.option2) {
    return (
      <div className={classes.carouselNav}>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={`${classes.carousel} ${classes.carouselSelect}`}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
      </div>
    );
  } else if (props.option3) {
    return (
      <div className={classes.carouselNav}>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={`${classes.carousel} ${classes.carouselSelect}`}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
      </div>
    );
  } else if (props.option4) {
    return (
      <div className={classes.carouselNav}>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={`${classes.carousel} ${classes.carouselSelect}`}></div>
        <div className={classes.carousel}></div>
      </div>
    );
  } else if (props.option5) {
    return (
      <div className={classes.carouselNav}>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={`${classes.carousel} ${classes.carouselSelect}`}></div>
      </div>
    );
  } else {
    return (
      <div className={classes.carouselNav}>
        <div className={`${classes.carousel} ${classes.carouselSelect}`}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
        <div className={classes.carousel}></div>
      </div>
    );
  }
}

export default Carousel;
