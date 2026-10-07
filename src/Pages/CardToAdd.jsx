import React, { useState } from "react";
import Container from "../Component/Common/Container";
import BreadCrumb from "../Component/Common/BreadCrumb";
import CardItem from "../Component/Common/CardItem";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../Component/Common/Btn";
import { NavLink } from "react-router";
import { couponReducer } from "../Redux/DataStor";

const CardToAdd = () => {

  const dispatch = useDispatch()


  // state

  // const [couponDiscount, setCouponDiscount] = useState(0);
  // const [active, setActive] = useState(
  //   " Enter a 4-digit coupon code to get $10 off.",
  // );

  // dataStor state 
  const cardItems = useSelector((state) => state.dataStor.card);
  const postalCode = useSelector((state) => state.dataStor.postalCode);
  const couponCode = useSelector((state) =>  state.dataStor.couponCode )
 console.log(couponCode)

  const [value, setValue] = useState(  "");

  const isFreeDelivery = postalCode === "4321";
  const delivery = isFreeDelivery ? 0 : 5;

  let subTotal = 0;
  cardItems.map((item) => {
    return (subTotal += item.price * item.qunt);
  });
 const isCouponApplied = Number(couponCode) === 1234;
 const couponDiscount = isCouponApplied ?10 : 0 

 

  const handleCoupon = () => {
      let count = 1234
      if (Number(value) === count ){
    
        dispatch(couponReducer(count)), setValue("")

         
  }}

   const active = isCouponApplied
    ? "Already successfully our coupon code"
    : " Enter a 4-digit coupon code to get $10 off.";


  // let couponValue = 1234;

  // const handleCoupon = () => {
  //   if (!couponCode.trim()) {
  //     setCouponDiscount(0);
  //     setActive("Enter a 4-digit coupon code to get $10 off. ");
  //     return;
  //   }
  
  //   if (couponValue === Number(value)) {
  //     setCouponDiscount(10);
  //     setActive("Successfully applied! You received a $10 discount.");
  //   } else {
  //     setCouponDiscount(0);
  //     setActive(
  //       "Wrong number.  Please Enter a 4-digit coupon code to get $10 off.",
  //     );
  //   }
  // };

  return (
    <div className="pb-52">
      <Container>
        <BreadCrumb />
        <div className=" flex justify-between px-10 py-6 rounded-sm shadow-sm ">
          <h3 className="w-[25%]  ">Product</h3>
          <h3 className="w-[25%]  ">Price</h3>
          <h3 className="w-[25%]  ">Quantity</h3>
          <h3 className="w-[25%]  ">Subtotal</h3>
        </div>
        {cardItems.map((item) => {
          return (
            <CardItem
              id={item.id}
              imgSrc={item.thumbnail}
              price={item.price}
              brand={item.brand}
              qunt={item.qunt}
            />
          );
        })}

        <div className=" flex justify-between items-center mt-5 mb-20">
          <NavLink
            to="/shop"
            end
            className="   bg-white text-black border  py-4 px-12 cursor-pointer border-[#00000031]  shadow-sm  "
          >
            {" "}
            Return To Shop
          </NavLink>

          <Btn className=" bg-white text-black border border-[#00000031] shadow-sm ">
            Update Cart
          </Btn>
        </div>

        <div className=" flex justify-between ">
          <div>
            <div className=" flex gap-3  ">
              <input
                value={isCouponApplied ? "": value}
                onChange={(e) => {
                  e.preventDefault;
                  setValue(e.target.value.trim());
                }}
                type="text"
                placeholder="Coupon Code"
                className=" rounded-md px-3 h-14 py-4 border shadow-sm border-[#0000003e] "
              />
              <button className=" py-3 px-6 bg-primary rounded-md text-white " onClick={handleCoupon}>Apply Coupon</button>
            </div>

            <p className={`text-sm text-black px-2 py-1 `}> {active}</p>
          </div>

          <div className=" px-6 py-8 border border-[#00000096]  rounded-md w-117.5  ">
            <h3>Cart Total</h3>
            <div className=" flex justify-between items-center border-b pb-3 pt-5 border-b-[#00000030]  ">
              <span> Subtotal: </span> <span>${subTotal.toFixed(2)} </span>
            </div>
            <div className=" flex justify-between items-center border-b pb-3 pt-5 border-b-[#00000030]  ">
              <span> Shipping: </span>{" "}
              <span className=" text-sm ">
                {" "}
                {isFreeDelivery && "Postal code matches your delivery Free"}
              </span>{" "}
              <span className=" font-medium">
                {" "}
                {isFreeDelivery ? "Free" : `$${delivery}`}{" "}
              </span>
            </div>
            <div className=" flex justify-between items-center border-b pb-3 pt-5 border-b-[#00000030]  ">
              <span> Discount: </span> <span> ${couponDiscount}</span>
            </div>
            <div className=" flex justify-between items-center  pb-3 pt-5  ">
              <span> Total: </span>{" "}
              <span> ${(subTotal + delivery - couponDiscount).toFixed(2)}</span>
            </div>
            <div className=" text-center">
              {" "}
              <Btn>Procees to checkout</Btn>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CardToAdd;
