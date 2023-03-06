import React, { useEffect, useState } from "react";
import Uploader from "../../../Components/Uploader";
import { Input, Message, Select } from "../../../Components/UsedInputs";
import Sidebar from "../Sidebar";
// import { CategoriesData } from "../../../data/CategoriesData";
// import { Movies } from "../../../data/MovieData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import CastModal from "../../../Components/Modals/CastModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MovieValidation } from "../../../Components/Validation/MovieValidation";
import {
  createMovieAction,
  removeCastsAction,
} from "../../../Redux/Actions/moviesActions";
import { toast } from "react-hot-toast";
import { InlineError } from "../../../Components/Notifications/Error";
import { ImagePreview } from "../../../Components/ImagePreview";

const AddMovie = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(null);

  // *****************************************************

  const [imageWithoutTitle, setImageWithoutTitle] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categories } = useSelector((state) => state.categoryGetAll);

  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.createMovie
  );

  const { casts } = useSelector((state) => state.casts);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(MovieValidation) });

  // ! on submit
  const onSubmit = (data) => {
    dispatch(
      createMovieAction({
        ...data,
        image: imageWithoutTitle,
        titleImage: imageTitle,
        video: videoUrl,
        casts,
      })
    );

    // console.log({
    //   ...data,
    //   image: imageWithoutTitle,
    //   titleImage: imageTitle,
    //   video: videoUrl,
    //   casts,
    // });
  };

  const deleteCastHandler = (id) => {
    dispatch(removeCastsAction(id));
    toast.success("Cast deleted successfully");
  };

  // *****************************************************

  useEffect(() => {
    if (modalOpen === false) {
      setCast();
    }

    // ! =========================================
    if (isSuccess) {
      reset({
        name: "",
        time: 0,
        year: 0,
        language: "",
        category: "",
        desc: "",
      });
      setImageTitle("");
      setImageWithoutTitle("");
      setVideoUrl("");
      dispatch({ type: "CREATE_MOVIE_RESET" });
      navigate("/addMovie");
    }
    if (isError) {
      toast.error("Somethimg went wrong");
      dispatch({ type: "CREATE_MOVIE_RESET" });
    }
  }, [modalOpen, isError, isSuccess, navigate, dispatch, reset]);

  return (
    <Sidebar>
      <CastModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        cast={cast}
      />
      <div className=" flex flex-col gap-6">
        <h2 className=" text-xl font-bold">Create Movie</h2>
        <div className=" w-full grid md:grid-cols-2 gap-6">
          <div className="w-full">
            <Input
              bg={true}
              label="Movie Title"
              placeholder="Master"
              type="text"
              name="name"
              register={register("name")}
            />
            {errors.name && <InlineError text={errors.name.message} />}
          </div>
          <div className="w-full">
            <Input
              bg={true}
              label="Hours"
              placeholder="1hr"
              type="number"
              name="time"
              register={register("time")}
            />
            {errors.time && <InlineError text={errors.time.message} />}
          </div>
        </div>
        <div className=" w-full grid md:grid-cols-2 gap-6">
          <div className="w-full">
            <Input
              bg={true}
              label="Language Used"
              placeholder="Tamil"
              type="text"
              name="language"
              register={register("language")}
            />
            {errors.language && <InlineError text={errors.language.message} />}
          </div>
          <div className="w-full">
            <Input
              bg={true}
              label="Year of release"
              placeholder="2023"
              type="number"
              name="year"
              register={register("year")}
            />
            {errors.year && <InlineError text={errors.year.message} />}
          </div>
        </div>

        {/* images */}
        <div className=" w-full grid md:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="flex flex-col gap-2">
            <p className=" text-border font-semibold text-sm">
              Image without Title
            </p>
            <Uploader setImageUrl={setImageWithoutTitle} />

            <ImagePreview image={imageWithoutTitle} name="imageWithoutTitle" />
          </div>

          {/* 2 */}
          <div className="flex flex-col gap-2">
            <p className=" text-border font-semibold text-sm">
              Image with Title
            </p>
            <Uploader setImageUrl={setImageTitle} />

            <ImagePreview image={imageTitle} name="imageTitle" />
          </div>
        </div>

        <div className="w-full">
          <Message
            label="Movie Description"
            placeholder="Make it short and Value description"
            bg={true}
            name="desc"
            register={{ ...register("desc") }}
          />
          {errors.desc && <InlineError text={errors.desc.message} />}
        </div>

        <div className="text-sm w-full">
          <Select
            label="Movie category"
            options={categories?.length > 0 ? categories : []}
            name="category"
            register={{ ...register("category") }}
          />
          {errors.category && <InlineError text={errors.category.message} />}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className=" text-border font-semibold text-sm">
            Movie Video
          </label>
          <div className={`w-full grid ${videoUrl && "md:grid-cols-2"} gap-6`}>
            {videoUrl && (
              <div className=" w-full bg-main text-sm text-subMain py-4 border border-border rounded flex-colo">
                Video Uploaded!!!
              </div>
            )}
            <Uploader setImageUrl={setVideoUrl} />
          </div>
        </div>

        <div className=" w-full grid lg:grid-cols-2 gap-6 items-start">
          <button
            onClick={() => setModalOpen(true)}
            className=" w-full py-4 bg-main border border-subMain border-dashed rounded"
          >
            Add Cast
          </button>
          <div className=" grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
            {casts?.length > 0 &&
              casts?.map((user) => (
                <div
                  className=" p-2 italic text-xs text-text rounded flex-colo bg-main border border-border"
                  key={user.id}
                >
                  <img
                    src={user?.image ? user?.image : ""}
                    alt={user.name}
                    className=" w-full h-24 object-cover rounded mb-4"
                  />
                  <p>{user.name}</p>

                  <div className=" flex-rows mt-2 w-full gap-2">
                    <button
                      onClick={() => deleteCastHandler(user?.id)}
                      className=" w-6 h-6 flex-colo bg-dry border border-border border-dashed rounded text-red-600"
                    >
                      <MdDelete />
                    </button>
                    <button
                      onClick={() => {
                        setCast(user);
                        setModalOpen(true);
                      }}
                      className=" w-6 h-6 flex-colo bg-dry border border-border border-dashed rounded text-green-600"
                    >
                      <FaEdit />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <button
          // disabled={isLoading || !imageTitle || !imageWithoutTitle || !videoUrl}
          disabled={isLoading}
          onClick={handleSubmit(onSubmit)}
          className=" bg-subMain w-full flex-rows gap-6 transitions font-medium hover:bg-dry border border-subMain py-3 rounded "
        >
          {isLoading ? (
            "Please wait...😊"
          ) : (
            <>
              <ImUpload /> Publish Movie
            </>
          )}
        </button>
      </div>
    </Sidebar>
  );
};

export default AddMovie;
