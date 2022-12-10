import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

export const Footer = styled.footer`
  background-color: var(--blue-dark);

  height: 3em;

  color: var(--light);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 1000;

  > div {
    height: 100%;
    display: flex;
    align-items: center;

    .icons {
      margin-left: auto;
    }
  }

  strong {
    cursor: pointer;
    transition: filter 0.2s;

    :hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 768px) {
    height: 6rem;
    > div {
      flex-direction: column;

      p {
        margin: 1rem 0;
      }

      .icons {
        margin: 0 auto;
      }
    }  
  }
`;

export const Github = styled(AiFillGithub)`
  font-size: 1.5rem;

  margin-right: 0.5rem;

  cursor: pointer;
  transition: filter 0.2s;

  :hover {
    filter: brightness(0.8);
  }
`;

export const Linkedin = styled(AiFillLinkedin)`
  font-size: 1.5rem;
  transition: filter 0.2s;
  cursor: pointer;

  :hover {
    filter: brightness(0.8);
  }
`;

export const Facebook = styled(AiFillFacebook)`
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: filter 0.2s;

  :hover {
    filter: brightness(0.8);
  }
`;
