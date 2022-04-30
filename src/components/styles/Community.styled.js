import styled from "styled-components";

const CommunitySection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommmunityMetric = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 11% 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10vh;
  }
`;

export const Image = styled.img`
  width: 70%;
  align-self: center;
`;
export default CommunitySection;
