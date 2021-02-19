import moviesDatas from '../datas/movies';
// Action Types
import { DELETE_MOVIE, SET_TOGGLE_LIKES, SET_CATEGORY_TO_HIDE } from '../actions/movies';

// Initial State
const initialState = {
  toggleLikes: true,
  datas: moviesDatas,
  categories: Array.from(moviesDatas).map(a => a.category).sort(),
  categoryToHide: '',
};

// Reducer
const demoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        datas: state.datas.filter(data => data.id !== action.id),
      };
    case SET_TOGGLE_LIKES:
      return {
        ...state,
        toggleLikes: action.bool,
      };
      case SET_CATEGORY_TO_HIDE:
        return {
          ...state,
          datas: state.datas.filter(data => data.category !== action.category),
          categoryToHide: action.category,
        };

    default:
      return state;
  }
};

export default demoReducer;