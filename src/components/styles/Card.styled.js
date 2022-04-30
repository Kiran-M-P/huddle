import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flex};
  background-color: ${(props) => props.bg};
  justify-content: space-evenly;
  align-items: center;
  min-height: 60vh;
  margin: 0;
  padding: 0;

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
`;

export default StyledCard;
