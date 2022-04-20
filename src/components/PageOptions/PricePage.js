import classes from "./PricePage.module.css";
import CustomerValidation from "./CustomerValidation";

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
          <h1 className={classes.innerTitle}>Customer Info</h1>
          <CustomerValidation />
        </div>
      </div>
    </div>
  );
}

export default PricePage;
