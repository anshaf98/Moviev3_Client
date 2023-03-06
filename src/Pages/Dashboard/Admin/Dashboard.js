import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../../../Components/Empty";
import Loading from "../../../Components/Notifications/Loading";
import Table from "../../../Components/Table";
import { Movies } from "../../../data/MovieData";
import { getAllCategoriesAction } from "../../../Redux/Actions/categoriesActions";
import {
  deleteMovieAction,
  getAllMoviesAction,
} from "../../../Redux/Actions/moviesActions";
import { getAllUsersAction } from "../../../Redux/Actions/userActions";
import Sidebar from "../Sidebar";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, movies, totalMovies } = useSelector(
    (state) => state.getAllMovies
  );

  // *******************************DELETE SINGLE******************************

  const { isLoading: deleteLoading, isError: deleteError } = useSelector(
    (state) => state.deleteMovie
  );

  const deleteMovieHandler = (id) => {
    window.confirm("Are you sure you went do delete this movie?") &&
      dispatch(deleteMovieAction(id));
  };

  // *******************************DELETE SINGLE******************************

  const {
    isLoading: catLoading,
    isError: catError,
    categories,
  } = useSelector((state) => state.categoryGetAll);

  const {
    isLoading: userLoading,
    isError: userError,
    users,
  } = useSelector((state) => state.adminGetAllUsers);

  useEffect(() => {
    dispatch(getAllUsersAction());
    dispatch(getAllMoviesAction({}));
    dispatch(getAllCategoriesAction());

    if (isError || catError || userError || deleteError) {
      toast.error("Something went wrong!");
    }
  }, [dispatch, isError, catError, userError, deleteError]);

  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      title: "Total Movies",
      total: isLoading ? "Loading..." : totalMovies || 0,
    },
    {
      bg: "bg-blue-700",
      icon: HiViewGridAdd,
      title: "Total Category",
      total: catLoading ? "Loading..." : categories.length || 0,
    },
    {
      bg: "bg-green-700",
      icon: FaUser,
      title: "Total Users",
      total: userLoading ? "Loading..." : users.length || 0,
    },
  ];

  return (
    <Sidebar>
      <h2 className=" text-xl font-bold">Dashboard</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {DashboardData.map((data, index) => (
          <div
            className=" p-4 rounded bg-main border-border grid grid-cols-4 gap-2"
            key={index}
          >
            <div
              className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
            >
              <data.icon />
            </div>

            <div className="col-span-3">
              <h2>{data.title}</h2>
              <p className=" mt-2 font-bold">{data.total}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className=" text-md font-medium my-6 text-border">Recent Movies</h3>
      {/* <Table data={Movies.slice(0, 5)} admin={true} /> */}

      {isLoading || deleteLoading ? (
        <Loading />
      ) : movies.length > 0 ? (
        <Table
          data={movies?.slice(0, 5)}
          admin={true}
          onDeleteHandler={deleteMovieHandler}
        />
      ) : (
        <Empty message="You have no recent movies" />
      )}
    </Sidebar>
  );
};

export default Dashboard;
