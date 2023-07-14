import Image from "next/image";
import styled from "styled-components";

export const Content = styled.li`
    background-color: rgba(0, 0, 0, 0.5);

    padding: 1rem;

    max-width: 350px;
    width: auto;

    border-radius: var(--border-r);
    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }

`

export const Container = styled.div``

export const Thumbnail = styled.img`
    border-radius: var(--border-r);

    cursor: pointer;
`

export const Info = styled.div`
    h3 {
        color: var(--light);

        font-weight: 900;

        margin: 1rem 0;
    }

    p {
        color: var(--light);

        height: 80px;
    }
`

export const FooterInfo = styled.div`
    margin: 1rem 0;

    display: flex;
    justify-content: space-between;

    span {
        color: var(--red-400);

        font-weight: 600;
    }
`;

export const Id = styled.div``

export const Date = styled.div``