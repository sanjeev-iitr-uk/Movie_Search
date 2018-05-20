import { FETCH_MOVIE,SET_WATCHED_LIST } from "../actions/index";

const initialState = {
  isItNew: false,
  currentSearch: {},
  watchedList: []
};
function checkIfNew(watchedList, newData) {
   const currentTitle = newData.Title || '';
    const listLength = watchedList.length;
    let watched = false;
    for(let i = 0; i < listLength; i += 1) {
      const movie = watchedList[i];
      const movieTitle = movie.Title || '';
      if (movieTitle === currentTitle) {
        watched = true;
        break;
      }
    }
    return watched;
} 
export default function(state=initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE: {
      const isWatched = checkIfNew(state.watchedList, action.payload.data);
      return {
        isItNew: isWatched,
        currentSearch: action.payload.data,
        watchedList: !isWatched ? [...state.watchedList, action.payload.data] : state.watchedList
      };
    }
    case SET_WATCHED_LIST: {
      return {
        isItNew: state.isItNew,
        currentSearch: state.currentSearch,
        watchedList: action.payload
      };
    }
    default:
      return state;
  }
};
