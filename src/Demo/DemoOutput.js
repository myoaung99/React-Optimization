import React from "react";
const DemoOutput = (props) => {
  console.log("Demo Running");
  return <p>{props.show ? "This is paragraph" : ""}</p>;
};

export default React.memo(DemoOutput);
