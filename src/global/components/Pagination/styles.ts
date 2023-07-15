import styled from 'styled-components'
import { IStyledProps } from './type'

export const Pagination = styled.ul`
    height: 5rem;

    display: flex;

    @media (max-width: 768px) {
        height: 10rem;
    }
`

export const Button = styled.button<IStyledProps>`
    height: 2rem;
    width: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) =>
        props.index === props.currentPage
            ? 'var(--red-400)'
            : 'var(--red-700)'};
    color: var(--light);

    margin-right: 0.5rem;
    border-radius: var(--border-r);

    transition: background-color 0.2s;

    &:hover {
        background-color: var(--red-400);
    }
`
