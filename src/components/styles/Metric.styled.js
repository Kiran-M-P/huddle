import styled from "styled-components";

export const MetricBox = styled.div`
  img {
    width: 4rem;
  }
  h2 {
    font-size: 9rem;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 500;
    text-align: center;
    color: grey;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 2.7rem;
    }
    h2 {
      font-size: 6.5rem;
    }

    h4 {
      font-size: 1.4rem;
    }
  }
`;
