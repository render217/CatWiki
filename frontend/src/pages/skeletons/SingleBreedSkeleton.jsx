import React from "react";
import Skeleton from "react-loading-skeleton";

export const SingleBreedSkeleton = () => {
  return (
    <>
      <div className="text-cZinnwalditeBrown flex flex-col md:flex-row gap-4 max-w-6xl mx-auto my-5">
        <div className="basis-1/3">
          <div className="max-w-[400px] md:max-w-[300px] max-h-[350px] mx-auto overflow-hidden">
            <Skeleton width={300} height={300} />
          </div>
        </div>
        <div className="basis-4/6">
          <h2 className="font-bold text-3xl ">
            <Skeleton width={200} />
          </h2>
          <p className="font-medium mt-4 mb-5 ">
            <Skeleton count={4} />
          </p>
          <p className="mb-5 max-w-xl">
            <Skeleton width={500} />
          </p>
          <p className="mb-5">
            <Skeleton width={500} />
          </p>
          <p className="mb-5">
            <Skeleton width={500} />
          </p>
          <div className="max-w-xl space-y-5">
            <Skeleton count={9} />
          </div>
        </div>
      </div>
      <div className="text-cZinnwalditeBrown py-5 my-5">
        <h3 className="font-semibold text-lg mb-5">Other Photos</h3>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {[...Array(6).keys()].map((item, i) => (
            <div
              key={i}
              className="min-h-[180px] max-h-[100px] w-48 overflow-hidden cursor-pointer"
            >
              <Skeleton width={200} height={200} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
