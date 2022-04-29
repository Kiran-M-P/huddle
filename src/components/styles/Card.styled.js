import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  justify-items: space-between;
  align-items: center;
  min-height: 100vh;

  img {
    width: 80%;
  }

  h3 {
    font-size: 3rem;
  }
  p {
    max-width: 65rem;
  }
`;

export default StyledCard;
