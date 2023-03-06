import React, { useContext, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link, useParams } from "react-router-dom";
// import { Movies } from "../data/MovieData";
import { BiArrowBack } from "react-icons/bi";
import { FaDownload, FaHeart, FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByIdAction } from "../Redux/Actions/moviesActions";
import Loading from "../Components/Notifications/Loading";
import { RiMovie2Line } from "react-icons/ri";
import {
  DownloadVideo,
  IfMovieLiked,
  LikeMovie,
} from "../Context/FunctionFavorite";
import FileSaver from "file-saver";
import { SidebarContext } from "../Context/DrawerContext";

const WatchPage = () => {
  // const movie = Movies.find((movie) => movie.name === id);
  const { progress, setprogress } = useContext(SidebarContext);
  const sameClass = "w-full gap-6 flex-colo min-h-screen";
  const dispatch = useDispatch();
  let { id } = useParams();
  const { isLoading, isError, movie } = useSelector(
    (state) => state.getMovieById
  );

  // ! FAV. =========================================================
  const { isLoading: likeLoading } = useSelector(
    (state) => state.userLikeMovie
  );
  const { userInfo } = useSelector((state) => state.userLogin);

  const isLiked = (movie) => {
    return IfMovieLiked(movie);
  };

  // ! FAV. =========================================================
  const [play, setPlay] = useState(false);

  const DownloadMovieVideo = async (videoUrl, name) => {
    await DownloadVideo(videoUrl, setprogress).than((data) => {
      setprogress(0);
      FileSaver.saveAs(data, name);
    });
  };

  useEffect(() => {
    dispatch(getMovieByIdAction(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <div className=" container mx-auto bg-dry p-6 mb-12">
        {!isError && (
          <div className=" flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
            <Link
              to={`/movie/${movie?._id}`}
              className=" md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray"
            >
              <BiArrowBack /> {movie?.name}
            </Link>

            <div className=" flex-btn sm:w-auto w-full gap-5">
              <button
                onClick={() => LikeMovie(movie, dispatch, userInfo)}
                disabled={isLiked(movie) || likeLoading}
                className={`
                ${
                  isLiked(movie) ? "text-subMain" : "text-white"
                }  bg-white hover:text-subMain transitions bg-opacity-30 rounded px-4 py-3 text-sm`}
              >
                <FaHeart />
              </button>
              <button
                disabled={progress > 0 && progress < 100}
                onClick={() => DownloadMovieVideo(movie?.video, movie?.name)}
                className=" bg-subMain flex-rows gap-2 hover:text-main transitions text-white rounded px-8 font-medium py-3 text-sm"
              >
                <FaDownload /> Download
              </button>
            </div>
          </div>
        )}

        {/* watch video */}
        {play ? (
          <video controls autoPlay={play} className=" w-full h-full rounded">
            <source src={movie?.video} type="video/mp4" title={movie?.name} />
          </video>
        ) : (
          <div className=" w-full h-screen rounded-lg overflow-hidden relative">
            {isLoading ? (
              <div className={sameClass}>
                <Loading />
              </div>
            ) : isError ? (
              <div className={sameClass}>
                <div className="flex-colo w-24 h-24 p-5 mb-4 rounded-full bg-dry text-subMain text-4xl">
                  <RiMovie2Line />
                </div>
                <p className=" text-border text-sm">{isError}</p>
              </div>
            ) : (
              <>
                <div className=" absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo">
                  <button
                    onClick={() => setPlay(true)}
                    className=" bg-white text-subMain flex-colo border border-subMain rounded-full font-medium w-20 h-20 text-xl"
                  >
                    <FaPlay />
                  </button>
                </div>
                <img
                  src={movie?.image ? movie?.image : ""}
                  alt={movie?.name}
                  className=" w-full h-full object-cover rounded-lg"
                />
              </>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WatchPage;
