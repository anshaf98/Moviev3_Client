import React from "react";
import Banner from "../Components/homePage/Banner";
import PopularMovies from "../Components/homePage/PopularMovies";
import Promos from "../Components/homePage/Promos";
import TopRated from "../Components/homePage/TopRated";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className=" container mx-auto min-h-screen px-2 mb-6">
        <Banner />
        <PopularMovies />
        <Promos />
        <TopRated />
      </div>
    </Layout>
  );
};

export default Home;
