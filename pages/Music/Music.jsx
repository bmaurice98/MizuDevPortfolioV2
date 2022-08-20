import { useEffect, useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import EmblaCarouselTracks from "./EmblaCarousel/EmblaCarouselTopTracks";
import EmblaCarouselArtists from "./EmblaCarousel/EmblaCarouselTopArtists";
import EmblaCarouselRecentTracks from "./EmblaCarousel/EmblaCarouselRecentTracks";
import SlickCarousel from "./SlickCarousel";

export default function Music({ props }) {
  const [trackDisplay, setTrackDisplay] = useState(false);
  const { topTracks, recentTracks, topArtists } = props;

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  const DurationConversion = (time) => {
    var min = Math.floor(time / 60000);
    var sec = ((time % 60000) / 1000).toFixed(0);
    return min + ":" + (sec < 10 ? "0" : "") + sec;
  };

  useEffect(() => {
    if (data?.isPlaying) setTrackDisplay(true);
  }, [data]);

  return (
    <>
      {trackDisplay ? (
        <div className="grid grid-cols-1 lg:min-h-[77.7vh] min-h-screen">
          <div className="justify-center items-center text-center mt-16">
            <h1 className="text-4xl dark:text-white text-black">
              Currently listening to
            </h1>
          </div>
          <div className="grid grid-cols-1 top-[13vh]">
            <div className="justify-center items-center text-center">
              <Image
                src={`${data?.albumImageUrl}`}
                layout="fixed"
                width={300}
                height={300}
                priority
              />
            </div>
            <div className="justify-center items-center text-center text-3xl dark:text-white text-gray-700">
              Song: {data?.title}
            </div>
            <div className="justify-center items-center text-center text-2xl dark:text-white text-gray-700">
              Artists: {data?.artist}
            </div>
            <div className="justify-center items-center text-center text-2xl dark:text-white text-gray-700">
              Album: {data?.album}
            </div>
          </div>

          <div className="grid grid-cols-10 mt-5 justify-center">
            <div className="col-span-1 text-center items-center justify-center dark:text-white text-gray-700">
              {DurationConversion(data?.progress_ms)}
            </div>
            <div className="flex col-span-8 h-[2px] w-[100%] dark:bg-white mt-2.5 bg-gray-700" />
            <div className="col-span-1 text-center items-center justify-center dark:text-white text-gray-700">
              {DurationConversion(data?.duration_ms)}
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-screen my-auto">
          <SlickCarousel tracks={topTracks?.items} />
        </div>
      )}
    </>
  );
}
