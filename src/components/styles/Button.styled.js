import styled from "styled-components";

const Button = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  border-width: 0;
  color: #fff;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 4rem;
  padding: 2.5rem 10rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    background-color: ${({ theme }) => theme.button};
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1.5rem 6rem;
  }
`;

export default Button;
