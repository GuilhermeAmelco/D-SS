import styled, { css } from "styled-components";

export const BoxEnterprises = styled.section`

    ${({theme}) => css`

        display: grid;
        grid-template-rows: repeat(3, auto);
        background-image: url(/assets/image/backEnterprises.png);
        background-size: cover;
        padding: ${theme.gap.normal};
    `}
`

export const TitleEnterprises = styled.h1`

    ${({theme}) => css`

        font-family: ${theme.font.family.PlayfairDisplay};
        justify-self: center;
        font-size: 3vmax;
        font-weight: 200;
        padding: 2rem 0;
        margin: 0 auto;
        font-style: italic;
        word-wrap: break-word;

        @media(min-width: ${theme.screen.Smovel}) {

            font-size: 3.5vmax
        };
    `}
`

export const BoxBuildsEnterprises = styled.div`

    ${({theme}) => css`
        
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-bottom: ${theme.gap.xlarge};
    `}
`

export const BtnEnterprises = styled.div`

    justify-self: center;
`