import classes from "./MainDisplay.module.css";
import WelcomePage from "./WelcomePage";
import AboutPage from "./AboutPage";

function MainDisplay(props) {
  function CurrentInformation() {
    if (props.home) {
      return <WelcomePage />;
    } else if (props.about) {
      return <AboutPage />;
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
