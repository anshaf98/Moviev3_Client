import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { HiPlusCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../../../Components/Empty";
import CategoryModel from "../../../Components/Modals/CategoryModal";
import Loading from "../../../Components/Notifications/Loading";
import Table2 from "../../../Components/Table2";
import {
  deleteCategoryAction,
  getAllCategoriesAction,
} from "../../../Redux/Actions/categoriesActions";
import Sidebar from "../Sidebar";

const Categories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState();

  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector(
    (state) => state.categoryGetAll
  );

  // * DELETE
  const { isError, isSuccess } = useSelector((state) => state.categoryDelete);

  const adminDeleteCategory = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCategoryAction(id));
    }
  };

  // ! ================================================
  const onEditFunction = (id) => {
    setCategory(id);
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    if (isError) {
      toast.error(isError);
      dispatch({
        type: "DELETE_CATEGORY_RESET",
      });
    }
    if (isSuccess) {
      dispatch({
        type: "DELETE_CATEGORY_RESET",
      });
    }

    // ? ===============================================
    if (modalOpen === false) {
      setCategory();
    }
  }, [modalOpen, dispatch, isError, isSuccess]);

  return (
    <Sidebar>
      <CategoryModel
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        category={category}
      />
      <div className=" flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className=" text-xl font-bold">Categories</h2>
          <button
            onClick={() => setModalOpen(true)}
            className=" bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain py-2 px-4 rounded"
          >
            <HiPlusCircle /> Create
          </button>
        </div>

        {isLoading ? (
          <Loading />
        ) : categories?.length > 0 ? (
          <Table2
            data={categories}
            users={false}
            onEditFunction={onEditFunction}
            onDeleteFunction={adminDeleteCategory}
          />
        ) : (
          <Empty message="You dont have any categories" />
        )}

        {/* <Table2
          data={CategoriesData}
          users={false}
          onEditFunction={onEditFunction}
        /> */}
      </div>
    </Sidebar>
  );
};

export default Categories;
