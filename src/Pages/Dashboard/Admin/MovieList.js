import React from "react";
import Table from "../../../Components/Table";
import { Movies } from "../../../data/MovieData";
import Sidebar from "../Sidebar";

const MovieList = () => {
  return (
    <Sidebar>
      <div className=" flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className=" text-xl font-bold">Movies List</h2>
          <button className=" bg-main font-medium transitions hover:bg-subMain border border-subMain py-3 px-6 rounded">
            Delete All
          </button>
        </div>

        <Table data={Movies} admin={true} />
      </div>
    </Sidebar>
  );
};

export default MovieList;
