import { useState } from "react";

import Output from "./Output";

export default function Greeting() {
  const [textChanged, setTextChanged] = useState(false);
  function textChangeHandler() {
    setTextChanged(true);
  }
  return (
    <div>
      <h2>Hello World!</h2>
      {!textChanged && <Output>It's good to see you!</Output>}
      {textChanged && <Output>Changed!</Output>}
      <button onClick={textChangeHandler}> Text changed!</button>
    </div>
  );
}
