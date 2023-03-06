import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Uploader from "../Uploader";
import { Input } from "../UsedInputs";
import MainModal from "./MainModal";
import * as yup from "yup";
import {
  addCastsAction,
  updateCastsAction,
} from "../../Redux/Actions/moviesActions";
import { toast } from "react-hot-toast";
import { InlineError } from "../Notifications/Error";
import { ImagePreview } from "../ImagePreview";

const CastModal = ({ modalOpen, setModalOpen, cast }) => {
  const dispatch = useDispatch();
  const [castImage, setCastImage] = useState("");
  const generateId = Math.floor(Math.random() * 10000000000);
  const image = castImage ? castImage : cast?.image;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required("Cast name is required"),
      })
    ),
  });

  // ! on submit
  const onSubmit = (data) => {
    if (cast) {
      dispatch(
        updateCastsAction({
          ...data,
          image: image,
          id: cast.id,
        })
      );
      toast.success("Cast updated successfully");
    } else {
      dispatch(
        addCastsAction({
          ...data,
          image: image,
          id: generateId,
        })
      );
      toast.success("Cast created successfully");
    }
    reset();
    setCastImage("");
    setModalOpen(false);
  };

  useEffect(() => {
    if (cast) {
      setValue("name", cast?.name);
    }
  }, [cast, setValue]);

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className=" inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl">
        <h2 className=" text-3xl font-bold">
          {cast ? "Update Cast" : "Create Cast"}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-6 text-left mt-6"
        >
          <div className=" w-full">
            <Input
              bg={true}
              label="Cast Name"
              placeholder="Hero"
              type="text"
              name="name"
              register={register("name")}
            />
            {errors.name && <InlineError text={errors.name.message} />}
          </div>
          {/* image */}
          <div className="flex flex-col gap-2">
            <p className=" text-border font-semibold text-sm">Cast Image</p>
            <Uploader setImageUrl={setCastImage} />
            <ImagePreview image={image ? image : ""} name="cast" />
          </div>
          <button
            type="submit"
            onClick={() => setModalOpen(false)}
            className=" w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-transparent border-2 border-subMain rounded bg-subMain"
          >
            {cast ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </MainModal>
  );
};

export default CastModal;
