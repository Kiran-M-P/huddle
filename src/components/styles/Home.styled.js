import styled from "styled-components";

const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem 10rem 14rem;
  min-height: 70vh;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 5rem 3rem;
  }

  p {
    max-width: 60rem;
    padding: 3rem 0 4rem;
    align-self: center;
  }

  button {
    align-self: center;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1.4rem;
      padding-bottom: 4rem;
    }
  }
`;

export default HomeSection;
