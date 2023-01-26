import React, { useEffect, useState } from "react";
import Uploader from "../../../Components/Uploader";
import { Input, Message, Select } from "../../../Components/UsedInputs";
import Sidebar from "../Sidebar";
import { CategoriesData } from "../../../data/CategoriesData";
import { Movies } from "../../../data/MovieData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import CastModal from "../../../Components/Modals/CastModal";

const AddMovie = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (modalOpen === false) {
      setCast();
    }
  }, [modalOpen]);

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
          <Input
            bg={true}
            label="Movie Title"
            placeholder="Master"
            type="text"
          />
          <Input bg={true} label="Hours" placeholder="2.5hr" type="text" />
        </div>
        <div className=" w-full grid md:grid-cols-2 gap-6">
          <Input
            bg={true}
            label="Language Used"
            placeholder="Tamil"
            type="text"
          />
          <Input
            bg={true}
            label="Year of release"
            placeholder="2023"
            type="number"
          />
        </div>

        {/* images */}
        <div className=" w-full grid md:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="flex flex-col gap-2">
            <p className=" text-border font-semibold text-sm">
              Image without Title
            </p>
            <Uploader />

            <div className=" w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src="https://m.media-amazon.com/images/M/MV5BOTRkYWY3ZGEtYzU5My00ZGY4LThhYjEtNTYyNzFhMDM4MTUyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
                alt=""
                className=" w-full h-full object-cover rounded"
              />
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-2">
            <p className=" text-border font-semibold text-sm">
              Image with Title
            </p>
            <Uploader />

            <div className=" w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src="https://m.media-amazon.com/images/M/MV5BOTRkYWY3ZGEtYzU5My00ZGY4LThhYjEtNTYyNzFhMDM4MTUyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
                alt=""
                className=" w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>

        <Message
          label="Movie Description"
          placeholder="Make it short and sweet"
          bg={true}
        />

        <div className="text-sm w-full">
          <Select label="Movie category" options={CategoriesData} />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className=" text-border font-semibold text-sm">
            Movie Video
          </label>
          <Uploader />
        </div>

        <div className=" w-full grid lg:grid-cols-2 gap-6 items-start">
          <button
            onClick={() => setModalOpen(true)}
            className=" w-full py-4 bg-main border border-subMain border-dashed rounded"
          >
            Add Cast
          </button>
          <div className=" grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
            {Movies.map((user, i) => (
              <div
                className=" p-2 italic text-xs text-text rounded flex-colo bg-main border border-border"
                key={i}
              >
                <img
                  src={user.image ? user.image : ""}
                  alt=""
                  className=" w-full h-24 object-cover rounded mb-4"
                />
                <p>{user.name}</p>

                <div className=" flex-rows mt-2 w-full gap-2">
                  <button className=" w-6 h-6 flex-colo bg-dry border border-border border-dashed rounded text-red-600">
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

        <button className=" bg-subMain w-full flex-rows gap-6 transitions font-medium hover:bg-dry border border-subMain py-3 rounded ">
          <ImUpload /> Publish Movie
        </button>
      </div>
    </Sidebar>
  );
};

export default AddMovie;
