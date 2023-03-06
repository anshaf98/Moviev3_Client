import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  createCategoryReducer,
  deleteCategoryReducer,
  getAllCategoriesReducer,
  updateCategoryReducer,
} from "./Reducers/categoriesReducer";
import {
  CastsReducer,
  createMovieReducer,
  createReviewReducer,
  deleteAllMoviesReducer,
  deleteMovieReducer,
  movieDetailsReducer,
  moviesListReducer,
  moviesRandomReducer,
  moviesTopRatedReducer,
  updateMovieReducer,
} from "./Reducers/moviesReducer";
import {
  admindeleteUsersReducer,
  adminGetAllUsersReducer,
  userChangePasswordReducer,
  userDeleteFavoriteMoviesReducer,
  userDeleteProfileReducer,
  userGetFavoriteMoviesReducer,
  userLikeMovieReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./Reducers/userReducer";

const rootReducer = combineReducers({
  // ? USER
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userDeleteProfile: userDeleteProfileReducer,
  userChangePassword: userChangePasswordReducer,
  userGetFavoriteMovies: userGetFavoriteMoviesReducer,
  userDeleteFavoriteMovies: userDeleteFavoriteMoviesReducer,
  userLikeMovie: userLikeMovieReducer,

  adminGetAllUsers: adminGetAllUsersReducer,
  adminDeleteUser: admindeleteUsersReducer,

  // ! CATEGORIES
  categoryGetAll: getAllCategoriesReducer,
  categoryCreate: createCategoryReducer,
  categoryUpdate: updateCategoryReducer,
  categoryDelete: deleteCategoryReducer,

  // * MOVIES
  getAllMovies: moviesListReducer,
  getRandomMovies: moviesRandomReducer,
  getMovieById: movieDetailsReducer,
  getTopRatedMovie: moviesTopRatedReducer,
  createReview: createReviewReducer,
  deleteMovie: deleteMovieReducer,
  deleteAllMovies: deleteAllMoviesReducer,
  createMovie: createMovieReducer,
  casts: CastsReducer,
  updateMovie: updateMovieReducer,
});

// * get userInfo from localstorage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
