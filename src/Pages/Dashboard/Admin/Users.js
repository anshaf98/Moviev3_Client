import React from "react";
import Table2 from "../../../Components/Table2";
import { Movies } from "../../../data/MovieData";
import Sidebar from "../Sidebar";

const Users = () => {
  return (
    <Sidebar>
      <div className=" flex flex-col gap-6">
        <h2 className=" text-xl font-bold">Users</h2>

        <Table2 data={Movies} users={true} />
      </div>
    </Sidebar>
  );
};

export default Users;
