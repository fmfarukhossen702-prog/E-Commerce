import React from 'react'

const CategoryCard = ({img, name,text}) => {
  return (
    <div className=" w-42.5 cursor-pointer h-36.25 group hover:bg-primary duration-200 rounded-sm flex flex-col border border-[#0000007f] justify-center items-center gap-2 ">
      <div>
        <img src={img} alt="" />
      </div>
      <h3 className="text-5xl group-hover:text-white duration-200 "> {text}</h3>
      <h6 className=" text-black group-hover:text-white duration-200 "> {name} </h6>
    </div>
  );
}

export default CategoryCard
