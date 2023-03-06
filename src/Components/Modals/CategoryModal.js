import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategoryAction,
  updateCategoryAction,
} from "../../Redux/Actions/categoriesActions";
import { Input } from "../UsedInputs";
import MainModal from "./MainModal";
import { toast } from "react-hot-toast";

const CategoryModel = ({ modalOpen, setModalOpen, category }) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.categoryCreate
  );

  const {
    isLoading: uploading,
    isError: upError,
    isSuccess: upSuccess,
  } = useSelector((state) => state.categoryUpdate);

  // console.log(category);

  // * CREATE
  const submitHandler = (e) => {
    e.preventDefault();
    if (title) {
      // ? IF CATEGORY IS NOT EMPTY THEN UPDATE CATEGORY ELSE CREATE CATEGORY
      if (category) {
        dispatch(updateCategoryAction(category?._id, { title: title }));
        setModalOpen(!modalOpen);
      } else {
        dispatch(createCategoryAction({ title: title }));
        setTitle("");
      }
    } else {
      toast.error("Please write a category title");
    }
  };

  useEffect(() => {
    if (upError || isError) {
      toast.error(upError || isError);
      dispatch({
        type: isError ? "CREATE_CATEGORY_RESET" : "UPDATE_CATEGORY_RESET",
      });
    }

    if (isSuccess || upSuccess) {
      dispatch({
        type: isError ? "CREATE_CATEGORY_RESET" : "UPDATE_CATEGORY_RESET",
      });
    }

    if (category) {
      setTitle(category?.title);
    }

    if (modalOpen === false) {
      setTitle("");
    }
  }, [dispatch, isError, isSuccess, upSuccess, upError, category, modalOpen]);

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className=" inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl">
        <h2 className=" text-3xl font-bold">
          {category ? "Update" : "Create"}
        </h2>
        <form
          onSubmit={submitHandler}
          className=" flex flex-col gap-6 text-left mt-6"
        >
          <Input
            bg={true}
            label="Category Name"
            placeholder={"Action"}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            disabled={isLoading || uploading}
            type="submit"
            // onClick={() => setModalOpen(false)}
            className=" w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-transparent border-2 border-subMain rounded bg-subMain"
          >
            {/* {category ? "Update" : "Add"} */}
            {isLoading || uploading
              ? "Loading..."
              : category
              ? "Update"
              : "Create"}
          </button>
        </form>
      </div>
    </MainModal>
  );
};

export default CategoryModel;
