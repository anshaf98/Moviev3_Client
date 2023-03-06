import {
  ADD_CAST,
  CREATE_MOVIE_FAIL,
  CREATE_MOVIE_REQUEST,
  CREATE_MOVIE_RESET,
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
  MOVIE_DETAILS_RESET,
  MOVIE_DETAILS_SUCCESS,
  RESET_CAST,
  UPDATE_MOVIE_FAIL,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_RESET,
  UPDATE_MOVIE_SUCCESS,
} from "../Constants/moviesConstants";

// * GET ALL
export const moviesListReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIES_LIST_REQUEST:
      return {
        isLoading: true,
      };
    case MOVIES_LIST_SUCCESS:
      return {
        isLoading: false,
        movies: action.payload.movies,
        pages: action.payload.pages,
        page: action.payload.page,
        totalMovies: action.payload.totalMovies,
      };
    case MOVIES_LIST_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};

// * GET RANDOM
export const moviesRandomReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIES_RANDOM_REQUEST:
      return {
        isLoading: true,
      };
    case MOVIES_RANDOM_SUCCESS:
      return {
        isLoading: false,
        movies: action.payload,
      };
    case MOVIES_RANDOM_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};

// * GET BY ID
export const movieDetailsReducer = (state = { movie: {} }, action) => {
  switch (action.type) {
    case MOVIE_DETAILS_REQUEST:
      return {
        isLoading: true,
      };
    case MOVIE_DETAILS_SUCCESS:
      return {
        isLoading: false,
        movie: action.payload,
      };
    case MOVIE_DETAILS_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case MOVIE_DETAILS_RESET:
      return {
        movie: {},
      };
    default:
      return state;
  }
};

// * GET TOPRATED
export const moviesTopRatedReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIES_TOP_RATED_REQUEST:
      return {
        isLoading: true,
      };
    case MOVIES_TOP_RATED_SUCCESS:
      return {
        isLoading: false,
        movies: action.payload,
      };
    case MOVIES_TOP_RATED_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};

// * CREATE REVIEW
export const createReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_REVIEW_REQUEST:
      return {
        isLoading: true,
      };
    case CREATE_REVIEW_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case CREATE_REVIEW_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

// * DELETE SINGLE
export const deleteMovieReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_MOVIE_REQUEST:
      return {
        isLoading: true,
      };
    case DELETE_MOVIE_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case DELETE_MOVIE_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};

// * DELETE ALL
export const deleteAllMoviesReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ALL_MOVIES_REQUEST:
      return {
        isLoading: true,
      };
    case DELETE_ALL_MOVIES_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case DELETE_ALL_MOVIES_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};

// * CREATE
export const createMovieReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_MOVIE_REQUEST:
      return {
        isLoading: true,
      };
    case CREATE_MOVIE_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case CREATE_MOVIE_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case CREATE_MOVIE_RESET:
      return {};
    default:
      return state;
  }
};

// * CAST CREATE
export const CastsReducer = (state = { casts: [] }, action) => {
  switch (action.type) {
    case ADD_CAST:
      return {
        casts: [...state.casts, action.payload],
      };
    case EDIT_CAST:
      const updatedCasts = state.casts.map((cast) =>
        cast.id === action.payload.id ? action.payload : cast
      );
      return { casts: updatedCasts };
    case DELETE_CAST:
      return {
        ...state,
        casts: state.casts.filter((cast) => cast.id !== action.payload),
      };
    case RESET_CAST:
      return { casts: [] };
    default:
      return state;
  }
};

// * UPDATE
export const updateMovieReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_MOVIE_REQUEST:
      return {
        isLoading: true,
      };
    case UPDATE_MOVIE_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case UPDATE_MOVIE_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case UPDATE_MOVIE_RESET:
      return {};
    default:
      return state;
  }
};
