import { useState } from "react";
import "./styles.css";
import LargeText from "./components/LargerText";

const App = () => {
  const [counter, setCounter] = useState(0);
  const buttonText = "Click me";
  const onClickHandler = () => {
    console.log(counter);
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <button onClick={onClickHandler}>{buttonText}</button>
      <LargeText text={`Button was clicked ${counter} times`} />
    </div>
  );
};

export default App;
