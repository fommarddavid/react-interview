import React from 'react';
import { ToggleSwitch } from 'react-dragswitch';
import 'react-dragswitch/dist/index.css';
import PropTypes from 'prop-types';

import Card from '../../containers/Card';

import styled from 'styled-components';

const MainStyled = styled.div`
  display: flex;
  flex-direction:column;
  // width: 90%;  margin: 0 auto;
  .toggle{
    color: #4D4D4D;
    text-align: center;
  }
  .categoriesFilter{
    text-align: center;
  }
  .cards{
    display: flex;
    flex-wrap: wrap;
  }
`;

const Main = ({ 
  movies, 
  toggleLikes, 
  setToggleLikes, 
  categoryToHide, 
  setCategoryToHide,
}) => {
  const categories = Array.from(movies).map(a => a.category).sort();

  return (
    <MainStyled>
      <div className="toggle">
        <span>Toggle Likes/Dislikes {"  "}</span>
        <ToggleSwitch
          checked={toggleLikes}
          onChange={
            (e) => {setToggleLikes(e)
          }}
        />
      </div>
      <div className="categoriesFilter">
        {categories.map((category, i) => {
          if( categories[i-1] !== category){
            return(
              <label key={category}>
                <input
                  type="checkbox"
                  checked={categoryToHide !== category}
                  id={category}
                  name={category}
                  onChange={e => {
                    setCategoryToHide(e.target.name);
                  }}
                />
                {category}
              </label>
            )
          }
          })
        }
      </div>
      <div className="cards">
      {movies.map(movie => (
        <Card
          key={movie.id}
          {...movie}
        />
      ))}
      </div>
    </MainStyled>
  );
};

Main.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired, 
  toggleLikes: PropTypes.bool.isRequired, 
  setToggleLikes: PropTypes.func.isRequired, 
  categoryToHide: PropTypes.string.isRequired, 
  setCategoryToHide: PropTypes.func.isRequired,
};

export default Main;