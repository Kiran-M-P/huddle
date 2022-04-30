import styled from "styled-components";

const WaveStyled = styled.img`
  width: 100%;
  display: block;
  ${(props) =>
    props.position === "top" ? "margin-top: -3px;" : "margin-bottom: -3px;"}
`;

export default WaveStyled;
