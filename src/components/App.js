// Dependencies
import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Imports
import Header from './Layout/Header';
import Container from './Layout/Container';
import Lists from './Lists';

export default () => {
  return (<React.Fragment>
    <GlobalStyle />
    <Header />
    <Container>
      <Lists />
    </Container>
  </React.Fragment>)
}

const GlobalStyle = createGlobalStyle`
  body {
    color: #fff;
    background: #FF6347;
    font-size: 16px;
    font-family: 'Livvic';
  }
`;