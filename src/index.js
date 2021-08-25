import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import Wrapper from './Wrapper';

ReactDOM.render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById('root')
);
