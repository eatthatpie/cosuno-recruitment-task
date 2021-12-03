import { createGlobalStyle } from 'styled-components';
import { CssFonts } from './css-fonts';
import { CssReset } from './css-reset';

export const GlobalStyle = createGlobalStyle`
  ${CssReset};
  ${CssFonts};

  html,
  body,
  button,
  input {
    font-family: 'Nunito Sans', 'Open Sans', 'Droid Sans', Arial, sans-serif;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-size: 14px;
  }

  body {
    font-size: 100%;
    font-weight: 300;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1em 0;
    line-height: 1.35em;
  }

  p {
    line-height: 1.35em;
  }

  p + p {
    margin: 1em 0;
  }

  ul {
    li {
      margin: 1em 0;
    }
  }
`;
