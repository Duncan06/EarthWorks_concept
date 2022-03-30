import classes from "./MainDisplay.module.css";

function MainDisplay(props) {
  function CurrentInformation() {
    if (props.home) {
      return (
        <div>
          <div className={classes.welcome}>Welcome!</div>
          <div className={classes.main}>
            <div className={classes.info}>
              <h1 className={classes.textTitle}>J.C. EarthWorks</h1>
              <div className={classes.introHeader}>
                We'd be happy to help with your next project.
              </div>
              <p className={classes.introText}>
                Let us introduce ourselves, we're J.C. EarthWorks. We are a two
                man team comprising of John and Chris, who have been in the
                business longer than we should care to share. We are a
                foundation and structural improvement team who specialize in a
                number of areas. If you need assitance we'd be glad to lend our
                expertise.
              </p>
              <img
                className={classes.mainPicture}
                src="https://media.istockphoto.com/photos/ravenel-bridge-in-charleston-sc-picture-id117751351?b=1&k=20&m=117751351&s=170667a&w=0&h=WeN8wG9l2j08vTbP2W7hN5luC6PB4478TnHgCGh6IJY="
                alt="mainPic1"
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
                src="https://thumbs.dreamstime.com/b/lamborghini-aventador-lp-superveloce-test-drive-day-hong-kong-china-aug-aug-hong-kong-63226553.jpg"
                alt="aboutPic1"
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
                src="https://thumbs.dreamstime.com/b/lamborghini-choun-buri-august-tron-supercars-aventador-car-display-thailand-super-series-race-august-bira-33090437.jpg"
                alt="aboutPic2"
              />
            </div>
          </div>
        </div>
      );
    } else if (props.price) {
      return (
        <div>
          <div className={classes.mainPriceContainer}>
            <div className={classes.mainPrice}>
              <h1 className={classes.innerTitle}>Prices</h1>
              <div className={classes.innerPriceText}>
                <h4 className={classes.innerPriceTextDisclaimer}>
                  There are several factors that go into prices, but we would
                  love to supply an estimate if you reach out to us. Some things
                  to consider is the amount of land, the type of work, the
                  amount of equipment needed, and any special constraints that
                  may come along with the job.
                </h4>
                <p className={classes.innerPriceText2}>
                  We guarentee that our commission fee's are reflective of the
                  current market. Over the years we have seen how complicated
                  independent projects should be implemented, as well as the
                  methodology in pricing such projects.
                </p>
              </div>
            </div>
            <div className={classes.mainPrice2}>
              <h1 className={classes.innerTitle}>List For Consideration</h1>
              <div className={classes.mainPrice2Text}>
                <p>Size of lot</p>
                <p>Days of work</p>
                <p>Season</p>
                <p>Property values in area</p>
                <p>Access to work space</p>
                <p>Going over contracted hours</p>
                <p>Location</p>
                <p>Necessary equipment rentals</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className={classes.mainContactContainer}>
            <div className={classes.contactInfo}>
              <h1 className={classes.innerTitle}>
                We look forward to getting in touch with you soon!
              </h1>
              <br />
              <h2 className={classes.emailPhoneInfo}>
                Email:&nbsp;
                <a href="mailto:j.c.earthworks@gmail.com?subject=Project Request">
                  j.c.earthworks@gmail.com
                </a>
              </h2>
              <h2 className={classes.emailPhoneInfo}>Phone: xxx-xxx-xxxx</h2>
              <div className={classes.pictureContainer}>
                <img
                  className={classes.contactPic}
                  src="https://thumbs.dreamstime.com/b/planet-earth-space-night-some-elements-image-furnished-nasa-111176972.jpg"
                  alt="contactPic1"
                />
                <img
                  className={classes.contactPic}
                  src="https://thumbs.dreamstime.com/b/theodolite-construction-site-12015421.jpg"
                  alt="contactPic2"
                />
                <img
                  className={classes.contactPic}
                  src="https://thumbs.dreamstime.com/b/project-construction-renovation-house-49925875.jpg"
                  alt="contactPic3"
                />
                <img
                  className={classes.contactPic}
                  src="https://thumbs.dreamstime.com/b/architect-engineer-working-concept-construction-tools-saf-architect-engineer-working-concept-construction-tools-118420998.jpg"
                  alt="contactPic4"
                />
                <img
                  className={classes.contactPic}
                  src="https://thumbs.dreamstime.com/b/new-home-construction-1408651.jpg"
                  alt="contactPic5"
                />
                <img
                  className={classes.contactPic}
                  src="https://thumbs.dreamstime.com/b/home-renovation-construction-diy-abstract-background-tools-wooden-board-closeup-140640845.jpg"
                  alt="contactPic6"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return <div>{CurrentInformation()}</div>;
}

export default MainDisplay;
