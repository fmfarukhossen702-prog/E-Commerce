import React, { useState } from "react";
import Container from "../Component/Common/Container";
import BreadCrumb from "../Component/Common/BreadCrumb";
import CardItem from "../Component/Common/CardItem";
import { useSelector } from "react-redux";
import Btn from "../Component/Common/Btn";
import { NavLink } from "react-router";

const CardToAdd = () => {
    const [color, setColor] = useState("color-1");
  const cardItems = useSelector((state) => state.dataStor.card);
  let subTotal = 0;
  cardItems.map((item) => {
    return (subTotal += item.price * item.qunt);
  });

  const [value, setValue] = useState();
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [active, setActive] = useState(
    " Enter a 4-digit coupon code to get $10 off.",
  );

  let couponValue = 1234;


  const handleCoupon = () => {
    if (!value.trim()) {
      setCouponDiscount(0);
      setActive("Enter a 4-digit coupon code to get $10 off. ");
      return;
    }

    if (couponValue === Number(value)) {
      setCouponDiscount(10);
      setActive("Successfully applied! You received a $10 discount.");
    }else{
      setCouponDiscount(0)
      setActive(
        "Wrong number.  Please Enter a 4-digit coupon code to get $10 off.",
      );
    }


  };

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
                value={value}
                onChange={(e) => {
                  setValue(e.target.value.trim());
                }}
                type="number"
                placeholder="Coupon Code"
                className=" rounded-md px-3 h-14 py-4 border shadow-sm border-[#0000003e] "
              />
              <Btn onClick={handleCoupon}>Apply Coupon</Btn>
            </div>

            <p className={`text-sm text-black px-2 py-1 `}> {active}</p>
          </div>

          <div className=" px-6 py-8 border border-[#00000096]  rounded-md w-117.5  ">
            <h3>Cart Total</h3>
            <div className=" flex justify-between items-center border-b pb-3 pt-5 border-b-[#00000030]  ">
              <span> Subtotal: </span> <span>${subTotal.toFixed(2)} </span>
            </div>
            <div className=" flex justify-between items-center border-b pb-3 pt-5 border-b-[#00000030]  ">
              <span> Shipping: </span> <span> $5</span>
            </div>
            <div className=" flex justify-between items-center border-b pb-3 pt-5 border-b-[#00000030]  ">
              <span> Discount: </span> <span> ${couponDiscount}</span>
            </div>
            <div className=" flex justify-between items-center  pb-3 pt-5  ">
              <span> Total: </span>{" "}
              <span> ${(subTotal + 5 - couponDiscount).toFixed(2)}</span>
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
