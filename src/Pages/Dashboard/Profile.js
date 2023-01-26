import React from "react";
import Uploader from "../../Components/Uploader";
import { Input } from "../../Components/UsedInputs";

import Sidebar from "./Sidebar";

const Profile = () => {
  return (
    <Sidebar>
      <div className=" flex flex-col gap-6">
        <h2 className=" text-xl font-bold">Profile</h2>
        <Uploader />
        <Input
          bg={true}
          label="FullName"
          placeholder="Enter your fullname"
          type="text"
        />
        <Input
          bg={true}
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <div className=" flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button className=" bg-subMain transitions hover:bg-main border border-subMain py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button>
          <button className=" bg-main transitions hover:bg-subMain border border-subMain py-3 px-6 rounded w-full sm:w-auto">
            Update Profile
          </button>
        </div>
      </div>
    </Sidebar>
  );
};

export default Profile;
