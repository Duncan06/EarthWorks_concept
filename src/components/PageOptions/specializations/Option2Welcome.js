import classes from "../WelcomePage.module.css";

function Option2() {
  return (
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
  );
}

export default Option2;
