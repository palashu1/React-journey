import React from "react";
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="top-0 left-0 h-full w-full absolute p-7 flex flex-col justify-between  bg-black/30">
      <h2 className="bg-white text-2xl font-semibold h-9 w-9 rounded-full flex items-center justify-center">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-xl font-semibold  text-white mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit libero
          quo, et doloribus explicabo molestiae.
        </p>
        <div className="flex justify-between items-center gap-5">
          <button
            style={{
              backgroundColor: props.color,
              color:
                props.color === "lightgreen" ||
                props.color === "pink" ||
                props.color === "cyan"
                  ? "black"
                  : "white",
            }}
            className="font-medium text-white px-8 py-1 rounded-full"
          >
            {props.tag}
          </button>
          <button
            style={{
              backgroundColor: props.color,
              color:
                props.color === "lightgreen" ||
                props.color === "pink" ||
                props.color === "cyan"
                  ? "black"
                  : "white",
            }}
            className="font-medium text-white px-5 py-1 rounded-full"
          >
            <ArrowRight size={25} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
