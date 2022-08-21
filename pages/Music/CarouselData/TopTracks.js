import Image from "next/image";
import React, { useState } from "react";

const TopTracks = (TopTracks, Index) => {
  const { Tracks } = TopTracks;
  const [imageIndex, setImageIndex] = useState(Index);
  return (
    <>
      {Tracks?.map((track, idx) => (
        <div
          key={idx}
          // className={idx === imageIndex ? "slide activeSlide" : "slide"}
        >
          <div className="flex justify-center">
            <Image
              src={`${track.album.images[0].url}`}
              layout="intrinsic"
              width={200}
              height={200}
              alt={track.name + track.artists[0].name}
            />
          </div>
          <div className="flex flex-col justify-center align-middle -translate-y-20">
            <p className="text-center text-2xl text-gray-100">{track.name}</p>
            <p className="text-center text-gray-200">{track.artists[0].name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopTracks;
