import React from "react";
import Footer from "./Footer/Footer";
import MobileFooter from "./Footer/MobileFooter";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className=" bg-main text-white">
        <Navbar />
        {children}
        <Footer />

        {/* mobile footer */}
        <MobileFooter />
      </div>
    </>
  );
};

export default Layout;
