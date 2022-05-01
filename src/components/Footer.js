import React from "react";
import WindowWidth from "./WindowWidth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  Contact,
  ContactChild,
  ContactLogo,
  FooterStyled,
  Newsletter,
  SoicalIcons,
  Subscribe,
} from "./styles/Footer.styled";

const Footer = () => {
  const width = WindowWidth();
  return (
    <FooterStyled>
      <Contact>
        <ContactLogo src="./images/logo-white-cropped.svg" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris nulla
          quram, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>

        <ContactChild>
          <img src="./images/icon-phone.svg" alt="phone" />
          <p>Phone: +1-543-123-4567</p>
        </ContactChild>
        <ContactChild>
          <img src="./images/icon-email.svg" alt="email" />
          <p>example@company.com</p>
        </ContactChild>
        <SoicalIcons>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className={width <= 768 ? "fa-3x" : "fa-4x"}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className={width <= 768 ? "fa-3x" : "fa-4x"}
          />
          <FontAwesomeIcon
            icon={faTwitterSquare}
            className={width <= 768 ? "fa-3x" : "fa-4x"}
          />
        </SoicalIcons>
      </Contact>
      <Newsletter>
        <h5>NEWSLETTER</h5>
        <p>
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. we'll never send you spam or passs on your email address
        </p>
        <Subscribe>
          <input
            pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$"
            type="email"
            required
          />
          <button type="submit">Subscribe</button>
        </Subscribe>
      </Newsletter>
    </FooterStyled>
  );
};

export default Footer;
