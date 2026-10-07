import { SiDeliveroo } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import { postalReducer } from '../../Redux/DataStor';
import Btn from './Btn';
import { CiSearch } from 'react-icons/ci';
import { FiInfo } from 'react-icons/fi';
import { PiArrowElbowRight } from 'react-icons/pi';
import { useState } from 'react';

const FreeDelivery = () => {
    const dispatch = useDispatch();
    const postalCode = useSelector((state) => state.dataStor.postalCode);
    const [activeOff , setActiveOff] = useState(false)
    const [value, setValue] = useState(String(postalCode ?? ""));
    const isFreeDelivery = postalCode === "4321";
    const codePostal = 4321;

    const hendleClick = (e) => {
       e.preventDefault();
      
       if( Number(value) === codePostal ){
         setActiveOff(false)
         dispatch(postalReducer(value))
        
       }else{
         setActiveOff(true)
       }
    }

  return (
    <div className=" w-full h-full py-5 px-6 bg-white rounded-2xl">
      <div className=" flex gap-5 items-center  ">
        <div className="w-15 h-15 rounded-full bg-black flex justify-center items-center">
          <SiDeliveroo className=" text-5xl text-red-600" />
        </div>

        <div className=" pl-5 border-l border-l-[#0000002c] ">
          <h3 className="text-2xl font-semibold">Free Delivery</h3>

          <p className=" text-gray-500">
            Enter your postal code to check availability
          </p>
        </div>
      </div>

      <div className=" mt-6 flex justify-between items-center  ">
        <input
          className="py-3 w-100 rounded-md px-5  border-2 border-[#0909091b] outline-none"
          value={isFreeDelivery ? "" : value}
          onChange={(e) => setValue(e.target.value)}
          disabled={isFreeDelivery}
          type="text"
          inputMode="numeric"
          name="postalCode"
          aria-label="Postal code"
          placeholder=" Enter postal code"
        />
        <Btn onClick={hendleClick} className="  bg-black! text-white!  flex items-center gap-3  ">
          {" "}
          <CiSearch className=" text-xl font-bold! " /> Chack
        </Btn>
      </div>
      <div className=" mt-3 flex text-sm! text-[#00000099]  items-center gap-3">
        <FiInfo />
        <p>We offer free delivery in selected areas only.</p>
      </div>

      <div className=" mt-8 flex justify-between items-center ">
        {isFreeDelivery && (
          <div
            className={`   w-72 bg-[#3ca06e29] rounded-xl py-4 px-4   grid grid-cols-6 gap-5`}
          >
            <div className="col-span-1 w-8 h-8 rounded-full text-white font-bold! text-lg bg-[#3CA06E] flex justify-center items-center ">
              {" "}
              <PiArrowElbowRight />
            </div>
            <div className=" col-span-5 ">
              <h3 className=" text-[#157444e9] text-lg ">
                Free Delivery is available for your area!
              </h3>
              <p className=" text-sm text-black mt-2 ">
                {" "}
                Your postal code matches our delivery area
              </p>
            </div>
          </div>
        )}

        {activeOff && (
          <div
            className={`w-72 bg-[#fa3c5c44] rounded-xl py-4 px-4   grid grid-cols-6 gap-5 `}
          >
            <div className="col-span-1 w-8 h-8 rounded-full text-white font-bold! text-lg bg-[#FA3C5B] flex justify-center items-center ">
              {" "}
              X
            </div>
            <div className=" col-span-5 ">
              <h3 className=" text-[#c8324beb] text-lg ">
                Free Delivery is available for your area!
              </h3>
              <p className=" text-sm text-black mt-2 ">
                {" "}
                Your postal code matches our delivery area
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FreeDelivery
