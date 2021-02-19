import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
// eslint-disable-next-line import/no-unresolved
import Main from '../components/Main';

// Action Creators
import { setToggleLikes, setCategoryToHide } from '../actions/movies';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  toggleLikes: state.movies.toggleLikes,
  movies: state.movies.datas,
  categories: state.movies.categories,
  categoryToHide: state.movies.categoryToHide,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  setToggleLikes: (bool) => {
    dispatch(setToggleLikes(bool));
  },
  setCategoryToHide: (category) => {
    dispatch(setCategoryToHide(category));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const DemoContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default DemoContainer;