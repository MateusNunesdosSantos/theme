import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${props => props.theme.colors.primary};
`

export const Nav = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    h1 {
        font-size:  1rem;
        color: ${props => props.theme.colors.text};
    }

    button {
        border: none;
        padding: 0.6rem 1rem;
        border-radius: 0.3rem;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        background-color: ${props => props.theme.colors.button};
        color: ${props => props.theme.colors.textButton};
    }

`