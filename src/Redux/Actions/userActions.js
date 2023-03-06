// import * as userConstants from "../Constants/userConstants";
import { toast } from "react-hot-toast";
import * as userApi from "../APIs/userService";
import {
  DELETE_FAVORITE_MOVIES_FAIL,
  DELETE_FAVORITE_MOVIES_REQUEST,
  DELETE_FAVORITE_MOVIES_SUCCESS,
  GET_FAVORITE_MOVIES_FAIL,
  GET_FAVORITE_MOVIES_REQUEST,
  GET_FAVORITE_MOVIES_SUCCESS,
  USER_CHANGE_PASSWORD_FAIL,
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_DELETE_PROFILE_FAIL,
  USER_DELETE_PROFILE_REQUEST,
  USER_DELETE_PROFILE_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_RESET,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESET,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  LIKE_MOVIE_REQUEST,
  LIKE_MOVIE_SUCCESS,
  LIKE_MOVIE_FAIL,
} from "../Constants/userConstants";
import { ErrorsAction, tokenProtection } from "../Protection";

// * LOGIN
const loginAction = (datas) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const response = await userApi.loginService(datas);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: response,
    });
  } catch (error) {
    ErrorsAction(error, dispatch, USER_LOGIN_FAIL);
  }
};

// * REGISTER
const registerAction = (datas) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const response = await userApi.registerService(datas);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: response });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: response });
  } catch (error) {
    ErrorsAction(error, dispatch, USER_REGISTER_FAIL);
  }
};

// * LOGOUT
const logoutAction = () => async (dispatch) => {
  userApi.logoutService();
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_LOGIN_RESET });
  dispatch({ type: USER_REGISTER_RESET });
};

// * UPDATE
const updateProfileAction = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });
    const response = await userApi.updateProfileService(
      user,
      tokenProtection(getState)
    );
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: response });

    toast.success("Profile Updated");
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: response,
    });
  } catch (error) {
    ErrorsAction(error, dispatch, USER_UPDATE_PROFILE_FAIL);
  }
};

// * DELETE
const deleteProfileAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DELETE_PROFILE_REQUEST });
    await userApi.deleteProfileService(tokenProtection(getState));
    dispatch({ type: USER_DELETE_PROFILE_SUCCESS });

    toast.success("Profile Deleted");
    dispatch(logoutAction());
  } catch (error) {
    ErrorsAction(error, dispatch, USER_DELETE_PROFILE_FAIL);
    // dispatch({ type: USER_DELETE_PROFILE_RESET });
  }
};

// * CHANGE PASSWORD
const changePasswordAction = (passwords) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_CHANGE_PASSWORD_REQUEST });
    const response = await userApi.changePasswordService(
      passwords,
      tokenProtection(getState)
    );
    dispatch({ type: USER_CHANGE_PASSWORD_SUCCESS, payload: response });
  } catch (error) {
    ErrorsAction(error, dispatch, USER_CHANGE_PASSWORD_FAIL);
  }
};

// * GET ALL FAV. MOVIES
const getFavoriteMoviesAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_FAVORITE_MOVIES_REQUEST });
    const response = await userApi.getFavoriteMovies(tokenProtection(getState));
    dispatch({ type: GET_FAVORITE_MOVIES_SUCCESS, payload: response });
  } catch (error) {
    ErrorsAction(error, dispatch, GET_FAVORITE_MOVIES_FAIL);
  }
};

// * DELETE ALL FAV. MOVIES
const deleteFavoriteMoviesAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_FAVORITE_MOVIES_REQUEST });
    await userApi.deleteFavoriteMovies(tokenProtection(getState));
    dispatch({ type: DELETE_FAVORITE_MOVIES_SUCCESS });
    toast.success("Favorite Movies Deleted");
  } catch (error) {
    ErrorsAction(error, dispatch, DELETE_FAVORITE_MOVIES_FAIL);
  }
};

// * GET ALL FAV. MOVIES
const likeMovieAction = (movieId) => async (dispatch, getState) => {
  try {
    dispatch({ type: LIKE_MOVIE_REQUEST });
    const response = await userApi.likeMovieService(
      movieId,
      tokenProtection(getState)
    );
    dispatch({ type: LIKE_MOVIE_SUCCESS, payload: response });
    toast.success("Add to ypur favorites");
    dispatch(getFavoriteMoviesAction());
  } catch (error) {
    ErrorsAction(error, dispatch, LIKE_MOVIE_FAIL);
  }
};

// * ADMIN GET ALL USERS
const getAllUsersAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ALL_USERS_REQUEST });
    const response = await userApi.getAllUsersService(
      tokenProtection(getState)
    );
    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: response });
  } catch (error) {
    ErrorsAction(error, dispatch, GET_ALL_USERS_FAIL);
  }
};

// * ADMIN DELETE USER
const deleteUserAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });
    await userApi.deleteUserService(id, tokenProtection(getState));
    dispatch({ type: DELETE_USER_SUCCESS });

    toast.success("User Deleted");
  } catch (error) {
    ErrorsAction(error, dispatch, DELETE_USER_FAIL);
  }
};

export {
  loginAction,
  registerAction,
  logoutAction,
  updateProfileAction,
  deleteProfileAction,
  changePasswordAction,
  getFavoriteMoviesAction,
  deleteFavoriteMoviesAction,
  getAllUsersAction,
  deleteUserAction,
  likeMovieAction,
};
