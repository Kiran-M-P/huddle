import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Commmunity from "./components/Commmunity";
import Home from "./components/Home";
import GlobalStyles from "./components/styles/Global.styled";
import Content from "./Content";

const theme = {
  primary: "hsl(322, 100%, 66%)",
  secondary: "hsl(192, 100%, 9%)",
  bg: "#fff",
  button: "hsl(321, 100%, 78%)",
  warning: "hsl(0, 100%, 63%)",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
      <Commmunity />
      {Content.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </ThemeProvider>
  );
}

export default App;
