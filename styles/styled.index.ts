import styled from "styled-components";

export const Main = styled.main`
    display: flex;
`

export const GroupLeft = styled.section`
    height: calc(100vh - 3rem);
    flex: 1;

    background: var(--gradient);

    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        max-width: 350px;
        width: 100%;

        h4 {
            color: white;
            
            text-transform: uppercase;

            font-weight: 900;

            margin: 1rem 0;
        }


        h1 {
            color: white;
            
            font-size: 48px;
            font-weight: 900;
            line-height: 3rem;

            text-transform: uppercase;

            margin-bottom: 1rem;
        }

        p {
            font-size: 18px;
            color: white;

            margin-bottom: 1rem;
        }
    }


    @media (max-width: 768px) {
        > div {
            max-width: 100%;

            padding: 0 2rem;
        }
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        width: 49.7%;

        margin-bottom: 1rem;
    }
`

export const GroupRight = styled.section`
    position: relative;

    height: calc(100vh - 3rem);
    flex: 1;
    display: flex;
    align-items: center;

    background-color: var(--blue-dark);
    box-shadow: -10px 3px 15px rgba(0,0,0,0.5);

    div {
        position: absolute;
        left: -70px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const ContentSubscribe = styled.div`
    div {
        margin-top: 1rem;
    }
`