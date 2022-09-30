import React from "react";
import Head from "next/head";
import Music from "./Music";
import { getRecent, getTopArtists, getTopTracks } from "../api/spotify";

export default function Spotify(props) {
  return (
    <>
      <Head>
        <title>DevMizu Music</title>
        <meta
          name="description"
          content="Currently listening to music and history"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Music props={props} />
    </>
  );
}

export async function getStaticProps() {
  const topTracks = await getTopTracks().then((response) => response.data);
  const topArtists = await getTopArtists().then((response) => response.data);
  const recentTracks = await getRecent().then((response) => response.data);

  return {
    props: { topTracks, recentTracks, topArtists },
  };
}
