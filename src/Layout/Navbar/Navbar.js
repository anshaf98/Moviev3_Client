import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { CgUser } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);

  const { likedMovies } = useSelector((state) => state.userGetFavoriteMovies);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/movies/${search}`);
      setSearch(search);
    } else {
      navigate(`/movies`);
    }
  };

  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  return (
    <>
      <div className=" bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-6 lg:grid gap-10 grid-cols-7 justify-between items-center">
          <div className=" col-span-1 lg:block hidden">
            <Link to="/">
              <h1
                className=" text-subMain text-3xl"
                style={{ fontFamily: "Island Moments, cursive" }}
              >
                Mohamed
              </h1>
              {/* <img src="" alt="" className=" w-full h-12 object-contain" /> */}
            </Link>
          </div>

          {/* searchbar */}
          <div className=" col-span-3">
            <form
              onSubmit={handleSearch}
              className=" w-full text-sm bg-dryGray rounded flex-btn gap-4"
            >
              <button
                type="submit"
                className=" bg-subMain w-12 flex-colo h-12 rounded text-white"
              >
                <BsSearch className=" text-xl" />
              </button>

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Movie Name from here"
                className=" w-11/12 h-12 font-medium placeholder:text-border text-sm bg-transparent border-none px-2 text-black"
              />
            </form>
          </div>

          {/* menu */}
          <div className=" col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <NavLink to="/movies" className={Hover}>
              Movies
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" className={Hover}>
              Contact Us
            </NavLink>
            {/*  */}
            <NavLink
              to={
                userInfo?.isAdmin
                  ? "/dashboard"
                  : userInfo
                  ? "/profile"
                  : "/login"
              }
              className={Hover}
            >
              {userInfo ? (
                <img
                  src={
                    userInfo?.image
                      ? userInfo?.image
                      : "https://www.computerhope.com/jargon/g/guest-user.png"
                  }
                  alt=""
                  className=" w-8 h-8 rounded-full border object-cover border-subMain"
                />
              ) : (
                <CgUser className=" w-8 h-8" />
              )}
            </NavLink>
            {/*  */}
            <NavLink to="/favorites" className={`${Hover} relative`}>
              <FaHeart className=" w-6 h-6" />
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain absolute -top-5 -right-1">
                {likedMovies?.length}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
