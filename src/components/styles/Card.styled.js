import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flex};
  background-color: ${(props) => props.bg};
  justify-content: space-evenly;
  align-items: center;
  min-height: 60vh;
  padding: 0 5rem;

  img {
    width: 35%;
  }

  h3 {
    font-size: 3.8rem;
    padding-bottom: 2rem;
  }
  p {
    font-size: 1.8rem;
    max-width: 58rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 0 3rem;
    img {
      width: 90%;
    }
    h3 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

export default StyledCard;
