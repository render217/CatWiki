import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { api } from "../api";

export const SearchBar = ({ setOpen, open }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [filteredBreedNames, setFilteredBreedNames] = useState([]);
  const {
    response: { breeds: breedNames },
    error,
    loading,
  } = useAxios({
    axiosInstance: api,
    method: "GET",
    url: "/breeds_names",
    requestConfig: {},
  });

  useEffect(() => {
    setFilteredBreedNames(breedNames);
  }, [loading]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
    const updatedBreedNames = breedNames.filter((breed) =>
      breed.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBreedNames(updatedBreedNames);
  };

  const resetSearch = () => {
    setSearchValue("");
    setFilteredBreedNames(breedNames);
  };

  let breedsOption = <p className="px-5 py-2 hover:bg-gray-200 ">Loading....</p>;

  if (error) {
    console.log('error')
    breedsOption = (
      <p className="px-5 py-2 hover:bg-gray-200 text-red-600 ">{error}</p>
    );
  }
  if (loading) {
    console.log('loading...')
    breedsOption = <p className="px-5 py-2 hover:bg-gray-200 ">Loading....</p>;
  }
  if (!loading && filteredBreedNames?.length === 0) {
    console.log('not loading but filtered empty')

    breedsOption = (
      <p className="px-5 py-2 hover:bg-gray-200 ">No breed found</p>
    );
  }
  if (filteredBreedNames &&  filteredBreedNames.length) {
    console.log('not loading and filterd has data')

    breedsOption = filteredBreedNames.map((item, i) => (
      <li
        className="px-5 py-2 hover:bg-gray-200 "
        key={i}
        value={item.name}
        onClick={() => {
          navigate(`/breeds/${item.name}`);
        }}
      >
        {item.name.split("").map((letter, index) => {
          if (searchValue.includes(letter.toLowerCase())) {
            return (
              <b key={index} className="font-bold">
                {letter}
              </b>
            );
          } else {
            return letter;
          }
        })}
      </li>
    ));
  }

  return (
    <div className="">
      <form className="">
        <div className="text-cZinnwalditeBrown bg-white text-xl px-4 rounded-full flex items-center max-w-[300px] py-4 mb-4">
          <input
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
            onBlur={() => {}}
            value={searchValue}
            onChange={handleSearchChange}
            className="w-full outline-none border-none px-3"
            type="text"
            placeholder="Enter your Breed"
          />
          {searchValue && (
            <i
              className="fa-solid fa-xmark mx-2 cursor-pointer"
              onClick={resetSearch}
            ></i>
          )}
          {!searchValue && (
            <i className="fa-solid fa-magnifying-glass mx-2 cursor-pointer"></i>
          )}
        </div>
        {open && (
          <div className="z-20 absolute -bottom-30  w-full rounded-xl overflow-hidden  max-w-[300px]">
            <ul
              name="breed"
              className="max-h-44 w-full overflow-y-scroll  leading-tight bg-white text-cZinnwalditeBrown "
            >
              {breedsOption}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};
