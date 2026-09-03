import React, { useEffect, useState } from "react";
import Container from "../Component/Common/Container";
import Card from "../Component/Common/Card";
// import cart from "../assets/Cart.png";
import BreadCrumb from "../Component/Common/BreadCrumb";
import Paginate from "../Component/Common/Paginate";
import CardSkeleton from "../Component/Common/CardSkeleton";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [show , setShow] = useState(6)
  const [loding , setLoding] = useState(true)

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .then(()=> setLoding(false))
  }, []);

  return (
    <div className=" mb-25">
      <Container>
        <BreadCrumb />
        <div className=" flex justify-between items-center mb-7.5 ">
          <h3 className=" text-xl font-bold ">Shop by Category</h3>
          <div>
            <div className="flex items-center gap-3 ">
              <h4>Show :</h4>
              <select
                onChange={(e) => setShow(e.target.value)}
                name=""
                id=""
                className=" px-10.75 py-1 rounded-sm border border-gray-400 "
              >
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
              </select>
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
          <div className=" w-[80%]  ">
            <div className=" flex flex-wrap justify-between gap-y-10   ">
             
              {loding ? (
                <div className="flex flex-wrap justify-between">
                    <CardSkeleton /> 
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />

                </div>
              ) : (
                <Paginate itemsPerPage={show} products={products} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
