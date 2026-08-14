import React from "react";
import Container from "../Common/Container";
import SecHead from "./SecHead";
import Btn from "../Common/Btn";
import cart from '../../assets/Cart.png'
import Card from '../Common/Card'
import cart1 from '../../assets/Cart1.png'
import box from '../../assets/box.png'
import table from '../../assets/table.png'

const BestSells = () => {
  return (
    <div className="pt-17.5">
      <Container>
        <div className=" flex justify-between items-end ">
          <SecHead title="This Month " heading="  Best Selling Products" />
          <Btn> View All</Btn>
        </div>

        <div className="mt-15">
          <Card
            AddToCardCss="hidden"
            disCountCss="hidden"
            image={cart}
            title="The north coat"
            currentPrice="$260"
            regularPrice="$360"
            rating={5}
            review="(65)"
          />
          <Card
            AddToCardCss="hidden"
            disCountCss="hidden"
            image={cart1}
            title="Gucci duffle bag"
            currentPrice="$960"
            regularPrice="$1160"
            rating={4.4}
            review="(65)"
          />
          <Card
            AddToCardCss="hidden"
            disCountCss="hidden"
            image={box}
            title="RGB liquid CPU Cooler"
            currentPrice="$170"
            regularPrice="$260"
            rating={3.4}
            review="(65)"
          />
          <Card
            AddToCardCss="hidden"
            disCountCss="hidden"
            image={table}
            title="Small BookSelf"
            currentPrice="$360"
            regularPrice="$520"
            rating={2.6}
            review="(65)"
          />
        </div>
      </Container>
    </div>
  );
};

export default BestSells;
