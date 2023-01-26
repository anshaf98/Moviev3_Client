import React from "react";
import Head from "../Components/Head";
import Layout from "../Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className=" min-h-screen container mx-auto px-2 my-6">
        <Head title="About Us" />
        <div className=" xl:py-20 py-10 px-4">
          <div className=" grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className=" text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to our Mohamed
              </h3>
              <div className=" mt-3 text-sm leading-8 text-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  facere beatae necessitatibus nam, officiis fugiat aspernatur
                  aliquam voluptatem suscipit blanditiis quisquam culpa nobis
                  quo? Similique ad ullam id voluptate architecto! facere beatae
                  necessitatibus nam, officiis fugiat aspernatur aliquam
                  voluptatem suscipit blanditiis quisquam culpa nobis quo?
                  Similique ad ullam id voluptate architecto!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  facere beatae necessitatibus nam, officiis fugiat aspernatur
                  aliquam voluptatem suscipit blanditiis quisquam culpa nobis
                  quo? Similique ad ullam id voluptate architecto! facere beatae
                  necessitatibus nam, officiis fugiat aspernatur aliquam
                  voluptatem suscipit blanditiis quisquam culpa nobis quo?
                  Similique ad ullam id voluptate architecto!
                </p>
              </div>

              {/* boxs */}
              <div className=" grid md:grid-cols-2 gap-6 mt-8">
                {/* box */}
                <div className=" p-8 bg-dry rounded-lg">
                  <span className=" text-3xl block font-extrabold mt-4">
                    10K
                  </span>
                  <h4 className=" text-lg font-semibold my-2">Listed Movies</h4>
                  <p className=" mb-0 text-text leading-7 text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                {/* box */}
                <div className=" p-8 bg-dry rounded-lg">
                  <span className=" text-3xl block font-extrabold mt-4">
                    8K
                  </span>
                  <h4 className=" text-lg font-semibold my-2">Lovely Users</h4>
                  <p className=" mb-0 text-text leading-7 text-sm">
                    Completely free, without registration!
                  </p>
                </div>
              </div>
            </div>

            {/* about image */}
            <div className=" mt-10 lg:mt-0">
              <img
                src="https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/inception-2010/large_ziKvu3Th9l1wN2aIeVj5ElpBqFu.jpg"
                alt=""
                className=" w-full xl:block hidden h-header rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
