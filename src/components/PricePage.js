import classes from "./PricePage.module.css";

function PricePage() {
  return (
    <div>
      <div className={classes.mainPriceContainer}>
        <div className={classes.mainPrice}>
          <h1 className={classes.innerTitle}>Prices</h1>
          <div className={classes.innerPriceText}>
            <h4 className={classes.innerPriceTextDisclaimer}>
              There are several factors that go into prices, but we would love
              to supply an estimate if you reach out to us. Some things to
              consider is the amount of land, the type of work, the amount of
              equipment needed, and any special constraints that may come along
              with the job.
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
}

export default PricePage;
