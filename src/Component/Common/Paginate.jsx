import React, { useEffect, useState } from "react";
import ReactPaginateModule from "react-paginate";
import { useSelector } from "react-redux";
import Card from "./Card";

// const ReactPaginate = ReactPaginateModule.default;
const ReactPaginate = ReactPaginateModule.default || ReactPaginateModule;

const Paginate = ({ itemsPerPage }) => {
  const products = useSelector((state) => state.dataStor.products);
  const filteredProducts = useSelector((state) => state.dataStor.filteredProducts);
  const items = filteredProducts.length > 0 ? filteredProducts : products;


  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((items) => (
            <Card
              key={items.id}
              // item={item}1f040462
              bgCssImage="bg-[#8f81810e]"
              title={items.title}
              image={items.thumbnail}
              discount={items.discountPercentage}
              currentPrice={
                items.price - (items.price * items.discountPercentage) / 100
              }
            />
          ))}
      </>
    );
  }

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`,
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
    <div className="grid grid-cols-3 gap-y-10  gap-5">
        <Items currentItems={currentItems} />
    </div>
    
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        className="flex gap-2 mt-10 mb-7 justify-start items-center cursor-pointer mt-5"
        pageLinkClassName=" bg-[#000] text-white px-5  py-1 rounded-sm"
      />
    </>
  );
};

export default Paginate;
