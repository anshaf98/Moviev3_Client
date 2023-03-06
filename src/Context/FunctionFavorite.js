import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { likeMovieAction } from "../Redux/Actions/userActions";
import Axios from "../Redux/APIs/Axios";
import { IoMdCloudDownload } from "react-icons/io";

const IfMovieLiked = (movie) => {
  const { likedMovies } = useSelector((state) => state.userGetFavoriteMovies);
  return likedMovies?.find((likedMovie) => likedMovie?._id === movie?._id);
};

const LikeMovie = (movie, dispatch, userInfo) => {
  return !userInfo
    ? toast.error("Please Login to add to favorites")
    : dispatch(likeMovieAction({ movieId: movie?._id }));
};

const DownloadVideo = async (videoUrl, setProgress) => {
  const { data } = await Axios({
    url: videoUrl,
    method: "GET",
    responseType: "blob",
    onDownloadProgress: (ProgressEvent) => {
      const { loaded, total } = ProgressEvent;
      let percent = Math.floor((loaded * 100) / total);
      setProgress(percent);
      if (percent > 0 && percent < 100) {
        toast.loading(`Downloading... ${percent}%`, {
          id: "download",
          duration: 100000000,
          position: "bottom-right",
          style: {
            background: "#0b0f29",
            color: "#fff",
            borderRadius: "10px",
            border: "0.5px solid #f20000",
            padding: "16px",
          },
          icon: <IoMdCloudDownload className=" text-2xl mr-2 text-[#f20000]" />,
        });
      } else {
        toast.dismiss("download");
      }
    },
  });

  return data;
};

export { IfMovieLiked, LikeMovie, DownloadVideo };
