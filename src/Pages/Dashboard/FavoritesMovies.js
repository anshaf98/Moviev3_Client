import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../../Components/Empty";
import Loading from "../../Components/Notifications/Loading";
import Table from "../../Components/Table";
// import { Movies } from "../../data/MovieData";
import {
  deleteFavoriteMoviesAction,
  getFavoriteMoviesAction,
} from "../../Redux/Actions/userActions";
import Sidebar from "./Sidebar";

const FavoritesMovies = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, likedMovies } = useSelector(
    (state) => state.userGetFavoriteMovies
  );
  // * DELETE
  const {
    isLoading: deleteLoading,
    isError: deleteError,
    isSuccess,
  } = useSelector((state) => state.userDeleteFavoriteMovies);

  const deleteMoviesHandler = () => {
    window.confirm("Are you sure you want to delete all movies?") &&
      dispatch(deleteFavoriteMoviesAction());
  };

  useEffect(() => {
    dispatch(getFavoriteMoviesAction());
    if (isError || deleteError) {
      toast.error(isError || deleteError);
      dispatch({
        type: isError
          ? "GET_FAVORITE_MOVIES_RESET"
          : "DELETE_FAVORITE_MOVIES_RESET",
      });
    }
  }, [dispatch, isError, deleteError, isSuccess]);

  return (
    <Sidebar>
      <div className=" flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className=" text-xl font-bold">Favorites Movies</h2>
          {likedMovies?.length > 0 && (
            <button
              disabled={deleteLoading}
              onClick={deleteMoviesHandler}
              className=" bg-main font-medium transitions hover:bg-subMain border border-subMain py-3 px-6 rounded"
            >
              {deleteLoading ? "Deleting" : "Delete All"}
            </button>
          )}
        </div>

        {isLoading ? (
          <Loading />
        ) : likedMovies.length > 0 ? (
          <Table data={likedMovies} admin={false} />
        ) : (
          <Empty message="You have no favorites movies" />
        )}
      </div>
    </Sidebar>
  );
};

export default FavoritesMovies;
