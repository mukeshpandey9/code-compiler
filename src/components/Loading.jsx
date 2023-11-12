import React from "react";
import { Watch } from "react-loader-spinner";

function Loading() {
  return (
    <div className="overlay absolute top-0 z-[9999] w-full flex justify-center items-center h-full bg-[#ffffff1a]">
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Loading;
