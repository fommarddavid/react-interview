import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
// eslint-disable-next-line import/no-unresolved
import Card from '../components/Main/Card';

// Action Creators
import { deleteMovie } from '../actions/movies';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  toggleLikes: state.movies.toggleLikes,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  deleteMovie: (id) => {
    dispatch(deleteMovie(id));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const DemoContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default DemoContainer;