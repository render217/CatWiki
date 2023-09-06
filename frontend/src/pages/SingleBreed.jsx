import React, { useCallback, useEffect, useState } from "react";
import { BreadCrumb, Skill } from "../components";
import { api } from "../api";
import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { SingleBreedSkeleton } from "./skeletons";

export const SingleBreed = () => {
  const { breedName } = useParams();
  const [selectedIndex,setSelectedIndex] = useState(0)
  const {
    response: { breed },
    error,
    loading,
  } = useAxios({
    axiosInstance: api,
    method: "GET",
    url: `/breeds/${breedName}`,
    requestConfig: {},
  });

  let content = <SingleBreedSkeleton />;

  if (loading) {
    content = <SingleBreedSkeleton />;
  }
  if (error) {
    content = (
      <main className="min-h-[75vh]">
        <p className="text-center text-red-600">{error}</p>
      </main>
    );
  }
  if (!loading && breed) {
    content = (
      <>
        <div className="text-cZinnwalditeBrown flex flex-col md:flex-row gap-4 max-w-6xl mx-auto my-5">
          <div className="basis-1/3">
            <div className="max-w-[400px] md:max-w-[300px] max-h-[350px] mx-auto overflow-hidden">
              <img
                className="object-cover mx-auto w-full h-full rounded-xl"
                src={breed.images[selectedIndex].url}
                alt=""
              />
            </div>
          </div>
          <div className="basis-4/6">
            <h2 className="font-bold text-3xl ">{breed.name}</h2>
            <p className="font-medium mt-4 mb-5 ">{breed.description}</p>
            <p className="mb-5 max-w-xl">
              <span className="font-semibold mr-2">Temperament: </span>
              {breed.temperament}
            </p>
            <p className="mb-5">
              <span className="font-semibold mr-2">Origin: </span>
              {breed.origin}
            </p>
            <p className="mb-5">
              <span className="font-semibold mr-2">Life Span: </span>
              {breed.life_span}
            </p>
            <div className="max-w-xl space-y-5">
              <Skill label="adaptability" value={breed.adaptability} />
              <Skill label="affection_level" value={breed.affection_level} />
              <Skill label="child_friendly" value={breed.child_friendly} />
              <Skill label="grooming" value={breed.grooming} />
              <Skill label="health_issues" value={breed.health_issues} />
              <Skill label="intelligence" value={breed.intelligence} />
              <Skill label="social_needs" value={breed.social_needs} />
              <Skill
                label="stranger_friendly"
                value={breed.stranger_friendly}
              />
              <div className=" flex flex-col gap-2 md:flex-row md:items-center">
                <p className="font-semibold min-w-[140px] ">Url:</p>
                <div className="flex gap-5 flex-1">
                  {Object.entries(breed.url).map(([key, value]) => (
                    <Link
                      className="font-bold underline text-blue-900 hover:text-blue-400 cursor-pointer"
                      to={value}
                      target="_blank"
                    >
                      {key.split("_")[0]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-cZinnwalditeBrown py-5 my-5">
          <h3 className="font-semibold text-lg mb-5">Other Photos</h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {breed.images.map((item, i) => (
              <div
                key={i}
                onClick={()=>setSelectedIndex(i)}
                className="min-h-[180px] max-h-[100px] w-48 overflow-hidden cursor-pointer"
              >
                <img
                  className="rounded-3xl h-full w-full object-cover"
                  src={item.url}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <BreadCrumb />
      </div>
      {content}
    </>
  );
};
