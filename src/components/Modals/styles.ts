import styled from 'styled-components'
import { MdClose } from 'react-icons/md';
import { IModalDarkProps } from './type';

export const Background = styled.div`
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 9;
`

export const Content = styled.div<IModalDarkProps>`
    max-width: 550px;
    width: 100%;
    background: ${(props) => props.isModalDark ? 'var(--blue-dark)' : 'var(--light)'};

    position: relative;
    z-index: 10;

    border-radius: 0.45rem;

    padding: 2rem 4rem;

    @media (max-width: 768px) {
        max-width: 400px;
        width: 100%;

        padding: 1rem 3rem;
    }
`

export const Close = styled(MdClose) <IModalDarkProps>`
    position: absolute;

    right: 0.8rem;
    top: 0.8rem;

    font-size: 1.5rem;
    color: ${(props) => props.isModalDark ? 'var(--light)' : 'var(--blue-dark)'};

    cursor: pointer;

    transition: transform 0.2s;

    &:hover {
        transform: scale(1.5);
    }
`