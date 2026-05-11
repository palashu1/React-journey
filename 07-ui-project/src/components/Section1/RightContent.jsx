import React from "react";
import RightCard from "./RightCard";
import styles from "./RightContent.module.css";

const RightContent = (props) => {
  return (
    <div
      className={`h-full w-2/3 rounded-4xl overflow-x-auto flex flex-nowrap gap-6 ${styles.right}`}
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={elem.img}
            tag={elem.tag}
            color={elem.color}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
