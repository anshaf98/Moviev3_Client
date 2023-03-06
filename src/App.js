import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import MoviesPage from "./Pages/MoviesPage";
import SingleMovie from "./Pages/SingleMovie";
import WatchPage from "./Pages/WatchPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Dashboard/Profile";
import Aos from "aos";
import Password from "./Pages/Dashboard/Password";
import FavoritesMovies from "./Pages/Dashboard/FavoritesMovies";
import MovieList from "./Pages/Dashboard/Admin/MovieList";
import Dashboard from "./Pages/Dashboard/Admin/Dashboard";
import Categories from "./Pages/Dashboard/Admin/Categories";
import Users from "./Pages/Dashboard/Admin/Users";
import AddMovie from "./Pages/Dashboard/Admin/AddMovie";
import ScrollOnTop from "./Components/ScrollOnTop";
import ToastContainer from "./Components/Notifications/ToastContainer";
import { AdminProtectedRouter, ProtectedRouter } from "./ProtectedRouter";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "./Redux/Actions/categoriesActions";
import { getAllMoviesAction } from "./Redux/Actions/moviesActions";
import { getFavoriteMoviesAction } from "./Redux/Actions/userActions";
import { toast } from "react-hot-toast";
import EditMovie from "./Pages/Dashboard/Admin/EditMovie";
import DrawerContext from "./Context/DrawerContext";

function App() {
  Aos.init();

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { isError, isSuccess } = useSelector((state) => state.userLikeMovie);
  const { isError: catError } = useSelector((state) => state.categoryGetAll);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(getAllMoviesAction({}));

    if (userInfo) {
      dispatch(getFavoriteMoviesAction());
    }
    if (isError || catError) {
      toast.error(isError || catError);
      dispatch({ type: "LIKE_MOVIE_RESET" });
    }
    if (isSuccess) {
      dispatch({ type: "LIKE_MOVIE_RESET" });
    }
  }, [dispatch, userInfo, isError, catError, isSuccess]);

  return (
    <DrawerContext>
      <ToastContainer />
      <ScrollOnTop>
        <Routes>
          {/* PUBLIC =============================== */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/movies/:search" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

          {/* PRIVATE AND PUBLIC =============================== */}
          <Route element={<ProtectedRouter />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/password" element={<Password />} />
            <Route path="/favorites" element={<FavoritesMovies />} />

            {/* ADMIN =============================== */}
            <Route element={<AdminProtectedRouter />}>
              <Route path="/movieslist" element={<MovieList />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/users" element={<Users />} />
              <Route path="/addmovie" element={<AddMovie />} />
              <Route path="/edit/:id" element={<EditMovie />} />
            </Route>
          </Route>
        </Routes>
      </ScrollOnTop>
    </DrawerContext>
  );
}

export default App;
