import classes from "./MainDisplay.module.css";

function MainDisplay(props) {
  function CurrentInformation() {
    if (props.home) {
      return (
        <div>
          <div className={classes.welcome}>Welcome!</div>
          <div className={classes.main}>
            <div className={classes.info}>
              <h1 className={classes.textTitle}>JC-EarthWorks</h1>
              <h4>We'd be happy to help with your next project.</h4>
              <p className={classes.introText}>
                Let us introduce ourselves, we're JC-EarthWorks. We are a two
                man team comprising of John and Chris, who have been in the
                business longer than we should care to share. We have experience
                in building house from the ground up, all the way to
                commericial construction working on projects worth hundreds of
                millions. This include a variety of infrastructure projects with
                various complexities, from cutting edge to everyday
                construction.
              </p>
              <img
                className={classes.mainPicture}
                src="https://eastislandsrentals.com/wp-content/uploads/2019/02/cooper-river-bridge-charleston-bridge-run-ravenel-bridge.jpg"
              />
            </div>
            <div className={classes.info2}>
              <h1 className={classes.info2Title}>Specializations</h1> 
              <h2>Foundation leveling</h2>
              <h2>Irrigation</h2>
              <h2>Site Anaylsis</h2>
              <h2>Consulting</h2>
              <h2>Code Compliance</h2>
            </div>
          </div>
        </div>
      );
    }
  }
  return <div>{CurrentInformation()}</div>;
}

export default MainDisplay;
