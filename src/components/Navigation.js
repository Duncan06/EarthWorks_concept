import nav from "./Navigation.module.css";
import HomeIcon from "@material-ui/icons/Home";
import DescriptionIcon from "@material-ui/icons/Description";
import PaymentsIcon from "@material-ui/icons/Payment";
import WorkIcon from "@material-ui/icons/Work";

function Navigation(props) {
  return (
    <header className={nav.navMain}>
      <div className={nav.logo}>J.C. EarthWorks LLC</div>
      <button className={nav.navButton} onClick={props.changeHome}>
        <HomeIcon />
        Home
      </button>
      <button className={nav.navButton} onClick={props.changeAbout}>
        <DescriptionIcon />
        About us
      </button>
      <button className={nav.navButton} onClick={props.changePrice}>
        <PaymentsIcon />
        Pricing/Estimates
      </button>
      <button className={nav.navButton} onClick={props.changeContact}>
        <WorkIcon />
        Contact For Hire
      </button>
    </header>
  );
}

export default Navigation;
