import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted by", title);
    settitle("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          onChange={(Enum) => {
            settitle(Enum.target.value);
          }}
          value={title} //two-way-binding
          type="text"
          placeholder="Enter your name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
