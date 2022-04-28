import React from "react";
import { Nav, Logo } from "./styles/Header.styled";

const Header = () => {
  return (
    <Nav>
      <Logo src="./images/logo.svg" alt="logo" />
      <button>Try it Free</button>
    </Nav>
  );
};

export default Header;
