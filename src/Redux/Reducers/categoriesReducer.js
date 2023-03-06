import {
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_RESET,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_RESET,
  DELETE_CATEGORY_SUCCESS,
  GET_ALL_CATEGORIES_FAIL,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  UPDATE_CATEGORY_FAIL,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_RESET,
  UPDATE_CATEGORY_SUCCESS,
} from "../Constants/categoriesConstants";

// * GET ALL CATE
export const getAllCategoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_REQUEST:
      return {
        isLoading: true,
      };
    case GET_ALL_CATEGORIES_SUCCESS:
      return {
        isLoading: false,
        categories: action.payload,
      };
    case GET_ALL_CATEGORIES_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    // case GET_ALL_CATEGORIES_RESET:
    //   return {};
    default:
      return state;
  }
};

// * CREATE
export const createCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY_REQUEST:
      return {
        isLoading: true,
      };
    case CREATE_CATEGORY_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case CREATE_CATEGORY_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case CREATE_CATEGORY_RESET:
      return {};
    default:
      return state;
  }
};

// * UPDATE
export const updateCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY_REQUEST:
      return {
        isLoading: true,
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case UPDATE_CATEGORY_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case UPDATE_CATEGORY_RESET:
      return {};
    default:
      return state;
  }
};

// * DELETE
export const deleteCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CATEGORY_REQUEST:
      return {
        isLoading: true,
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
      };
    case DELETE_CATEGORY_FAIL:
      return {
        isLoading: false,
        isError: action.payload,
      };
    case DELETE_CATEGORY_RESET:
      return {};
    default:
      return state;
  }
};
