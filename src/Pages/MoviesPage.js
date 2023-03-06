import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../Components/Filters";
import Movie from "../Components/Movie";
// import { Movies } from "../data/MovieData";
import Layout from "../Layout/Layout";
import { toast } from "react-hot-toast";
import { getAllMoviesAction } from "../Redux/Actions/moviesActions";
import Loading from "../Components/Notifications/Loading";
import { RiMovie2Line } from "react-icons/ri";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import {
  LanguageData,
  RatesData,
  TimesData,
  YearData,
} from "../data/FilterData";
import { useParams } from "react-router-dom";

const MoviesPage = () => {
  const { search } = useParams();
  const dispatch = useDispatch();
  const [category, setCategory] = useState({ title: "All Categories" });
  const [year, setYear] = useState(YearData[0]);
  const [times, setTimes] = useState(TimesData[0]);
  const [rates, setRates] = useState(RatesData[0]);
  const [language, setLanguage] = useState(LanguageData[0]);

  // * ALL MOVIES
  const { isLoading, isError, movies, pages, page } = useSelector(
    (state) => state.getAllMovies
  );

  // * GET ALL CATEGORIES
  const { categories } = useSelector((state) => state.categoryGetAll);

  //  * QUERIES
  const queries = useMemo(() => {
    const queries = {
      category: category?.title === "All Categories" ? "" : category?.title,
      times: times?.title.replace(/\D/g, ""),
      language: language?.title === "Sort By Language" ? "" : language?.title,
      rate: rates?.title.replace(/\D/g, ""),
      year: year?.title.replace(/\D/g, ""),
      search: search ? search : "",
    };
    return queries;
  }, [category, language, year, times, rates, search]);

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    dispatch(getAllMoviesAction(queries));
  }, [dispatch, isError, queries]);

  // ! PAGINATION
  const nextpage = () => {
    dispatch(getAllMoviesAction({ ...queries, pageNumber: page + 1 }));
  };
  const prevpage = () => {
    dispatch(getAllMoviesAction({ ...queries, pageNumber: page - 1 }));
  };

  const datas = {
    categories: categories,
    category: category,
    setCategory: setCategory,
    language: language,
    setLanguage: setLanguage,
    rates: rates,
    setRates: setRates,
    times: times,
    setTimes: setTimes,
    year: year,
    setYear: setYear,
  };

  // console.log(search);

  // * ==================================================
  // const maxPage = 8;
  // const [page, setPage] = useState(maxPage);
  // const HandleLoadingMore = () => {
  //   setPage(page + maxPage);
  // };

  return (
    <Layout>
      <div className=" min-h-screen container mx-auto px-2 my-6">
        <Filters data={datas} />

        <p className=" text-lg font-medium my-6">
          Total{" "}
          <span className=" font-bold text-subMain">
            {movies ? movies?.length : 0}
          </span>{" "}
          items Found {search && `for "${search}"`}
        </p>
        {isLoading ? (
          <div className="w-full gap-6 flex-colo min-h-screen">
            <Loading />
          </div>
        ) : movies?.length > 0 ? (
          <>
            <div className=" grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
              {movies?.map((movie, index) => (
                <Movie key={index} movie={movie} />
              ))}
            </div>

            {/* loading */}
            <div className=" w-full flex-rows gap-6 md:my-20 my-10">
              <button
                onClick={prevpage}
                disabled={page === 1}
                className=" text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain"
              >
                <TbPlayerTrackPrev />
              </button>
              <button
                onClick={nextpage}
                disabled={page === pages}
                className=" text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain"
              >
                <TbPlayerTrackNext />
              </button>
              {/* <button
            className=" flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain"
            onClick={HandleLoadingMore}
          >
            Loading More <CgSpinner className=" animate-spin" />
          </button> */}
            </div>
          </>
        ) : (
          <div className="w-full gap-6 flex-colo min-h-screen">
            <div className=" w-24 h-24 p-5 rounded-full mb-4 bg-dry text-subMain text-4xl flex-colo">
              <RiMovie2Line />
            </div>
            <p className=" text-border text-sm">
              It seem's like we dont have any movies
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MoviesPage;
