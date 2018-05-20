import axios from "axios";

const API_KEY = "aabca0d";
const ROOT_URL = `http://www.omdbapi.com/`;

export const FETCH_MOVIE = "FETCH_MOVIE";
export const SET_WATCHED_LIST = "SET_WATCHED_LIST";

export function fetchMovie(movieName) {
  const url = `${ROOT_URL}?t=${movieName}&apikey=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIE,
    payload: request
  };
}
export function setNewWatchedList(watchedList) {
  return {
    type: SET_WATCHED_LIST,
    payload: watchedList
  };
}
