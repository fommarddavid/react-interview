// Types
export const DELETE_MOVIE= 'DELETE_MOVIE';
export const SET_TOGGLE_LIKES= 'SET_TOGGLE_LIKES';
export const SET_CATEGORY_TO_HIDE= 'SET_CATEGORY_TO_HIDE';

// Creators
export const deleteMovie = (id) => ({
  type: DELETE_MOVIE,
  id,
});
export const setToggleLikes = (bool) => ({
  type: SET_TOGGLE_LIKES,
  bool,
});
export const setCategoryToHide = (category) => ({
  type: SET_CATEGORY_TO_HIDE,
  category,
});