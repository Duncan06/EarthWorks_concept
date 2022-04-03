import classes from "./MainDisplay.module.css";
import WelcomePage from "./WelcomePage";
import AboutPage from "./AboutPage";
import PricePage from "./PricePage";
import ContactPage from "./ContactPage";

function MainDisplay(props) {
  function CurrentInformation() {
    if (props.home) {
      return <WelcomePage />;
    } else if (props.about) {
      return <AboutPage />;
    } else if (props.price) {
      return <PricePage />;
    } else {
      return <ContactPage />;
    }
  }
  return <div>{CurrentInformation()}</div>;
}

export default MainDisplay;
