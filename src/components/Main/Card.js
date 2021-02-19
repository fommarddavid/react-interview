import React from 'react';
import { ThumbsUp, ThumbsDown, Trash2 } from 'react-feather';
import PropTypes from 'prop-types'

import styled from 'styled-components';

const CardStyled = styled.div`
  border: 2px solid #4D4D4D;
  border-radius: 0.4rem;
  width: 100%;
  max-width: 260px;
  height: 250px;
  margin: 1rem auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;

  .trash{
    position: absolute; 
    top: 0.1rem;
    right: 0.1rem;
    cursor: pointer;

    &:hover{
      color: red;
    }
  }

  .title{
    color: #4D4D4D;
    font-weight: bold;
    font-size: 1.4rem;
  }

  .category{
    border: 1px solid black;
    padding: 0.4rem 0.2rem;
    border-radius: 0.4rem;
    background-color: #4D4D4D;
    color: #fff;
  }

  .thumbs{
    display: flex;
    .number{
      color: #4D4D4D;
      font-size: 1.4rem;
      font-weight: bold;
    }
  }

  @media screen and (min-width: 320px){

  }
`;
const Card = ({
  id,
  title,
  category,
  likes,
  dislikes,
  deleteMovie,
  toggleLikes,
}) => {
  return (
    <CardStyled>
      <Trash2
        className="trash"
        onClick={() => deleteMovie(id)}
      />
      <h1 className="title">{title}</h1>
      <div className="category">{category}</div>
      {(toggleLikes) && (
        <div className="thumbs">
          <div className="number likes">{likes}<ThumbsUp color="green" /></div>
          <div className="number dislikes">{dislikes}<ThumbsDown color="red" /></div>
        </div>
      )}
    </CardStyled>

  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  toggleLikes: PropTypes.bool.isRequired,
};

export default Card;
