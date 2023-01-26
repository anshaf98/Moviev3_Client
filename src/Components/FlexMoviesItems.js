import React from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

const FlexMoviesItems = ({ movie }) => {
  return (
    <>
      <div className=" flex items-center gap-2">
        <span className=" text-sm font-medium">{movie.category}</span>
      </div>
      <div className=" flex items-center gap-2">
        <BsFillCalendarFill className=" text-subMain w-3 h-3" />
        <span className=" text-sm font-medium">{movie.year}</span>
      </div>
      <div className=" flex items-center gap-2">
        <BiTime className=" text-subMain w-3 h-3" />
        <span className=" text-sm font-medium">{movie.time}</span>
      </div>
    </>
  );
};

export default FlexMoviesItems;
