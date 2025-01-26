import { useEffect, useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import SlickCarousel from "../../components/SlickCarousel";
import styled from "styled-components";

const nowPlayingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1), minmax(0, 1fr);
  height: 100vh;
  width: 100vw;

  @media (min-width: 375px) {
    padding: 0 6rem;
    height: 80%;
  }
`;

const CarouselPicker = styled.div`
  width: 100%;
  margin: 10px auto;
`;

const CarouselTags = styled.ul`
  display: flex;
  text-align: center;

  width: 30%;
  margin: 1rem auto;
  background-color: #acacac;
  border-radius: 10px;

  & > li {
    color: ${(props) => props.theme.text};
    padding: 0.5em 0.5em;

    &:hover {
      background-color: ${(props) => props.theme.body};
      color: ${(props) => props.theme.text};
      border: #acacac solid 1px;
      &:first-child {
        border-radius: 10px 0 0 10px;
      }
      &:last-child {
        border-radius: 0 10px 10px 0;
      }
    }

    &:active {
      background-color: #015249;
      color: ${(props) => props.theme.body};
    }
  }
`;

const CarouselTag = styled.li`
  display: inline;
  width: 100%;
  height: auto;
  cursor: pointer;

  & > button {
    align-items: center;
    margin: auto;
  }
`;

export default function Music({ props }) {
  const [trackDisplay, setTrackDisplay] = useState(false);
  const { topTracks, recentTracks, topArtists } = props || {};

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  const DurationConversion = (time) => {
    var min = Math.floor(time / 60000);
    var sec = ((time % 60000) / 1000).toFixed(0);
    return min + ":" + (sec < 10 ? "0" : "") + sec;
  };

  const changeIndex = (idx) => {
    setImageIndex(idx);
  };

  useEffect(() => {
    if (data?.isPlaying) setTrackDisplay(true);
  }, [data]);

  return (
    <>
      {trackDisplay ? (
        <nowPlayingContainer>
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
                alt={data?.title}
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
        </nowPlayingContainer>
      ) : (
        <div className="w-screen m-auto">
          <CarouselPicker>
            <CarouselTags>
              <CarouselTag>
                <button>Top Songs</button>
              </CarouselTag>
              <CarouselTag>
                <button>Top Artists</button>
              </CarouselTag>
              <CarouselTag>
                <button>Recently Played</button>
              </CarouselTag>
            </CarouselTags>
          </CarouselPicker>

          <SlickCarousel tracks={topTracks?.items} />
          <SlickCarousel artists={topArtists?.items} />
          <SlickCarousel recent={recentTracks?.items} />
          {/* <SlickCarousel>
            <TopArtists Artists={topArtists} />
          </SlickCarousel>
          <SlickCarousel>
            <RecentTracks Tracks={recentTracks} />
          </SlickCarousel> */}
        </div>
      )}
    </>
  );
}
