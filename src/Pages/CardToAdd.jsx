import React from "react";
import Container from "../Component/Common/Container";
import BreadCrumb from "../Component/Common/BreadCrumb";
import CardItem from "../Component/Common/CardItem";
import { useSelector } from "react-redux";


const CardToAdd = () => {

  const cardItems = useSelector((state) => state.dataStor.card)


  return (
    <div className="pb-52">
      <Container>
        <BreadCrumb />
        <div className=" flex justify-between px-10 py-6 rounded-sm shadow-sm ">
          <h3 className="w-[25%]  " >Product</h3>
          <h3 className="w-[25%]  " >Price</h3>
          <h3 className="w-[25%]  " >Quantity</h3>
          <h3 className="w-[25%]  " >Subtotal</h3>
        </div>
        {
          cardItems.map((item) => {
            return <CardItem imgSrc={item.thumbnail}
            price={item.price} brand={item.brand} />;
          })
        }


        
      </Container>
    </div>
  );
};

export default CardToAdd;
