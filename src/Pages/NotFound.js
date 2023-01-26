import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6">
      <h1 className=" lg:text-8xl font-bold text-subMain">404</h1>
      <h1 className=" lg:text-4xl font-bold">Page Not Found</h1>
      <p className=" font-medium text-border italic leading-6">
        The page you are looking for does not exist. You may have mis typed the
        URL
      </p>
      <Link
        to="/"
        className=" bg-subMain transitions flex-rows gap-4 text-white font-medium py-3 px-4 rounded-md hover:text-main"
      >
        <FaHome /> Go Back Home
      </Link>
      {/* <img
        src="https://w7.pngwing.com/pngs/1004/51/png-transparent-http-404-t-shirt-error-error-404-angle-text-triangle.png"
        alt=""
        className=" w-full h-96 object-cover"
      /> */}
    </div>
  );
};

export default NotFound;
