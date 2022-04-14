import classes from "../WelcomePage.module.css";

function Option5() {
  return (
    <div className={classes.scrollSection}>
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
    </div>
  );
}

export default Option5;
