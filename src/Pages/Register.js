import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../Components/UsedInputs";
import Layout from "../Layout/Layout";
import { FiLogIn } from "react-icons/fi";

const Register = () => {
  return (
    <Layout>
      <div className=" container mx-auto px-2 my-24 flex-colo">
        <div className=" w-full 2xl:w-2/5 gap-8 flex-colo p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <h1
            className=" text-subMain text-3xl"
            style={{ fontFamily: "Island Moments, cursive" }}
          >
            Mohamed
          </h1>

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
          <Input
            bg={true}
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <Link
            to="/dashboard"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-8 sm:p-14 rounded-lg w-full"
          >
            <FiLogIn /> Sign Up
          </Link>

          <p className=" text-center text-border">
            Already have an account?{" "}
            <Link to="/login" className=" text-dryGray font-semibold ml-2">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
