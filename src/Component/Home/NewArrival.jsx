import React from "react";
import Container from "../Common/Container";
import SecHead from "./SecHead";
import img1 from "../../assets/Frame684.png";
import ArrivalCard from "../Common/ArrivalCard";
import img2 from "../../assets/Frame685.png";
import img3 from "../../assets/Frame686.png";
import img4 from "../../assets/Frame687.png";
import ArrivalCardTwo from "../Common/ArrivalCardTwo";
import delivery from '../../assets/icon-delivery.png'
import img5 from '../../assets/Icon-Customerservice.png'
import img6 from '../../assets/Icon-secure.png'

const NewArrival = () => {
  return (
    <div>
      <Container>
        <SecHead title="Featured" heading="New Arrival" />
        <div className="grid grid-cols-2 gap-7.5 mt-15 ">
          {/* first  */}
          <div className=" col-span-1 relative rounded-sm ">
            <ArrivalCard
              image={img1}
              title="PlayStation 5"
              heading="Black and White version of the PS5 coming out on sale."
              shopNow="Shop Now"
            />
          </div>
          {/* secend  */}
          <div className=" col-span-1 grid grid-rows-2 gap-7.5 ">
            <div className=" row-span-1 relative ">
              <div>
                <ArrivalCard
                  className=" w-64.75 "
                  image={img2}
                  title="Women’s Collections"
                  heading="Featured woman collections that give you another vibe."
                  shopNow="Shop Now"
                />
              </div>
            </div>
            <div className=" row-span-1 grid grid-cols-2  ">
              <div className=" col-span-1  relative ">
                <ArrivalCard
                  className=" bottom-6 left-6"
                  image={img3}
                  title="Speakers"
                  heading="Amazon wireless speakers"
                  shopNow="Shop Now"
                />
              </div>
              <div className=" col-span-1 relative ">
                <ArrivalCard
                  className=" bottom-6 left-6"
                  image={img4}
                  title="Perfume"
                  heading="GUCCI INTENSE OUD EDP"
                  shopNow="Shop Now"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between mt-35 ">
          <ArrivalCardTwo
            image={delivery}
            title="FREE AND FAST DELIVERY"
            heading="Free delivery for all orders over $140"
          />
          <ArrivalCardTwo
            image={img5}
            title="24/7 CUSTOMER SERVICE"
            heading="Friendly 24/7 customer support"
          />
          <ArrivalCardTwo
            image={img6}
            title="MONEY BACK GUARANTEE"
            heading="We reurn money within 30 days"
          />
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;
