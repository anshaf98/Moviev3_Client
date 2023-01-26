import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../Title";
import { Autoplay } from "swiper";
import { Movies } from "../../data/MovieData";

const MovieCasts = () => {
  return (
    <div className=" my-12">
      <Title title="Casts" Icon={FaUserFriends} />

      <div className=" mt-10">
        <Swiper
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          modules={[Autoplay]}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {Movies.map((user, i) => (
            <SwiperSlide key={i}>
              <div className=" w-full flex-colo p-3 italic text-xs text-text rounded bg-dry border border-gray-800">
                <img
                  src={user.image}
                  alt=""
                  className=" w-full h-64 object-cover rounded mb-4"
                />
                <p>{user?.fullName}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieCasts;