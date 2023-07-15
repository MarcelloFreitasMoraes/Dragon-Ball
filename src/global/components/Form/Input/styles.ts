import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaEnvelope } from 'react-icons/fa'

export const InputField = styled.div`
    width: 100%;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: white;

    border-radius: 0.25rem;

    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);

    input {
        height: 100%;
        width: 100%;

        background-color: transparent;
        color: black;

        font-size: var(--font-size-default);

        padding: 0 1rem;
    }

    button {
        background-color: transparent;
        padding-right: 1rem;
    }
`

export const SearchIcon = styled(AiOutlineSearch)`
    font-size: var(--font-size-default);

    cursor: pointer;
`

export const SendIcon = styled(FaEnvelope)`
    font-size: var(--font-size-default);

    color: rgba(0, 0, 0, 0.5);

    cursor: pointer;
`
