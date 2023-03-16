import styled, { css } from "styled-components";

export const BoxAbout = styled.section`

    ${({theme}) => css`

        width: 100%;
        display: flex;
        flex-direction: column;
        font-size: 1.1rem;
        align-items: center;
        justify-items: center;

        @media (min-width: ${theme.screen.Tablet}) {

        
            display: grid;
            grid-template-columns: repeat(3, auto);
            grid-template-rows: auto auto;
            padding: 6px;
            min-height: 500px;
        }
    `}
`

export const BoxAboutTitle = styled.h1`

    ${({theme}) => css`
        
        margin: ${theme.gap.xxlarge};
        grid-column: span 3;
        font-size: ${theme.font.size.xxxlarge};
        font-family: ${theme.font.family.PlayfairDisplay};
        justify-self: center;
        font-style: italic;
        font-weight: 400;
        text-align: center;
    `}
`