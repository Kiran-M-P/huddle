import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-family: "Open sans", sans-serif;
    font-size: 1.6rem;
    border-radius: 2rem;
    padding: 0.5rem 2.5rem;
    background-color: transparent;
    border: 0.2rem solid ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.button};
  }

  @media screen and (max-width: 768px) {
    button {
      font-size: 1.2rem;
      padding: 0.3rem 1.5rem;
    }
  }
`;

export const Logo = styled.img`
  width: 23rem;

  @media screen and (max-width: 768px) {
    width: 10rem;
  }
`;
