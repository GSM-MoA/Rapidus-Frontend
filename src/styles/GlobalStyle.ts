import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    max-width: 100vw;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    background: #FFC553;
    overflow-y: hidden;
    font-size: 16px; 
  }
  @font-face {
  font-family: 'Lily Script One';
  font-weight: 400;
  font-display: swap;
  src: local('Lily Script One'),
    url('/fonts/woff2/LilyScriptOne-Regular.woff2') format('woff2'),
    url('/fonts/woff/LilyScriptOne-Regular.woff') format('woff');
  }

  @media screen and (max-width: 800px) {
    html {
      font-size: 8px; 
    }
  }

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    html {
      font-size: 10px; 
    }
  }

  @media screen and (min-width: 1201px) and (max-width: 1400px) {
    html {
      font-size: 12px; 
    }
  }
  @media screen and (min-width: 1401px) and (max-width: 1600px) {
    html {
      font-size: 14px; 
    }
  }
  body::-webkit-scrollbar {
    display: none;
  }

  body {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
