import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload) and this called form handling in React. It allows you to handle the form submission in JavaScript without causing a page refresh.
    console.log("Form Submit");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
