import React from "react";
import MainDrawer from "./MainDrawer";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function MenuDrawer({ drawerOpen, toggleDrawer }) {
  return (
    <MainDrawer drawerOpen={drawerOpen} closeDrawer={toggleDrawer}>
      <div className=" flex flex-col w-full h-full justify-between items-center bg-main text-white rounded">
        <div className=" w-full flex-btn h-16 px-6 py-4 bg-dry">
          <Link onClick={toggleDrawer} to="/">
            <img
              src="https://res.cloudinary.com/dpakxje91/image/upload/v1666016162/a_bk5msv.png"
              alt=""
              className="w-10 h-10 object-cover"
            />
          </Link>
          <button
            onClick={toggleDrawer}
            type="button"
            className="transitions w-10 h-10 flex-colo text-base  text-white bg-subMain rounded-full hover:bg-white hover:text-subMain"
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </MainDrawer>
  );
}

export default MenuDrawer;
