import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const incVal = () => {
    setCounter(counter + 1);
  };

  const decVal = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Value: {counter}</h1>
      <button onClick={incVal}>Value add</button>
      <button onClick={decVal}>Value Remove</button>
    </>
  );
}

export default App;
