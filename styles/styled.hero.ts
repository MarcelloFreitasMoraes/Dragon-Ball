import styled from 'styled-components'

export const Heading = styled.div`
    margin: 2rem 0;
    width: 100%;

    display: flex;
    justify-content: space-between;

    h2:first-child {
        margin-right: 1rem;
    }

    @media (max-width: 768px) {
        justify-content: space-between;
    }
`

export const HeadingTitle = styled.div`
    display: flex;
`

export const ListHero = styled.ul`
    width: 100%;

    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;

    list-style: none;

    li {
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
export const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
`
export const Link = styled.div`
    margin-top: -10px;
    margin-left: 20px;
`
export const Voltar = styled.img`
    width: 80px;
    height: 80px;
    cursor: pointer;
`
export const Contant = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 10px;
`
export const Name = styled.div`
    text-align: center;
    color: white;
    background: black;
    padding: 5px;
    margin-bottom: 5px;
`
export const Card = styled.div``
export const Img = styled.img`
    width: 300px;
    height: 300px;
`
