import React from 'react';

import styled from 'styled-components';

const HeaderStyled = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 0;
  color: #4D4D4D;
`;

const Header = () => {
  return (
    <HeaderStyled>
      REACT INTERVIEW
    </HeaderStyled>
  );
};

export default Header;
