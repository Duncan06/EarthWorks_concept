import nav from "./Navigation.module.css";
import useWindowDimensions from "./useWindowDimensions";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import DescriptionIcon from "@material-ui/icons/Description";
import PaymentsIcon from "@material-ui/icons/Payment";
import WorkIcon from "@material-ui/icons/Work";

function Navigation(props) {
  const { width } = useWindowDimensions();
  const mobileWidth = 750;

  function toggleMenu() {
    const current = document.documentElement.style;
    if (current.getPropertyValue("--visible") === "0") {
      current.setProperty("--visible", "1");
      current.setProperty("--height", "300px");
    } else {
      current.setProperty("--visible", "0");
      current.setProperty("--height", "10px");
    }
  }

  function NavDisplay() {
    if (width > mobileWidth) {
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
    } else {
      return (
        <div>
          <header className={nav.navMain}>
            <div className={nav.logo}>
              J.C. EarthWorks LLC{" "}
              <button className={nav.collapsedMenu} onClick={toggleMenu}>
                <MenuIcon /> Menu
              </button>
            </div>
          </header>
          <div className={nav.showOptions}>
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
          </div>
        </div>
      );
    }
  }

  return <div>{NavDisplay()}</div>;
}

export default Navigation;
