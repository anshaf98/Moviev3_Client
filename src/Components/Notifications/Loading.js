import { PuffLoader } from "react-spinners";

function Loading() {
  return (
    <div className=" w-full py-4 px-2 flex-colo">
      <PuffLoader color="#dfe6e9" />
    </div>
  );
}

export default Loading;
