import styled, { css } from "styled-components";

export const ListAboutUs = styled.ul`

    ${({theme}) => css`

        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 auto;

        @media (min-width: ${theme.screen.Tablet}) {

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            margin: ${theme.gap.large};
            gap: ${theme.gap.normal};
            width: auto;
        }
    `}
`

export const ItemAbout = styled.li`

    ${({theme}) => css`
        
        margin: ${theme.gap.large};

        @media (min-width: ${theme.screen.Tablet}) {

            margin: ${theme.gap.normal};
        }
    `}
`

export const ItemAboutTitle = styled.h1`

    ${({theme}) => css`
    
        margin-bottom: ${theme.gap.normal};
        font-style: italic;
        font-weight: 400;
        font-size: ${theme.font.size.xxlarge};
    `}
`

export const Description = styled.p`

    ${({theme}) => css`
    
        font-family: ${theme.font.family.Fredoka};
        font-size: 1.1rem;
        
        @media (min-width: ${theme.screen.Tablet}) {

            font-size: ${theme.font.size.xnormal};
        }
    `}
`