import React, { useState } from "react";

const App = () => {
  let [num, setnum] = useState(0);
  return (
    <div className="section1">
      <p>{num}</p>

      <div className="buttonSec">
        <div
          onClick={() => {
            setnum(num + 1);
          }}
          className="left"
        >
          Increament
        </div>

        <div
          onClick={() => {
            setnum(0);
          }}
          className="center"
        >
          Reset
        </div>

        <div
          onClick={() => {
            setnum(num - 1);
          }}
          className="right"
        >
          Decreaent
        </div>
      </div>
    </div>
  );
};

export default App;
