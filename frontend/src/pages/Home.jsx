import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../components";

export const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative " onClick={() => setOpen(false)}>
        <img
          className="absolute object-cover w-full h-full -z-10 rounded-t-3xl"
          src="/images/HeroImagelg.png"
          alt=""
        />
        <div className=" px-10 py-20 ">
          <img
            className="h-24 invert contrast-[150%]"
            src="CatwikiLogo.svg"
            alt=""
          />
          <p className="mt-8 mb-10 text-white text-2xl">
            Get to know more about your <br /> cat breed
          </p>
          <SearchBar open={open} setOpen={setOpen} />
        </div>
      </div>

      <div className="rounded-b-3xl bg-cPerlBush text-cZinnwalditeBrown  py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative">
            <p className=" border-black pb-2">Most Searched Breeds</p>
            <span className="absolute bottom-0 w-20 bg-cZinnwalditeBrownOp h-1"></span>
          </div>
          <div className="flex items-center justify-between max-sm:flex-wrap mb-5">
            <h2 className="font-semibold text-5xl mt-6 mb-10">
              66+ Breeds For you <br /> to discover
            </h2>
            <Link to="/breeds">
              <p className="cursor-pointer border-b hover:border-black duration-300">
                See more
              </p>
            </Link>
          </div>
          <div className="grid gap-5 max-md:justify-center sm:grid-cols-2 md:grid-cols-4">
            <div className=" max-w-[250px] rounded-t-3xl ">
              <img
                className="object-cover  h-5/6 rounded-3xl"
                src="https://cdn2.thecatapi.com/images/8kl.jpg"
                alt=""
              />
              <p className="font-semibold my-3 text-lg">Bengal</p>
            </div>
            <div className="max-w-[250px]  rounded-t-3xl ">
              <img
                className="object-cover h-5/6 rounded-3xl"
                src="https://cdn2.thecatapi.com/images/3m3.jpg"
                alt=""
              />
              <p className="font-semibold my-3 text-lg">Balinese</p>
            </div>
            <div className="max-w-[250px]  rounded-t-3xl ">
              <img
                className="object-cover h-5/6 rounded-3xl"
                src="https://cdn2.thecatapi.com/images/E4j4aBDx9.jpg"
                alt=""
              />
              <p className="font-semibold my-3 text-lg">Chantilly-Tiffany</p>
            </div>
            <div className="max-w-[250px]  rounded-t-3xl ">
              <img
                className="object-cover h-5/6 rounded-3xl"
                src="https://cdn2.thecatapi.com/images/QZYN75HxN.jpg"
                alt=""
              />
              <p className="font-semibold my-3 text-lg">Persian</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-b-3xl  text-cZinnwalditeBrown  py-10">
        <div className="mx-auto max-w-6xl px-4 grid  gap-5 sm:grid-cols-2 items-center">
          <div className="relative">
            <span className="absolute w-20 bg-cZinnwalditeBrownOp h-1"></span>
            <h2 className="font-semibold text-5xl mt-4 mb-10 pt-12">
              Why should you <br /> have a cat?
            </h2>
            <p className="my-10 max-w-sm">
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              leves
            </p>
            <div className="space-x-4">
              <span className="cursor-pointer">Read more</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-5 ">
            <img
              className="col-start-1 col-end-4 row-span-1"
              src="images/image2.png"
              alt=""
            />
            <img
              className="col-span-2 row-span-2"
              src="images/image3.png"
              alt=""
            />
            <img
              className="col-start-2 col-end-4 row-span-5 "
              src="images/image1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
