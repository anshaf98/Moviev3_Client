import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Components/UsedInputs";
import Layout from "../Layout/Layout";
import { FiLogIn } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { RegisterValidation } from "../Components/Validation/UserValidation";
import { registerAction } from "../Redux/Actions/userActions";
import { InlineError } from "../Components/Notifications/Error";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, userInfo, isSuccess } = useSelector(
    (state) => state.userLogin
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterValidation) });

  // ! on submit
  const onSubmit = (data) => {
    dispatch(registerAction(data));
    // console.log(data);
  };

  useEffect(() => {
    if (userInfo?.isAdmin) {
      navigate("/");
    } else if (userInfo) {
      navigate("/profile");
    }

    if (isSuccess) {
      toast.success(`Welcome ${userInfo.fullName}`);
      dispatch({ type: "USER_REGISTER_RESET" });
    }

    if (isError) {
      toast.error(isError);
      dispatch({ type: "USER_REGISTER_RESET" });
    }
  }, [userInfo, isSuccess, isError, navigate, dispatch]);

  return (
    <Layout>
      <div className=" container mx-auto px-2 my-24 flex-colo">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full 2xl:w-2/5 gap-8 flex-colo p-14 md:w-3/5 bg-dry rounded-lg border border-border"
        >
          <h1
            className=" text-subMain text-3xl"
            style={{ fontFamily: "Island Moments, cursive" }}
          >
            Mohamed
          </h1>

          <div className="w-full">
            <Input
              bg={true}
              label="FullName"
              placeholder="Enter your fullname"
              type="text"
              name="fullName"
              register={register("fullName")}
            />
            {errors.fullName && <InlineError text={errors.fullName.message} />}
          </div>

          <div className="w-full">
            <Input
              bg={true}
              label="Email"
              placeholder="Enter your email"
              type="email"
              name="email"
              register={register("email")}
            />
            {errors.email && <InlineError text={errors.email.message} />}
          </div>

          <div className="w-full">
            <Input
              bg={true}
              label="Password"
              placeholder="Enter your password"
              type="password"
              name="password"
              register={register("password")}
            />
            {errors.password && <InlineError text={errors.password.message} />}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4  rounded-lg w-full"
          >
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                <FiLogIn /> Register
              </>
            )}
          </button>

          <p className=" text-center text-border">
            Already have an account?{" "}
            <Link to="/login" className=" text-dryGray font-semibold ml-2">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
