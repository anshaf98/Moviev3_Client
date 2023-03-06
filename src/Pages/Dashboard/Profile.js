import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { ImagePreview } from "../../Components/ImagePreview";
import { InlineError } from "../../Components/Notifications/Error";
import Uploader from "../../Components/Uploader";
import { Input } from "../../Components/UsedInputs";
import { ProfileValidation } from "../../Components/Validation/UserValidation";
import {
  deleteProfileAction,
  updateProfileAction,
} from "../../Redux/Actions/userActions";
// import { USER_DELETE_PROFILE_RESET } from "../../Redux/Constants/userConstants";

import Sidebar from "./Sidebar";

const Profile = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const [imageUrl, setImageUrl] = useState(userInfo ? userInfo.image : "");
  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.userUpdateProfile
  );
  const { isLoading: deleteLoading, isError: deleteError } = useSelector(
    (state) => state.userDeleteProfile
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ProfileValidation) });

  // * UPDATE
  const onSubmit = (data) => {
    dispatch(updateProfileAction({ ...data, image: imageUrl }));
    // console.log({ ...data, image: imageUrl });
  };

  // * DELETE
  const deleteProfile = () => {
    window.confirm("Are you sure you want to delete your profile?") &&
      dispatch(deleteProfileAction());
  };

  useEffect(() => {
    if (userInfo) {
      setValue("fullName", userInfo?.fullName);
      setValue("email", userInfo?.email);
    }
    if (isSuccess) {
      dispatch({ type: "USER_UPDATE_PROFILE_RESET" });
    }
    if (isError || deleteError) {
      toast.error(isError || deleteError);
      dispatch({ type: "USER_UPDATE_PROFILE_RESET" });
      dispatch({ type: "USER_DELETE_PROFILE_RESET" });
    }
  }, [userInfo, setValue, dispatch, isSuccess, isError, deleteError]);

  return (
    <Sidebar>
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-6">
        <h2 className=" text-xl font-bold">Profile</h2>
        <div className=" w-full grid lg:grid-cols-12 gap-6">
          <div className=" col-span-10">
            <Uploader setImageUrl={setImageUrl} />
          </div>

          {/* IMAGE PREVIEW ================================== */}
          <div className=" col-span-2">
            <ImagePreview
              image={imageUrl}
              name={userInfo ? userInfo.fullName : "Mohamed"}
            />
          </div>
        </div>

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
        <div className=" flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button
            onClick={deleteProfile}
            disabled={deleteLoading || isLoading}
            className=" bg-subMain transitions hover:bg-main border border-subMain py-3 px-6 rounded w-full sm:w-auto"
          >
            {deleteLoading ? "Loading..." : "Delete Account"}
          </button>
          <button
            disabled={deleteLoading || isLoading}
            className=" bg-main transitions hover:bg-subMain border border-subMain py-3 px-6 rounded w-full sm:w-auto"
          >
            {isLoading ? "Loading..." : "Update Profile"}
          </button>
        </div>
      </form>
    </Sidebar>
  );
};

export default Profile;
