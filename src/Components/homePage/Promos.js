import React from "react";
import { FaUser } from "react-icons/fa";

const Promos = () => {
  return (
    <div className=" my-20 py-10 md:px-20 px-8 bg-dry">
      <div className=" lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className=" flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
            Download Your Movies & Watch Offline. <br /> Enjoy on Uour Mobile
          </h1>
          <p className=" text-text text-sm xl:text-base leading-6 xl:leading-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            eaque quam repellendus quod tempore optio qui dolores doloremque
            commodi, eligendi earum iusto molestias natus eius ab est
            voluptatibus explicabo rerum.
          </p>

          <div className=" flex gap-4 md:text-lg text-sm">
            <div className=" flex-colo bg-main text-subMain px-6 py-0 rounded font-bold">
              HD 4K
            </div>
            <div className=" flex-rows gap-4 bg-main text-subMain px-6 py-0 rounded font-bold">
              <FaUser /> 2K
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://www.jio.com/unlimited-entertainment-latest.png"
            alt=""
            className=" w-full h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Promos;
