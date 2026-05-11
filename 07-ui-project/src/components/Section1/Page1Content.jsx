import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  return (
    <div className="h-[90vh] py-3 px-18 flex gap-10 items-center pb-9">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
