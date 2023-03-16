import styled, { css } from "styled-components";

export const FooterPrincipal = styled.footer`

    ${({theme}) => css`

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        min-height: 88px;
        font-family: ${theme.font.family.Fredoka};
        background: ${theme.colors.orange};
        color: ${theme.colors.textInverted};
        font-size: ${theme.font.size.xnormal};
        padding: 12px;
        text-align: center;
    `}
`

export const FooterP = styled.p`

    font-weight: 300;

`

export const CreditsPrincipal = styled.div`

    ${({theme}) => css`

        display: flex;
        gap: ${theme.gap.large};
        align-items: center;
        margin: ${theme.gap.large};
        font-weight: 300;
    `}
`

export const Br = styled.br`

    ${({theme}) => css`

        @media (min-width: ${theme.screen.Tablet}) {

            
        }
    `}
`