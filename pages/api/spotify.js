import axios from "axios";
import qs from "qs";

const ClientID = process.env.SPCID;
const ClientSecret = process.env.SPSID;
const refresh_token = process.env.REFRESH;

const basic = Buffer.from(`${ClientID}:${ClientSecret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const getAuth = async () => {
  const headers = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basic}`,
    },
    auth: {
      username: ClientID,
      password: ClientSecret,
    },
  };
  const data = {
    grant_type: "refresh_token",
    refresh_token: refresh_token,
  };

  try {
    const response = await axios.post(
      TOKEN_ENDPOINT,
      qs.stringify(data),
      headers
    );
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

const CURRENTLY_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

export const getNowPlaying = async () => {
  const access_token = await getAuth();

  return axios.get(CURRENTLY_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
};

const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";

export const getTopTracks = async () => {
  const access_token = await getAuth();

  return axios.get(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json "
    },
  });
};

const TOP_ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";

export const getTopArtists = async () => {
  const access_token = await getAuth();

  return axios.get(TOP_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json ",
    },
  });
};

const RECENT_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played";

export async function getRecent() {
  const access_token = await getAuth();

  return axios.get(RECENT_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
};

export default async (_, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }
    const song = await response.data;
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;
    const duration_ms = song.item.duration_ms;
    const progress_ms = song.progress_ms;
    const songUri = song.item.uri

    return res.status(200).json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,  
      duration_ms,
      progress_ms,
    });
  
};
