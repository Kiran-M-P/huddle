import styled from "styled-components";

const Title = styled.h1`
  font-weight: 700;
  font-size: 5rem;
  align-self: center;
  padding-top: 15%;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    padding-top: 12vh;
  }
`;

export default Title;
