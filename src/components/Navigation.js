import { useState } from "react";
import nav from "./Navigation.module.css";
import useWindowDimensions from "./useWindowDimensions";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import DescriptionIcon from "@material-ui/icons/Description";
import PaymentsIcon from "@material-ui/icons/Payment";
import WorkIcon from "@material-ui/icons/Work";

function Navigation(props) {
  const { width } = useWindowDimensions();
  const [showing, setShowing] = useState(false);
  const mobileWidth = 750;

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
              J.C. EarthWorks LLC
              <button
                className={nav.collapsedMenu}
                onClick={() => setShowing(!showing)}
              >
                {showing ? <CloseIcon /> : <MenuIcon />} Menu
              </button>
            </div>
          </header>
          {showing && (
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
          )}
        </div>
      );
    }
  }

  return <div>{NavDisplay()}</div>;
}

export default Navigation;
