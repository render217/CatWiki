import React from "react";

export const Skill = ({ label, value }) => {
  let remaining = 5 - value;
  console.log(remaining)
  let filled =
    value === 0
      ? null
      : new Array(value).fill(0).map((_, idx) => (
          <div
            key={idx}
            className=" bg-cZinnwalditeBrown h-3 rounded-3xl basis-1/5"
          ></div>
        ));
  let nonFilled =
    remaining === 0
      ? null
      : new Array(remaining).fill(0).map((_, idx) => (
          <div
            key={idx}
            className=" bg-cLavenderPinocchio h-3 rounded-3xl basis-1/5"
          ></div>
        ));
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center">
      <p className="font-semibold min-w-[140px]">{label}:</p>
      <div className="flex gap-2 flex-1">
        {filled}
        {nonFilled}
      </div>
    </div>
  );
};
