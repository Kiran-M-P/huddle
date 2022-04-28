import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

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
    }

    p {
        font-weight: 400;
        font-size: 1.7rem;
        font-family: 'Open Sans', sans-serif;
    }
`;

export default GlobalStyles;
