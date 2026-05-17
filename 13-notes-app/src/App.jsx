import React, { useState } from "react";
import { CloudCog, Delete, X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);
  const submithandler = (e) => {
    e.preventDefault(); //stop page reload and it is called "form handling"
    let copyTask = [...task]; //Destructuring
    copyTask.push({ title, detail });
    setTask(copyTask);

    setTitle("");
    setDetail("");
  };

  const deleteNote = (idx) => {
    let copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };
  return (
    <div className="lg:h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
        className="flex items-start lg:w-1/2 gap-4 flex-col p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-2 border-2 rounded outline-none font-medium"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Write details here"
          className="px-5 w-full py-2 border-2 rounded h-32 outline-none font-medium"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />

        <button className="bg-white active:scale-95 w-full px-5 py-2 text-black font-medium rounded cursor-pointer outline-none">
          Add Note
        </button>
      </form>
      <div className="p-10 lg:w-1/2 lg:border-l">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="relative h-54 items-start w-45 bg-cover px-5 py-9 rounded-2xl text-black justify-start bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3bUzcfjXEgpNynCGXAL2naN49al7QDepIQ&s')]"
              >
                <h2
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="absolute top-0 right-0 bg-red-500 rounded-full p-1 mt-1 active:scale-95 cursor-pointer"
                >
                  <X size={15} color="#fffafa" strokeWidth={3} />
                </h2>
                <h3 className="font-bold text-xl leading-tight">
                  {elem.title}
                </h3>
                <p className="font-medium mt-4 leading-tight text-gray-500">
                  {elem.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
