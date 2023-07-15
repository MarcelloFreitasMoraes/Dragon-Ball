import styled from 'styled-components'

export const Background = styled.section`
    height: calc(100vh - 15rem);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const NotFound = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    h1 {
        text-transform: uppercase;
        color: var(--light);
    }

    button {
        margin-top: 2rem;

        max-width: 220px;
    }
`
