import {
  DELETE_FAVORITE_MOVIES_RESET,
  DELETE_FAVORITE_MOVIES_FAIL,
  DELETE_FAVORITE_MOVIES_REQUEST,
  DELETE_FAVORITE_MOVIES_SUCCESS,
  GET_FAVORITE_MOVIES_FAIL,
  GET_FAVORITE_MOVIES_REQUEST,
  GET_FAVORITE_MOVIES_RESET,
  GET_FAVORITE_MOVIES_SUCCESS,
  USER_CHANGE_PASSWORD_FAIL,
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_RESET,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_DELETE_PROFILE_FAIL,
  USER_DELETE_PROFILE_REQUEST,
  USER_DELETE_PROFILE_RESET,
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
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_RESET,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_RESET,
  LIKE_MOVIE_REQUEST,
  LIKE_MOVIE_SUCCESS,
  LIKE_MOVIE_FAIL,
  LIKE_MOVIE_RESET,
} from "../Constants/userConstants";

// * LOGIN
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        isLoading: false,
        userInfo: action.payload,
        isSuccess: true,
      };
    case USER_LOGIN_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case USER_LOGIN_RESET:
      return {};
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// * REGISTER
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        isLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        isLoading: false,
        userInfo: action.payload,
        isSuccess: true,
      };
    case USER_REGISTER_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case USER_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

// * UPDATE PROFILE
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return {
        isLoading: true,
      };
    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        isLoading: false,
        userInfo: action.payload,
        isSuccess: true,
      };
    case USER_UPDATE_PROFILE_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

// * DELETE PROFILE
export const userDeleteProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_PROFILE_REQUEST:
      return {
        isLoading: true,
      };
    case USER_DELETE_PROFILE_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case USER_DELETE_PROFILE_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case USER_DELETE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

// * CHANGE PASSWORD
export const userChangePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CHANGE_PASSWORD_REQUEST:
      return {
        isLoading: true,
      };
    case USER_CHANGE_PASSWORD_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        message: action.payload.message,
      };
    case USER_CHANGE_PASSWORD_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case USER_CHANGE_PASSWORD_RESET:
      return {};
    default:
      return state;
  }
};

// * ADD TO FAV.
export const userLikeMovieReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE_MOVIE_REQUEST:
      return {
        isLoading: true,
      };
    case LIKE_MOVIE_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case LIKE_MOVIE_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case LIKE_MOVIE_RESET:
      return {};
    default:
      return state;
  }
};

// * GET FAV. MOVIES
export const userGetFavoriteMoviesReducer = (
  state = { likedMovies: [] },
  action
) => {
  switch (action.type) {
    case GET_FAVORITE_MOVIES_REQUEST:
      return {
        isLoading: true,
      };
    case GET_FAVORITE_MOVIES_SUCCESS:
      return {
        isLoading: false,
        likedMovies: action.payload,
      };
    case GET_FAVORITE_MOVIES_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case GET_FAVORITE_MOVIES_RESET:
      return {};
    default:
      return state;
  }
};

// * DELETE FAV. MOVIES
export const userDeleteFavoriteMoviesReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FAVORITE_MOVIES_REQUEST:
      return {
        isLoading: true,
      };
    case DELETE_FAVORITE_MOVIES_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case DELETE_FAVORITE_MOVIES_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case DELETE_FAVORITE_MOVIES_RESET:
      return {};
    default:
      return state;
  }
};

// * ADMIN GET ALL USERS
export const adminGetAllUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return {
        isLoading: true,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        isLoading: false,
        users: action.payload,
      };
    case GET_ALL_USERS_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case GET_ALL_USERS_RESET:
      return { users: [] };
    default:
      return state;
  }
};

// * ADMIN DELETE USERS
export const admindeleteUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        isLoading: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case DELETE_USER_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case DELETE_USER_RESET:
      return {};
    default:
      return state;
  }
};
