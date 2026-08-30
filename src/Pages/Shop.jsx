import React, { useEffect, useState } from "react";
import Container from "../Component/Common/Container";
import Card from "../Component/Common/Card";
import cart from "../assets/Cart.png";
import BreadCrumb from "../Component/Common/BreadCrumb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <Container>
        <BreadCrumb />
        <div className=" flex justify-between items-center mb-7.5 ">
          <h3 className=" text-xl font-bold ">Shop by Category</h3>
          <div>
            <div className="flex items-center gap-3 ">
              <span className="  ">Show :</span>
              <span className="w-24 h-7 rounded-sm flex justify-center items-center border ">
                0
              </span>
            </div>
          </div>
        </div>

        <div className=" flex   ">
          <div className=" w-[20%] -mt-10 ">
            <ul className=" text-black bannerCss space-y-4 mt-10 pb-10  ">
              <li className="flex w-full justify-between pr-2 items-center">
                <span>Woman’s Fashion</span>
              </li>
              <li> Men’s Fashion</li>
              <li> Electronics</li>
              <li> Home & Lifestyle</li>
              <li> Medicine</li>
              <li> Sports & Outdoor</li>
              <li> Health & Beauty</li>
              <li> Groceries & </li>
            </ul>
          </div>
          <div className=" w-[80%]   ">
            <div className=" flex flex-wrap justify-between gap-y-6 max-h-150  overflow-y-auto  ">
              {products.map((items) => {
                return (
                  <Card
                    // AddToCardCss="hidden"
                    // disCountCss="hidden"
                    bgCssImage=" bg-[#00000013] "
                    discount={items.discountPercentage}
                    image={items.thumbnail}
                    title={items.title}
                    currentPrice={
                      items.price -
                      (items.discountPercentage * items.price) / 100
                    }
                    regularPrice={items.price}
                    rating={2}
                    review={88}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
