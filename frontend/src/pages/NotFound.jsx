import React from "react";
import { BreadCrumb } from "../components";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-[75vh] ">
      <div className=" text-cZinnwalditeBrown text-center my-10 flex flex-wrap gap-5 justify-center items-baseline  divide-cZinnwalditeBrown">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl">This page could not be found.</p>
      </div>
      <h1 className="text-center text-xl">Back to <Link to={'/'} className="font-semibold cursor-pointer"> home page </Link></h1>
    </div>
  );
};
