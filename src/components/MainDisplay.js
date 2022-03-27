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
                in building house from the ground up, all the way to commericial
                construction working on projects worth hundreds of millions.
                This include a variety of infrastructure projects with various
                complexities, from cutting edge to everyday construction.
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
    } else if (props.about) {
      return (
        <div>
          <div className={classes.mainAboutContainer}>
            <div className={classes.mainAbout}>
              <h1 className={classes.innerTitle}>Experience</h1>
              <p>
                John and Chris have worked together professionally for over two
                decades. They both have worked together under the professional
                construction company FlatIron for years. In addition to this
                They have taken on jobs as a two man team doing freelance work,
                as well as personal work that would typically run for tens of
                thousands of dollars if professionals were hired.
              </p>
              <p>
                There most likely is not an aspect of construction that either
                of them have not touched. Also their amount of hands on
                experience with machinary is second to none. They have both
                worked up and down the east coast for multiple years,
                experienceing a range of different soils, materials, and
                conditions to work with.
              </p>
            </div>
            <div className={classes.mainAbout2}>
              <h1 className={classes.innerTitle}>John's Background</h1>
              <p>
                John has worked professionally in construction for over 20
                years. He has worked on numerous projects and has acquired the
                following skillset:
              </p>
              <ul>
                <li>Crane operation</li>
                <li>Initial site setup</li>
                <li>Electrical</li>
                <li>Concrete</li>
                <li>Carpentry</li>
                <li>Soil Composite analysis</li>
              </ul>
              <img
                className={classes.picAbout}
                src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/images-s/2021/07_07/gate_family_s_02_m.jpg"
              />
            </div>
            <div className={classes.mainAbout3}>
              <h1 className={classes.innerTitle}>Chris's Background</h1>
              <p>
                Chris has worked in construction since before he was 18 years
                old. He has worked for multiple construction companies as well
                as taking on independent work when needed. Over the course of
                his career he has gained the following skillset:
              </p>
              <ul>
                <li>Crane operation</li>
                <li>Initial site setup</li>
                <li>Electrical</li>
                <li>Concrete</li>
                <li>Carpentry</li>
                <li>Soil Composite analysis</li>
              </ul>
              <img
                className={classes.picAbout}
                src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/huracan/huracan_evo/H-EVO_3.png"
              />
            </div>
          </div>
        </div>
      );
    } else if (props.price) {
      return (
        <div>
          <div className={classes.mainPriceContainer}></div>
        </div>
      );
    }
  }
  return <div>{CurrentInformation()}</div>;
}

export default MainDisplay;
