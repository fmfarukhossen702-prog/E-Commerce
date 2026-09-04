import React from "react";

const SecHead = ({title, heading}) => {
  return (
    <div>
      <div className=" flex lg:gap-4 gap-2 items-center mb-2 lg:mb-6 ">
        <span className=" w-5 h-10 rounded-sm bg-primary "> </span>
        <h4 className=" font-semibold text-primary  "> {title} </h4>
      </div>
      <h3 className=" font-semibold text-[28px] lg:text-[36px] font-Inter "> {heading}  </h3>
    </div>
  );
};

export default SecHead;
