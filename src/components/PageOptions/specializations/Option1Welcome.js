import classes from "../WelcomePage.module.css";

function Option1() {
  return (
    <div className={classes.scrollSection}>
      <div className={classes.newSelection}>
        <div className={classes.introHeader}>Foundation Leveling</div>
        <p className={classes.introText}>
          Getting a handle on foundation leveling.
        </p>
        <img
          className={classes.mainPicture}
          src="https://images.unsplash.com/photo-1599365726864-ac222011504a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxhbmRzY2FwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="mainPic1"
        />
      </div>
    </div>
  );
}

export default Option1;
