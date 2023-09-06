import React from "react";
import Skeleton from "react-loading-skeleton";

export const AllBreedSkeleton = () => {
  return (
    <div className="text-cZinnwalditeBrown">
      <div className="space-y-10 my-10">
       
        <div className="flex flex-col sm:flex-row gap-10 max-w-5xl ">
          <h2 className="max-sm:block hidden text-2xl font-semibold mb-4">
            <Skeleton width={240} height={30} />
          </h2>
          <Skeleton width={210} height={180} />
          <div className="flex-1">
            <h2 className="hidden sm:block text-2xl font-semibold mb-4">
              <Skeleton width={240} height={30} />
            </h2>
            <Skeleton count={3}/>
            <Skeleton width={120}/>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 max-w-5xl ">
          <h2 className="max-sm:block hidden text-2xl font-semibold mb-4">
            <Skeleton width={240} height={30} />
          </h2>
          <Skeleton width={210} height={180} />
          <div className="flex-1">
            <h2 className="hidden sm:block text-2xl font-semibold mb-4">
              <Skeleton width={240} height={30} />
            </h2>
            <Skeleton count={3}/>
            <Skeleton width={120}/>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 max-w-5xl ">
          <h2 className="max-sm:block hidden text-2xl font-semibold mb-4">
            <Skeleton width={240} height={30} />
          </h2>
          <Skeleton width={210} height={180} />
          <div className="flex-1">
            <h2 className="hidden sm:block text-2xl font-semibold mb-4">
              <Skeleton width={240} height={30} />
            </h2>
            <Skeleton count={3}/>
            <Skeleton width={120}/>
          </div>
        </div>
      </div>
    </div>
  );
};
