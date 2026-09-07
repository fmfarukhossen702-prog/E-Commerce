import React, { useState } from "react";
import Container from "../Component/Common/Container";
import BreadCrumb from "../Component/Common/BreadCrumb";
import PaginatedItems from "../Component/Common/Paginate";
import DummyJson from "../Component/Common/DummyJson";
import { useDispatch, useSelector } from "react-redux";
import { filteredProductsReducer, productReducer } from "../Redux/DataStor";
import CardSkeleton from "../Component/Common/CardSkeleton";
import TextSkeleton from "../Component/Common/TextSkeleton";


const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = React.useState(6);
  const category = useSelector((state) => state.dataStor.category);
  const products = useSelector((state) => state.dataStor.products);
  const loding = useSelector((state) => state.dataStor.loding);
  const dispatch = useDispatch();

  const handleCategory = (item) => {
    const filteredProducts = products.filter(
      (categoryItem) => categoryItem.category === item,
    );
    dispatch(filteredProductsReducer(filteredProducts));
  };
  return (
    <div>
      <Container>
        <BreadCrumb />
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-semibold">Shop by Category</h3>
          <div className="flex gap-4 items-center ">
            <h3>show :</h3>
            <select
              className="border border-gray-300 rounded-sm  px-6.5 focus:outline-none focus:ring-2 focus:ring-black-500"
              name=""
              id=""
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <h3
              onClick={() => {
                dispatch(productReducer(products));
                dispatch(filteredProductsReducer([]));
              }}
              className="text-lg cursor-pointer font-semibold mb-4"
            >
              All Products
            </h3>
            {loding ? (
              <div>
                {" "}
                <TextSkeleton />
              </div>
            ) : (
              <ul className="space-y-2">
                {category.map((item) => {
                  return (
                    <li
                      className="cursor-pointer capitalize"
                      onClick={() => handleCategory(item)}
                      key={item.id}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            )}

            <h3 className=" mt-10 mb-5 text-lg font-semibold">Shop by Color</h3>
            <ul className=" space-y-2 ">
              <li>
                <span className=" w-3 h-3 rounded-full bg-black inline-block"></span>
                Color 1
              </li>
              <li>
                <span className=" w-3 h-3 rounded-full bg-[#ff1717] inline-block"></span>
                Color 2
              </li>
              <li>
                <span className=" w-3 h-3 rounded-full bg-[#11ff0d] inline-block"></span>
                Color 3
              </li>
            </ul>
          </div>
          <div className="col-span-9">
            {loding ? (
              <div className=" flex flex-wrap justify-between">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </div>
            ) : (
              <PaginatedItems itemsPerPage={itemsPerPage} />
            )}
          </div>
        </div>
      </Container>
      <DummyJson />
    </div>
  );
};

export default Shop;
