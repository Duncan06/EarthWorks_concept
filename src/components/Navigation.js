import nav from "./Navigation.module.css";

function Navigation() {
  return (
    <div>
      <header className={nav.navMain}>
        <div className={nav.navButton}>Home</div>
        <div className={nav.navButton}>About us</div>
        <div className={nav.navButton}>Pricing/Estimates</div>
        <div className={nav.navButton}>Contact For Hire</div>
      </header>
    </div>
  );
}

export default Navigation;
