import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MovieCasts from "../Components/SingleMovie/MovieCasts";
import MovieInfo from "../Components/SingleMovie/MovieInfo";
import MovieRates from "../Components/SingleMovie/MovieRates";
import Title from "../Components/Title";
import { Movies } from "../data/MovieData";
import Layout from "../Layout/Layout";
import { BsCollectionFill } from "react-icons/bs";
import Movie from "../Components/Movie";
import ShareMovieModal from "../Components/Modals/ShareModal";

const SingleMovie = () => {
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id);

  const RelatedMovies = Movies.filter((m) => m.category === movie.category);

  // ! modal
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Layout>
      <ShareMovieModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        movie={movie}
      />
      <MovieInfo movie={movie} setModalOpen={setModalOpen} />

      <div className=" container mx-auto min-h-screen px-5 my-6">
        <MovieCasts />

        <MovieRates movie={movie} />

        {/* related */}
        <div className="my-16">
          <Title title="Related Movies" Icon={BsCollectionFill} />

          <div className=" grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {RelatedMovies.slice(0, 5)?.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleMovie;
