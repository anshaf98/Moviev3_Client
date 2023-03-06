import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCasts from "../Components/SingleMovie/MovieCasts";
import MovieInfo from "../Components/SingleMovie/MovieInfo";
import MovieRates from "../Components/SingleMovie/MovieRates";
import Title from "../Components/Title";
// import { Movies } from "../data/MovieData";
import Layout from "../Layout/Layout";
import { BsCollectionFill } from "react-icons/bs";
import Movie from "../Components/Movie";
import ShareMovieModal from "../Components/Modals/ShareModal";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByIdAction } from "../Redux/Actions/moviesActions";
import Loading from "../Components/Notifications/Loading";
import { RiMovie2Line } from "react-icons/ri";
import { DownloadVideo } from "../Context/FunctionFavorite";
import FileSaver from "file-saver";
import { SidebarContext } from "../Context/DrawerContext";

function SingleMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const sameClass = "w-full gap-6 flex-colo min-h-screen";
  const { progress, setprogress } = useContext(SidebarContext);

  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading, isError, movie } = useSelector(
    (state) => state.getMovieById
  );

  const { movies } = useSelector((state) => state.getAllMovies);

  const RelatedMovies = movies?.filter((m) => m.category === movie?.category);

  const DownloadMovieVideo = async (videoUrl, name) => {
    await DownloadVideo(videoUrl, setprogress).than((data) => {
      setprogress(0);
      FileSaver.saveAs(data, name);
    });
  };

  useEffect(() => {
    dispatch(getMovieByIdAction(id));
  }, [dispatch, id]);

  // ! MODEL ============================================================

  return (
    <Layout>
      {isLoading ? (
        <div className={sameClass}>
          <Loading />
        </div>
      ) : isError ? (
        <div className={sameClass}>
          <div className="flex-colo w-24 h-24 p-5 mb-4 rounded-full bg-dry text-subMain text-4xl">
            <RiMovie2Line />
          </div>
          <p className=" text-border text-sm">Something want wrong</p>
        </div>
      ) : (
        <>
          <ShareMovieModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            movie={movie}
          />
          <MovieInfo
            movie={movie}
            setModalOpen={setModalOpen}
            DownloadVideo={DownloadMovieVideo}
            progress={progress}
          />

          <div className=" container mx-auto min-h-screen px-5 my-6">
            <MovieCasts movie={movie} />

            <MovieRates movie={movie} />

            {/* related */}

            {RelatedMovies?.length > 0 && (
              <div className="my-16">
                <Title title="Related Movies" Icon={BsCollectionFill} />

                <div className=" grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                  {RelatedMovies?.map((movie) => (
                    <Movie key={movie?._id} movie={movie} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </Layout>
  );
}

export default SingleMovie;
