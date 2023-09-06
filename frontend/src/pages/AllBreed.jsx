import React, { useEffect, useState } from "react";
import { BreadCrumb, Pagination } from "../components";
import { Link, useLocation } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { api } from "../api";
import { AllBreedSkeleton } from "./skeletons";

export const AllBreed = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageNumber = searchParams.get("page") || 1;
  const [page, setPage] = useState(pageNumber);

  const {
    loading,
    error,
    refetch,
    response: { breeds, totalPages, currentPage, total },
  } = useAxios({
    axiosInstance: api,
    method: "GET",
    url: `/breeds?page=${page}`,
    requestConfig: {},
  });

  let content = <AllBreedSkeleton />;
  if (loading) {
    
    content = <AllBreedSkeleton />;
  }
  if (error) {
    content = <p className="text-center text-2xl ">{error}</p>;
  }
  let limit = currentPage === 1 ? 0 : (currentPage - 1) * 10;
  if (!loading && breeds?.length) {
    content = breeds.map((breed, idx) => (
      <div key={idx} className="flex flex-col sm:flex-row gap-10 max-w-5xl ">
        <h2 className="max-sm:block hidden text-2xl font-semibold mb-4">
          {idx + 1 + limit}. {breed.name}
        </h2>
        <img
          className="rounded-xl mx-auto  min-w-[200px] max-w-[200px] h-40 object-cover"
          src={breed.images[0].url}
          alt=""
        />
        <div className="flex-1">
          <h2 className="hidden sm:block text-2xl font-semibold mb-4">
            {idx + 1 + limit}. {breed.name}
          </h2>
          <p>{breed.description}</p>
          <Link
            className="font-semibold cursor-pointer duration-300 hover:underline"
            to={`/breeds/${breed.name}`}
          >
            See more
          </Link>
        </div>
      </div>
    ));
  }

  return (
    <div className="text-cZinnwalditeBrown">
      <div>
        <BreadCrumb />
      </div>
      <h1 className="text-3xl font-bold my-3">All Breeds</h1>
      <div className="space-y-10 my-10 min-h-[60vh]">
        {content}
        <div className="flex justify-end">
          {!loading && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              paginate={setPage}
              refetch={refetch}
            />
          )}
        </div>
      </div>
    </div>
  );
};
