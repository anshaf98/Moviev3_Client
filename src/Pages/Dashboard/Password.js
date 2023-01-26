import React from "react";
import { Input } from "../../Components/UsedInputs";
import Sidebar from "./Sidebar";

const Password = () => {
  return (
    <Sidebar>
      <div className=" flex flex-col gap-6">
        <h2 className=" text-xl font-bold">Change Password</h2>
        <Input
          bg={true}
          label="Previous Password"
          placeholder="Enter your Previous Password"
          type="password"
        />
        <Input
          bg={true}
          label="New Email"
          placeholder="Enter your New Password"
          type="password"
        />
        <Input
          bg={true}
          label="Confirm Email"
          placeholder="Enter your Confirm Password"
          type="password"
        />
        <div className=" flex justify-end items-center my-4">
          <button className=" bg-main transitions hover:bg-subMain border border-subMain py-3 px-6 rounded w-full sm:w-auto">
            Change Password
          </button>
        </div>
      </div>
    </Sidebar>
  );
};

export default Password;
