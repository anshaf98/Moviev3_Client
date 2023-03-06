import { toast } from "react-hot-toast";
import * as moviesApi from "../APIs/moviesService";
import {
  ADD_CAST,
  CREATE_MOVIE_FAIL,
  CREATE_MOVIE_REQUEST,
  CREATE_MOVIE_SUCCESS,
  CREATE_REVIEW_FAIL,
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_RESET,
  CREATE_REVIEW_SUCCESS,
  DELETE_ALL_MOVIES_FAIL,
  DELETE_ALL_MOVIES_REQUEST,
  DELETE_ALL_MOVIES_SUCCESS,
  DELETE_CAST,
  DELETE_MOVIE_FAIL,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  EDIT_CAST,
  MOVIES_LIST_FAIL,
  MOVIES_LIST_REQUEST,
  MOVIES_LIST_SUCCESS,
  MOVIES_RANDOM_FAIL,
  MOVIES_RANDOM_REQUEST,
  MOVIES_RANDOM_SUCCESS,
  MOVIES_TOP_RATED_FAIL,
  MOVIES_TOP_RATED_REQUEST,
  MOVIES_TOP_RATED_SUCCESS,
  MOVIE_DETAILS_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  RESET_CAST,
  UPDATE_MOVIE_FAIL,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
} from "../Constants/moviesConstants";

import { ErrorsAction, tokenProtection } from "../Protection";

// * GET ALL
const getAllMoviesAction =
  ({
    category = "",
    time = "",
    language = "",
    rate = "",
    year = "",
    search = "",
    pageNumber = "",
  }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: MOVIES_LIST_REQUEST,
      });
      const response = await moviesApi.getAllMoviesService(
        category,
        time,
        language,
        rate,
        year,
        search,
        pageNumber
      );
      dispatch({
        type: MOVIES_LIST_SUCCESS,
        payload: response,
      });
    } catch (error) {
      ErrorsAction(error, dispatch, MOVIES_LIST_FAIL);
    }
  };

// * GET ALL
const getRandomMoviesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: MOVIES_RANDOM_REQUEST,
    });
    const response = await moviesApi.getRandomMoviesService();
    dispatch({
      type: MOVIES_RANDOM_SUCCESS,
      payload: response,
    });
  } catch (error) {
    ErrorsAction(error, dispatch, MOVIES_RANDOM_FAIL);
  }
};

// * GET BY ID
const getMovieByIdAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_DETAILS_REQUEST,
    });
    const response = await moviesApi.getMovieByIdService(id);
    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    ErrorsAction(error, dispatch, MOVIE_DETAILS_FAIL);
  }
};

// * GET TOP RATED
const getTopRatedMoviesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: MOVIES_TOP_RATED_REQUEST,
    });
    const response = await moviesApi.getTopRatedMoviesService();
    dispatch({
      type: MOVIES_TOP_RATED_SUCCESS,
      payload: response,
    });
  } catch (error) {
    ErrorsAction(error, dispatch, MOVIES_TOP_RATED_FAIL);
  }
};

// * REVIEW MOVIE
const reviewMovieAction =
  ({ id, review }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_REVIEW_REQUEST,
      });
      const response = await moviesApi.reviewMovieService(
        tokenProtection(getState),
        id,
        review
      );
      dispatch({
        type: CREATE_REVIEW_SUCCESS,
        payload: response,
      });
      toast.success("Review added successfully");
      dispatch({ type: CREATE_REVIEW_RESET });
      dispatch(getMovieByIdAction(id));
    } catch (error) {
      ErrorsAction(error, dispatch, CREATE_REVIEW_FAIL);
    }
  };

// * DELETE SINGLE
const deleteMovieAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_MOVIE_REQUEST,
    });
    const response = await moviesApi.deleteMovieService(
      tokenProtection(getState),
      id
    );
    dispatch({
      type: DELETE_MOVIE_SUCCESS,
      payload: response,
    });
    toast.success("Movie deleted successfully");
    dispatch(getAllMoviesAction({}));
  } catch (error) {
    ErrorsAction(error, dispatch, DELETE_MOVIE_FAIL);
  }
};

// * DELETE ALL
const deleteAllMoviesAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_ALL_MOVIES_REQUEST,
    });
    const response = await moviesApi.deleteAllMoviesService(
      tokenProtection(getState)
    );
    dispatch({
      type: DELETE_ALL_MOVIES_SUCCESS,
      payload: response,
    });
    toast.success("All Movies deleted successfully");
    dispatch(getAllMoviesAction({}));
  } catch (error) {
    ErrorsAction(error, dispatch, DELETE_ALL_MOVIES_FAIL);
  }
};

// * CREATE
const createMovieAction = (movie) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_MOVIE_REQUEST,
    });
    const response = await moviesApi.createMovieService(
      tokenProtection(getState),
      movie
    );
    dispatch({
      type: CREATE_MOVIE_SUCCESS,
      payload: response,
    });
    toast.success("Movie Created successfully");
    dispatch(deleteAllCastsAction());
  } catch (error) {
    ErrorsAction(error, dispatch, CREATE_MOVIE_FAIL);
  }
};

// * CASTS ADD
const addCastsAction = (cast) => async (dispatch, getState) => {
  dispatch({ type: ADD_CAST, payload: cast });
  localStorage.setItem("casts", JSON.stringify(getState().casts.casts));
};

// * CASTS REMOVIE
const removeCastsAction = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_CAST, payload: id });
  localStorage.setItem("casts", JSON.stringify(getState().casts.casts));
};

// * CASTS EDIT
const updateCastsAction = (cast) => async (dispatch, getState) => {
  dispatch({ type: EDIT_CAST, payload: cast });
  localStorage.setItem("casts", JSON.stringify(getState().casts.casts));
};

// * CASTS REMOVIE ALL
const deleteAllCastsAction = () => async (dispatch) => {
  dispatch({ type: RESET_CAST });
  localStorage.removeItem("casts");
};

// * UPDATE
const updateMovieAction = (id, movie) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_MOVIE_REQUEST,
    });
    const response = await moviesApi.updateMovieService(
      tokenProtection(getState),
      id,
      movie
    );
    dispatch({
      type: UPDATE_MOVIE_SUCCESS,
      payload: response,
    });
    toast.success("Movie Updated successfully");
    dispatch(getMovieByIdAction(id));
    dispatch(deleteAllCastsAction());
  } catch (error) {
    ErrorsAction(error, dispatch, UPDATE_MOVIE_FAIL);
  }
};

export {
  getAllMoviesAction,
  getRandomMoviesAction,
  getMovieByIdAction,
  getTopRatedMoviesAction,
  reviewMovieAction,
  deleteMovieAction,
  deleteAllMoviesAction,
  createMovieAction,
  addCastsAction,
  removeCastsAction,
  updateCastsAction,
  deleteAllCastsAction,
  updateMovieAction,
};
