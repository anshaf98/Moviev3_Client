import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Components/UsedInputs";
import Layout from "../Layout/Layout";
import { FiLogIn } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginAction } from "../Redux/Actions/userActions";
import { LoginValidation } from "../Components/Validation/UserValidation";
import { InlineError } from "../Components/Notifications/Error";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, userInfo, isSuccess } = useSelector(
    (state) => state.userLogin
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginValidation) });

  // ! on submit
  const onSubmit = (data) => {
    dispatch(loginAction(data));
    // console.log(data);
  };

  useEffect(() => {
    if (userInfo?.isAdmin) {
      navigate("/");
    } else if (userInfo) {
      navigate("/profile");
    }

    if (isSuccess) {
      toast.success(`Welcome back ${userInfo.fullName}`);
    }

    if (isError) {
      toast.error(isError);
      dispatch({ type: "USER_LOGIN_RESET" });
    }
  }, [userInfo, isSuccess, isError, navigate, dispatch]);

  return (
    <Layout>
      <div className=" container mx-auto px-2 my-24 flex-colo">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border"
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
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                <FiLogIn /> Login
              </>
            )}
          </button>

          <p className=" text-center text-border">
            Don't have an account?{" "}
            <Link to="/register" className=" text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
