import styled from "styled-components";

const Button = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  border-width: 0;
  color: #fff;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 4rem;
  padding: 2rem 8rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default Button;
