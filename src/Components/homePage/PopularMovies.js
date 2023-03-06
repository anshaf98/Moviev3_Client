import React from "react";
import Title from "../Title";
import { BsCollectionFill } from "react-icons/bs";
// import { Movies } from "../../data/MovieData";
import Movie from "../Movie";
import Loading from "../Notifications/Loading";
import Empty from "../Empty";

const PopularMovies = ({ isLoading, movies }) => {
  return (
    <div className=" my-16">
      <Title title="Popular Movies" Icon={BsCollectionFill} />

      {isLoading ? (
        <Loading />
      ) : movies?.length > 0 ? (
        <div className=" grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {movies.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className=" mt-6">
          <Empty message="It seem's like we dont have any movie" />
        </div>
      )}
    </div>
  );
};

export default PopularMovies;
