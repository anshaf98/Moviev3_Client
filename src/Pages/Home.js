import React, { useEffect } from "react";
import Banner from "../Components/homePage/Banner";
import PopularMovies from "../Components/homePage/PopularMovies";
import Promos from "../Components/homePage/Promos";
import TopRated from "../Components/homePage/TopRated";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMoviesAction,
  getRandomMoviesAction,
  getTopRatedMoviesAction,
} from "../Redux/Actions/moviesActions";
import { toast } from "react-hot-toast";

const Home = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, movies } = useSelector(
    (state) => state.getAllMovies
  );

  const {
    isLoading: randomLoading,
    isError: randomError,
    movies: randomMovies,
  } = useSelector((state) => state.getRandomMovies);

  const {
    isLoading: topLoading,
    isError: topError,
    movies: topMovies,
  } = useSelector((state) => state.getTopRatedMovie);

  useEffect(() => {
    dispatch(getRandomMoviesAction());
    dispatch(getAllMoviesAction({}));
    dispatch(getTopRatedMoviesAction());

    if (isError || randomError || topError) {
      toast.error("Something went wrong!");
    }
  }, [dispatch, isError, randomError, topError]);

  return (
    <Layout>
      <div className=" container mx-auto min-h-screen px-2 mb-6">
        <Banner movies={movies} isLoading={isLoading} />
        <PopularMovies movies={randomMovies} isLoading={randomLoading} />
        <Promos />
        <TopRated movies={topMovies} isLoading={topLoading} />
      </div>
    </Layout>
  );
};

export default Home;
