import React from "react";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import Table from "../../../Components/Table";
import { Movies } from "../../../data/MovieData";
import Sidebar from "../Sidebar";

const Dashboard = () => {
  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      title: "Total Movies",
      total: 90,
    },
    {
      bg: "bg-blue-700",
      icon: HiViewGridAdd,
      title: "Total Category",
      total: 8,
    },
    {
      bg: "bg-green-700",
      icon: FaUser,
      title: "Total Users",
      total: 100,
    },
  ];

  return (
    <Sidebar>
      <h2 className=" text-xl font-bold">Dashboard</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {DashboardData.map((data, index) => (
          <div
            className=" p-4 rounded bg-main border-border grid grid-cols-4 gap-2"
            key={index}
          >
            <div
              className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
            >
              <data.icon />
            </div>

            <div className="col-span-3">
              <h2>{data.title}</h2>
              <p className=" mt-2 font-bold">{data.total}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className=" text-md font-medium my-6 text-border">Recent Movies</h3>
      <Table data={Movies.slice(0, 5)} admin={true} />
    </Sidebar>
  );
};

export default Dashboard;
