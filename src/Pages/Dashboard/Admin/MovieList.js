import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../Components/Table";
// import { Movies } from "../../../data/MovieData";
import {
  deleteAllMoviesAction,
  deleteMovieAction,
  getAllMoviesAction,
} from "../../../Redux/Actions/moviesActions";
import Sidebar from "../Sidebar";
import { toast } from "react-hot-toast";
import Loading from "../../../Components/Notifications/Loading";
import Empty from "../../../Components/Empty";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";

const MovieList = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, movies, pages, page } = useSelector(
    (state) => state.getAllMovies
  );

  // ************************DELETE**************************

  const { isLoading: deleteLoading, isError: deleteError } = useSelector(
    (state) => state.deleteMovie
  );

  const { isLoading: allLoading, isError: allError } = useSelector(
    (state) => state.deleteAllMovies
  );

  const deleteMovieHandler = (id) => {
    window.confirm("Are you sure you went do delete this movie?") &&
      dispatch(deleteMovieAction(id));
  };

  const deleteAllMoviesHandler = () => {
    window.confirm("Are you sure you went do delete all movies?") &&
      dispatch(deleteAllMoviesAction());
  };

  // *************************DELETE*************************

  useEffect(() => {
    dispatch(getAllMoviesAction({}));
    if (isError || deleteError || allError) {
      toast.error(isError || deleteError || allError);
    }
  }, [dispatch, isError, deleteError, allError]);

  // ! PAGINATION
  const nextpage = () => {
    dispatch(getAllMoviesAction({ pageNumber: page + 1 }));
  };
  const prevpage = () => {
    dispatch(getAllMoviesAction({ pageNumber: page - 1 }));
  };

  return (
    <Sidebar>
      <div className=" flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className=" text-xl font-bold">Movies List</h2>
          {movies?.length > 0 && (
            <button
              disabled={allLoading}
              onClick={deleteAllMoviesHandler}
              className=" bg-main font-medium transitions hover:bg-subMain border border-subMain py-3 px-6 rounded"
            >
              {allLoading ? "Loading..." : "Delete All"}
            </button>
          )}
        </div>

        {isLoading || deleteLoading ? (
          <Loading />
        ) : movies?.length > 0 ? (
          <>
            <Table
              data={movies}
              admin={true}
              onDeleteHandler={deleteMovieHandler}
            />
            {/* loading */}
            <div className=" w-full flex-rows gap-6 my-5">
              <button
                onClick={prevpage}
                disabled={page === 1}
                className=" text-white p-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain"
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
            </div>
          </>
        ) : (
          <Empty message="You have no movies" />
        )}
      </div>
    </Sidebar>
  );
};

export default MovieList;
