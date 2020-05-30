import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 30px 0px;
  }

  @media screen and (max-width: 800px) {
    padding 10px;
  }
  
  .App {
    text-align: center;
  }
  
  h1 {
    font-family: 'Bigelow Rules';
    font-size: 72px;
    color: #0ccac4;
  }
`;