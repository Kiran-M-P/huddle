import React from "react";
import Header from "./Header";
import Button from "./styles/Button.styled";
import HomeSection from "./styles/Home.styled";
import Title from "./styles/Title.styled";

const Home = () => {
  return (
    <>
      <HomeSection>
        <Header />
        <Title>Build The Community Your fans Will Love</Title>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button>Get Started For Free</Button>
      </HomeSection>
    </>
  );
};

export default Home;
