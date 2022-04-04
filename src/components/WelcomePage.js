import Option1 from "./Option1Welcome";
import Option2 from "./Option2Welcome";
import Option3 from "./Option3Welcome";
import Option4 from "./Option4Welcome";
import Option5 from "./Option5Welcome";
import DefaultWelcome from "./DefaultWelcome";

function Welcome(props) {
  if (props.option1) {
    return (
      <Option1
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
