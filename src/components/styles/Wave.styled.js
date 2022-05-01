import styled from "styled-components";

const WaveStyled = styled.img`
  width: 100%;
  display: block;
  ${(props) =>
    props.position === "top" ? "margin-bottom: -2px;" : "margin-top: -2px;"}
`;

export default WaveStyled;
