import classes from "../WelcomePage.module.css";

function Option4() {
  return (
    <div className={classes.scrollSection}>
      <div className={classes.newSelection4}>
        <div className={classes.introHeader}>Consultating</div>
        <p className={classes.introText}>
          Let us recommend some possibilities.
        </p>
        <img
          className={classes.mainPicture}
          src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="mainPic1"
        />
      </div>
    </div>
  );
}

export default Option4;
