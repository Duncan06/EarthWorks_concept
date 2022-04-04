import classes from "./MainDisplay.module.css";
import WelcomePage from "./WelcomePage";
import AboutPage from "./AboutPage";
import PricePage from "./PricePage";
import ContactPage from "./ContactPage";

function MainDisplay(props) {
  function CurrentInformation() {
    if (props.home) {
      return (
        <WelcomePage
          option1={props.option1}
          changeOption1={props.changeOption1}
          option2={props.option2}
          changeOption2={props.changeOption2}
          option3={props.option3}
          changeOption3={props.changeOption3}
          option4={props.option4}
          changeOption4={props.changeOption4}
          option5={props.option5}
          changeOption5={props.changeOption5}
          next={props.next}
          previous={props.previous}
        />
      );
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
