import styled from "styled-components";
import { IPrimaryProps } from "./type";

export const Content = styled.button<IPrimaryProps>`
    height: 3rem;
    width: 100%;

    font-size: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.primary ? 'var(--blue-dark)' : 'var(--light)'};
    color: ${(props) => props.primary ? 'var(--light)' : 'var(--blue-dark)'};

    transition: filter 0.2s;

    .icon {
        margin-left: 1rem;
    }

    &:hover {
        filter: brightness(0.8);
    }
`