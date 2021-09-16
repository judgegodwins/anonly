import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
  
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
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