import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Commmunity from "./components/Commmunity";
import Home from "./components/Home";
import GlobalStyles from "./components/styles/GlobalStyles";
import WaveStyled from "./components/styles/Wave.styled";
import WindowWidth from "./WindowWidth";
import { Helmet } from "react-helmet";
import Title from "./components/styles/Title.styled";
import Button from "./components/styles/Button.styled";
import Flex from "./components/styles/Flex.styled";
import Footer from "./components/Footer";

function App() {
  const width = WindowWidth();
  const theme = {
    primary: "hsl(322, 100%, 66%)",
    secondary: "hsl(192, 100%, 9%)",
    bg: "#fff",
    button: "hsl(321, 100%, 78%)",
    warning: "hsl(0, 100%, 63%)",
  };

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
        <Commmunity />
        <WaveStyled
          src={`./images/bg-section-top-${
            width <= 768 ? "mobile" : "desktop"
          }-1.svg`}
          position="top"
        />
        <Card
          title="Grow Together"
          body="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
          image="illustration-grow-together.svg"
          flex="row"
          bg="hsl(207, 100%, 98%)"
        />
        <WaveStyled
          src={`./images/bg-section-bottom-${
            width <= 768 ? "mobile" : "desktop"
          }-1.svg`}
          position="bottom"
        />
        <Card
          title="Flowing Conversations"
          body="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
          image="illustration-flowing-conversation.svg"
          flex="row-reverse"
          bg="#fff"
        />
        <WaveStyled
          src={`./images/bg-section-top-${
            width <= 768 ? "mobile" : "desktop"
          }-2.svg`}
          position="top"
        />
        <Card
          title="Your Users"
          body="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
          image="illustration-your-users.svg"
          flex="row"
          bg="hsl(207, 100%, 98%)"
        />
        <WaveStyled
          src={`./images/bg-section-bottom-${
            width <= 768 ? "mobile" : "desktop"
          }-2.svg`}
          position="bottom"
        />
        <Flex>
          <Title>Ready To Build Your community?</Title>
          <Button>Get Started for Free</Button>
        </Flex>
        <WaveStyled
          src={`./images/bg-footer-top-${
            width <= 768 ? "mobile" : "desktop"
          }.svg`}
          position="top"
        />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
