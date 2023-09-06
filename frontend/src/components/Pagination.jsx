import React from "react";
import { useNavigate } from "react-router-dom";

export const Pagination = ({ totalPages, currentPage, paginate, refetch }) => {
  const navigate = useNavigate();
  const pageNumbers = [...Array(totalPages).keys()].slice(1).concat(totalPages);

  const activeClass =
    "cursor-pointer text-center border-2 w-10 px-2 py-1 bg-cZinnwalditeBrown text-white";
  const nonActiveClass =
    "cursor-pointer text-center border-2 w-10 px-2 py-1 hover:bg-cZinnwalditeBrown hover:text-white";

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {pageNumbers.map((number,idx) => (
          <span
            key={idx}
            onClick={() => {
              paginate(number);
              refetch()
              navigate(`?page=${number}`)
            }}
            className={`cursor-pointer text-center border-2 w-10 px-2 py-1 ${currentPage == number ? activeClass : nonActiveClass}`}
          >
            {number}

          </span>
        ))}
      </div>
    </>
  );
};
