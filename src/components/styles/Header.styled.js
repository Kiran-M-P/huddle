import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-family: "Poppins", sans-serif;
    border-radius: 2rem;
    padding: 0.5rem 2rem;
    background-color: transparent;
    border: 0.2rem solid ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.button};
  }
`;

export const Logo = styled.img`
  width: 23rem;

  @media screen and (max-width: 768px) {
    width: 12rem;
  }
`;
