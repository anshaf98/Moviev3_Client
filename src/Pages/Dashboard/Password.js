import React, { useEffect } from "react";
import { Input } from "../../Components/UsedInputs";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { PasswordValidation } from "../../Components/Validation/UserValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InlineError } from "../../Components/Notifications/Error";
import { changePasswordAction } from "../../Redux/Actions/userActions";
import { toast } from "react-hot-toast";

const Password = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.userChangePassword
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(PasswordValidation) });

  const onSubmit = (data) => {
    dispatch(changePasswordAction(data));
    // console.log(data);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
    }
    if (isError) {
      toast.error(isError);
      dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
    }
    if (message) {
      toast.success(message);
      reset();
    }
  }, [dispatch, isSuccess, isError, message, reset]);

  return (
    <Sidebar>
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-6">
        <h2 className=" text-xl font-bold">Change Password</h2>
        <div className="w-full">
          <Input
            bg={true}
            label="Previous Password"
            placeholder="Enter your Previous Password"
            type="password"
            name="oldPassword"
            register={register("oldPassword")}
          />
          {errors.oldPassword && (
            <InlineError text={errors.oldPassword.message} />
          )}
        </div>
        <div className="w-full">
          <Input
            bg={true}
            label="New Password"
            placeholder="Enter your New Password"
            type="password"
            name="newPassword"
            register={register("newPassword")}
          />
          {errors.newPassword && (
            <InlineError text={errors.newPassword.message} />
          )}
        </div>
        <div className="w-full">
          <Input
            bg={true}
            label="Confirm Password"
            placeholder="Enter your Confirm Password"
            type="password"
            name="confirmPassword"
            register={register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <InlineError text={errors.confirmPassword.message} />
          )}
        </div>

        <div className=" flex justify-end items-center my-4">
          <button
            disabled={isLoading}
            type="submit"
            className=" bg-main transitions hover:bg-subMain border border-subMain py-3 px-6 rounded w-full sm:w-auto"
          >
            {isLoading ? "Changing..." : "Change Password"}
          </button>
        </div>
      </form>
    </Sidebar>
  );
};

export default Password;
