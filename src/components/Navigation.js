import nav from "./Navigation.module.css";

function Navigation(props) {
  return (
    <header className={nav.navMain}>
      <div className={nav.logo}>J.C. EarthWorks</div>
      <button className={nav.navButton} onClick={props.changeHome}>Home</button>
      <button className={nav.navButton} onClick={props.changeAbout}>About us</button>
      <button className={nav.navButton} onClick={props.changePrice}>Pricing/Estimates</button>
      <button className={nav.navButton} onClick={props.changeContact}>Contact For Hire</button>
    </header>
  );
}

export default Navigation;
