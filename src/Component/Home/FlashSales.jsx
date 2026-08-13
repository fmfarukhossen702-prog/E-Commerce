import React from "react";
import SecHead from "./SecHead";
import Container from "../Common/Container";
import CountDown from "../Common/CountDown";
import Card from "../Common/Card";

const FlashSales = () => {
  return (
    <div className=" py-37.5 bg-white ">
      <Container>
        <div className=" flex items-end gap-22 mb-10 ">
          <SecHead title="Today’s" heading="Flash Sales" />
          <CountDown />
        </div>

        <div>
          <Card/>
        </div>
      </Container>
    </div>
  );
};

export default FlashSales;
