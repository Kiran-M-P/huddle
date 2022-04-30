import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {                                                                          
    font-size: 62.5%;
    }

    body {
        color: ${({ theme }) => theme.secondary};
        font-family: "Poppins", sans-serif;
        background-color: ${({ theme }) => theme.bg};
        
    }

    p {
        font-weight: 400;
        font-size: 2rem;
        font-family: 'Open Sans', sans-serif;
    }
`;

export default GlobalStyles;
