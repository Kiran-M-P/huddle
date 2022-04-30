import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  Contact,
  FooterStyled,
  Newsletter,
  Subscribe,
} from "./styles/Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <Contact>
        <img src="./images/logo-white.svg" alt="logo" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris nulla
          quram, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>
        <div>
          <img src="./images/icon-phone.svg" alt="phone" />
          <p>Phone: +1-543-123-4567</p>
        </div>
        <div>
          <img src="./images/icon-email.svg" alt="email" />
          <p>example@company.com</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitterSquare} />
        </div>
      </Contact>
      <Newsletter>
        <h5>NEWSLETTER</h5>
        <p>
          To Recieve tips on how to grow your community, sign up to our weekly
          newsletter. we'll never send you spam or passs on your email address
        </p>
        <Subscribe>
          <input type="text" />
          <button type="submit">Subscribe</button>
        </Subscribe>
      </Newsletter>
    </FooterStyled>
  );
};

export default Footer;
