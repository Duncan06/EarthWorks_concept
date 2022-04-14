import React, { Suspense } from "react";

const DefaultSubject = React.lazy(() =>
  import("./specializations/DefaultSubject")
);
const Option1 = React.lazy(() => import("./specializations/Option1Welcome"));
const Option2 = React.lazy(() => import("./specializations/Option2Welcome"));
const Option3 = React.lazy(() => import("./specializations/Option3Welcome"));
const Option4 = React.lazy(() => import("./specializations/Option4Welcome"));
const Option5 = React.lazy(() => import("./specializations/Option5Welcome"));

function SubjectSection(props) {
  function SubjectSectionSelection() {
    if (props.option1) {
      return <Option1 />;
    } else if (props.option2) {
      return <Option2 />;
    } else if (props.option3) {
      return <Option3 />;
    } else if (props.option4) {
      return <Option4 />;
    } else if (props.option5) {
      return <Option5 />;
    } else {
      return <DefaultSubject notHome={props.notHome} />;
    }
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {SubjectSectionSelection()}
    </Suspense>
  );
}

export default SubjectSection;
