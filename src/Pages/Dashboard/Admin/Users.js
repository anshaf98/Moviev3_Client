import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../../../Components/Empty";
import Loading from "../../../Components/Notifications/Loading";
import Table2 from "../../../Components/Table2";
// import { Movies } from "../../../data/MovieData";
import {
  deleteUserAction,
  getAllUsersAction,
} from "../../../Redux/Actions/userActions";
import Sidebar from "../Sidebar";

const Users = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, users } = useSelector(
    (state) => state.adminGetAllUsers
  );
  // * DELETE
  const { isError: deleteError, isSuccess } = useSelector(
    (state) => state.adminDeleteUser
  );

  const deleteMoviesHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUserAction(id));
    }
  };

  useEffect(() => {
    dispatch(getAllUsersAction());
    if (isError || deleteError) {
      toast.error(isError || deleteError);
      dispatch({
        type: isError ? "GET_ALL_USERS_RESET" : "DELETE_USER_RESET",
      });
    }
  }, [dispatch, isError, deleteError, isSuccess]);

  return (
    <Sidebar>
      <div className=" flex flex-col gap-6">
        <h2 className=" text-xl font-bold">Users</h2>

        {isLoading ? (
          <Loading />
        ) : users?.length > 0 ? (
          <Table2
            data={users}
            // admin={false}
            users={true}
            onDeleteFunction={deleteMoviesHandler}
          />
        ) : (
          <Empty message="You dont have any user" />
        )}
      </div>
    </Sidebar>
  );
};

export default Users;
