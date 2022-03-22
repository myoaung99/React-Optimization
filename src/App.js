import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./Demo/DemoOutput";

function App() {
  const [isShown, setIsShown] = useState(false);
  const showTogglerHandler = () => {
    setIsShown((prevState) => !prevState);
  };

  console.log("App Running");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={true} />
      <Button onClick={showTogglerHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
