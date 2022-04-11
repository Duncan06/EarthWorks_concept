import classes from "../WelcomePage.module.css";

function DefaultSubject(props) {
  return (
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
        <p className={classes.introText}>
          Let us introduce ourselves, we're J.C. EarthWorks. We are a two man
          team comprising of John and Chris, who have been in the business
          longer than we should care to share. We are a foundation and
          structural improvement team who specialize in a number of areas. If
          you need assitance we'd be glad to lend our expertise.
        </p>
        <p className={classes.introText}>
          Let us introduce ourselves, we're J.C. EarthWorks. We are a two man
          team comprising of John and Chris, who have been in the business
          longer than we should care to share. We are a foundation and
          structural improvement team who specialize in a number of areas. If
          you need assitance we'd be glad to lend our expertise.
        </p>
      </div>
    </div>
  );
}

export default DefaultSubject;
