import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import GlobalStyles from "./components/styles/Global";

const theme = {
  primary: "hsl(322, 100%, 66%)",
  secondary: "hsl(192, 100%, 9%)",
  bg: "hsl(207, 100%, 98%)",
  button: "hsl(321, 100%, 78%)",
  warning: "hsl(0, 100%, 63%)",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
