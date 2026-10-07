import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decrementReducer,
  // decrementReducer,
  incrementReducer,
  removeReducer,
} from "../../Redux/DataStor";
import { toast, Bounce } from "react-toastify";

const CardItem = ({ imgSrc, price, brand, id, qunt }) => {
  const dispatch = useDispatch();

  const notify = () => {
    toast.error("Remove Items", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };




  return (
    <div>
      <div className=" flex justify-between items-center mt-10 px-10 py-6 rounded-sm shadow-sm ">
        <div className="  w-[25%] flex items-center gap-4">
          <div>
            <span
              onClick={() => {
                dispatch(removeReducer(id));
                notify();
              }}
              className=" cursor-pointer  w-5 h-5 rounded-full flex justify-center  items-center bg-primary text-white p-2 text-[10px] "
            >
              X
            </span>
            <img className=" w-12.5 h-10 " src={imgSrc} alt="" />
          </div>
          <h3>{brand}</h3>
        </div>
        <h3 className="  w-[25%] ">${price}</h3>
        <div className="w-[25%] mx-auto ">
          <div className="  h-11 w-18 flex justify-center rounded-sm border border-[#00000061] items-center gap-4 ">
            <h6>{qunt}</h6>
            <div className=" flex flex-col ">
              <MdOutlineKeyboardArrowUp className=" cursor-pointer "   onClick={()=>    dispatch(incrementReducer(id)) } />
              <MdOutlineKeyboardArrowDown className=" cursor-pointer "   onClick={() => dispatch(decrementReducer(id)) }  />
            </div>
          </div>
        </div>

        <h3 className=" w-[25%]  ">${(price * qunt).toFixed(2)} </h3>
      </div>
    </div>
  );
};

export default CardItem;
