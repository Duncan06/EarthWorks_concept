import classes from "./MainInfo2.module.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SunnyIcon from "@material-ui/icons/WbSunny";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LocalShippingIcon from "@material-ui/icons/Landscape";
import GridOnIcon from "@material-ui/icons/GridOn";

function MainInfo2(props) {
  return (
    <div className={classes.info2}>
      <h1 className={classes.info2Title}>Specializations</h1>
      <button className={classes.optionOneHome} onClick={props.changeOption1}>
        <h2>Foundation leveling</h2>
        <LocalShippingIcon className={classes.optionOneIcon} />
      </button>
      <button className={classes.optionTwoHome} onClick={props.changeOption2}>
        <h2>Irrigation</h2>
        <SunnyIcon className={classes.optionTwoIcon} />
      </button>
      <button className={classes.optionThreeHome} onClick={props.changeOption3}>
        <h2>Site Anaylsis</h2>
        <GridOnIcon className={classes.optionTwoIcon} />
      </button>
      <button className={classes.optionFourHome} onClick={props.changeOption4}>
        <h2>Consulting</h2>
        <VerifiedUserIcon className={classes.optionTwoIcon} />
      </button>
      <button className={classes.optionFiveHome} onClick={props.changeOption5}>
        <h2>Code Compliance</h2>
        <MenuBookIcon className={classes.optionOneIcon} />
      </button>
    </div>
  );
}

export default MainInfo2;
