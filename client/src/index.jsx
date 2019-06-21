import React from 'react';
import {
  createGlobalStyle,
} from 'styled-components';
import ReactDom from 'react-dom';

import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #eeeef0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

* {
  -webkit-appearance: none;
}

*:focus {
  outline: none;
}
`;

ReactDom.render(
  <>
    <GlobalStyle/>
    <App/>
  </>,
  document.querySelector('#root'),
);
