import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const resetStyle = css`
  ${emotionReset}
  html {
    font-family: SUIT, sans-serif;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  button {
    background: none;
    border: none;
  }
`;

function GlobalStyle() {
  return <Global styles={resetStyle} />;
}

export default GlobalStyle;
