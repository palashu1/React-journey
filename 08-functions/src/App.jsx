import React from "react";

const App = () => {
  const btnClickCount = () => {
    console.log("Button clicked");
  };
  return (
    <div>
      <button onClick={btnClickCount}>Click Here</button>
    </div>
  );
};

export default App;
