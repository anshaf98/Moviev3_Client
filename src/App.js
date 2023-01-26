import React from "react";
import { Route, Routes } from "react-router-dom";
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

function App() {
  Aos.init();
  return (
    // <DrawerContext>
    <ScrollOnTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/password" element={<Password />} />
        <Route path="/favorites" element={<FavoritesMovies />} />
        <Route path="/movieslist" element={<MovieList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ScrollOnTop>
    // </DrawerContext>
  );
}

export default App;
