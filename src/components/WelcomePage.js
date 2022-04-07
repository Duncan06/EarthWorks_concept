import Option1 from "./specializations/Option1Welcome";
import Option2 from "./specializations/Option2Welcome";
import Option3 from "./specializations/Option3Welcome";
import Option4 from "./specializations/Option4Welcome";
import Option5 from "./specializations/Option5Welcome";
import DefaultWelcome from "./DefaultWelcome";

function Welcome(props) {
  if (props.option1) {
    return (
      <Option1
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
  } else if (props.option2) {
    return (
      <Option2
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
  } else if (props.option3) {
    return (
      <Option3
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
  } else if (props.option4) {
    return (
      <Option4
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
  } else if (props.option5) {
    return (
      <Option5
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
  } else {
    return (
      <DefaultWelcome
        notHome={props.notHome}
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
  }
}

export default Welcome;
