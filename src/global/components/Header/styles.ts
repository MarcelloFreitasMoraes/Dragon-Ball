import styled from 'styled-components'

export const Content = styled.header`
    height: 5rem;
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 992px) {
        > div {
            justify-content: center;
        }
    }
`
