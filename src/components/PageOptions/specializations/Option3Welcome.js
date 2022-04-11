import classes from "../WelcomePage.module.css";

function Option3() {
  return (
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
  );
}

export default Option3;
