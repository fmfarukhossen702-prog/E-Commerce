import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Card from '../Common/Card'
const PaginateComponent = ReactPaginate.default || ReactPaginate

const Paginate = ({ itemsPerPage, products }) => {
  const items = products;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((items) => (
            <Card
              // AddToCardCss="hidden"
              // disCountCss="hidden"
              bgCssImage=" bg-[#00000013] "
              discount={items.discountPercentage}
              image={items.thumbnail}
              title={items.title}
              currentPrice={
                items.price - (items.discountPercentage * items.price) / 100
              }
              regularPrice={items.price}
              rating={2}
              review={88}
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
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <PaginateComponent
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className=" flex gap-4 "
        pageClassName=" px-6.25 py-0.50 rounded-sm  bg-black text-white cursor-pointer "
      />
    </>
  );
};

export default Paginate;
