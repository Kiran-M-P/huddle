import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4rem;
  padding-bottom: 15%;

  @media screen and (max-width: 768px) {
    padding-bottom: 60%;
  }
`;

export default Flex;
