import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Commmunity from "./components/Commmunity";
import Home from "./components/Home";
import GlobalStyles from "./components/styles/GlobalStyles";
import WaveStyled from "./components/styles/Wave.styled";

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
      <WaveStyled src="./images/bg-section-top-desktop-1.svg" position="top" />
      <Card
        title="Grow Together"
        body="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
        image="illustration-grow-together.svg"
        flex="row"
        bg="hsl(207, 100%, 98%)"
      />
      <WaveStyled
        src="./images/bg-section-bottom-desktop-1.svg"
        position="bottom"
      />
      <Card
        title="Flowing Conversations"
        body="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
        image="illustration-flowing-conversation.svg"
        flex="row-reverse"
        bg="#fff"
      />
      <WaveStyled src="./images/bg-section-top-desktop-2.svg" position="top" />
      <Card
        title="Your Users"
        body="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
        image="illustration-your-users.svg"
        flex="row"
        bg="hsl(207, 100%, 98%)"
      />
      <WaveStyled
        src="./images/bg-section-bottom-desktop-2.svg"
        position="bottom"
      />
    </ThemeProvider>
  );
}

export default App;
