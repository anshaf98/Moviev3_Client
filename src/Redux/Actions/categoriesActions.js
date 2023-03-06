// import * as userConstants from "../Constants/userConstants";
import { toast } from "react-hot-toast";
import * as categoriesApi from "../APIs/CategoriesService";
import {
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  GET_ALL_CATEGORIES_FAIL,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  UPDATE_CATEGORY_FAIL,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
} from "../Constants/categoriesConstants";
import { ErrorsAction, tokenProtection } from "../Protection";

// * GET ALL
const getAllCategoriesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_CATEGORIES_REQUEST,
    });
    const data = await categoriesApi.getCategoriesService();
    dispatch({
      type: GET_ALL_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    ErrorsAction(error, dispatch, GET_ALL_CATEGORIES_FAIL);
  }
};

// * CREATE
const createCategoryAction = (title) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_CATEGORY_REQUEST });
    await categoriesApi.createCategoryService(title, tokenProtection(getState));
    dispatch({ type: CREATE_CATEGORY_SUCCESS });
    toast.success("Create Category Successfully");
    dispatch(getAllCategoriesAction());
  } catch (error) {
    ErrorsAction(error, dispatch, CREATE_CATEGORY_FAIL);
  }
};

// * UPDATE
const updateCategoryAction = (id, title) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_CATEGORY_REQUEST });
    await categoriesApi.updateCategoryService(
      id,
      title,
      tokenProtection(getState)
    );
    dispatch({ type: UPDATE_CATEGORY_SUCCESS });

    toast.success("Category Updated");
    dispatch(getAllCategoriesAction());
  } catch (error) {
    ErrorsAction(error, dispatch, UPDATE_CATEGORY_FAIL);
  }
};

// * DELETE
const deleteCategoryAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_CATEGORY_REQUEST });
    await categoriesApi.deleteCategoryService(id, tokenProtection(getState));
    dispatch({ type: DELETE_CATEGORY_SUCCESS });

    toast.success("Category Deleted");
    dispatch(getAllCategoriesAction());
  } catch (error) {
    ErrorsAction(error, dispatch, DELETE_CATEGORY_FAIL);
  }
};

export {
  getAllCategoriesAction,
  createCategoryAction,
  deleteCategoryAction,
  updateCategoryAction,
};
