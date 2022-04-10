import React, { Suspense } from 'react';

const Option1 = React.lazy(() => import("./specializations/Option1Welcome"));
const Option2 = React.lazy(() => import("./specializations/Option2Welcome"));
const Option3 = React.lazy(() => import("./specializations/Option3Welcome"));
const Option4 = React.lazy(() => import("./specializations/Option4Welcome"));
const Option5 = React.lazy(() => import("./specializations/Option5Welcome"));
const DefaultWelcome = React.lazy(() => import("./DefaultWelcome"));

function Welcome(props) {
  if (props.option1) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    );
  } else if (props.option2) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    );
  } else if (props.option3) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    );
  } else if (props.option4) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    );
  } else if (props.option5) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    );
  }
}

export default Welcome;
