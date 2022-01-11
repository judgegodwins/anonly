import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  * {
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
  }
  
  html, body, #root {
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 15px;
  }

  a {
    color: #2186DE;
    text-decoration: none;
  }
`;

export default GlobalStyle;