import styled from "styled-components";

export const FooterStyled = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10rem 10rem 5rem;
  min-height: 60vh;
  p {
    font-size: 1.4rem;
    color: hsl(207, 100%, 98%);
    max-width: 30rem;
    padding: 2.5rem 0 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 3rem 2.5rem 5rem;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactLogo = styled.img`
  width: 23rem;

  @media screen and (max-width: 768px) {
    width: 19rem;
  }
`;
export const ContactChild = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 0 0;
  align-items: center;
  p {
    font-size: 1.5rem;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1.4rem;
    }
  }
`;

export const SoicalIcons = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 8rem;

  .fa-4x:hover {
    color: #0bc3f0;
  }
`;

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  h5 {
    font-size: 2.4rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
  p {
    max-width: 33rem;
    padding: 2rem 0 3rem;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 15vh;
    h5 {
      font-size: 1.8rem;
    }
  }
`;

export const Subscribe = styled.form`
  display: flex;
  align-items: center;
  gap: 3rem;

  input {
    min-width: 30rem;
    height: 4rem;
    border-radius: 0.5rem;
  }
  button {
    padding: 1rem 4rem;
    border-width: 0;
    border-radius: 0.5rem;
    font-family: "Open sans", sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;
    background-color: ${({ theme }) => theme.primary};
  }
  button:hover {
    background-color: ${({ theme }) => theme.button};
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    input {
      align-self: flex-end;
      min-width: 100%;
    }
    button {
      align-self: flex-end;
    }
  }
`;
