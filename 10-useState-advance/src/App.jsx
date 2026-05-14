import React, { useState } from "react";

const App = () => {
  let [num, setNum] = useState([10, 20, 30]);
  //let [num, setNum] = useState({ user: "ashu", age: 25 });
  const btnClicked = () => {
    // let newNum = [...num]; //Destructure
    // newNum.push(99);
    // setNum(newNum);

    // second way to doing that

    setNum((prev) => [...prev, 90]);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  );
};

export default App;
