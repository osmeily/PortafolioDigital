import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const StyledPdiv = styled.div`
    height: max-content;
    background: #c11ce4;
`
ReactDOM.render(
  <StyledPdiv>
    <App/>
  </StyledPdiv>,
  document.getElementById('root')
);
