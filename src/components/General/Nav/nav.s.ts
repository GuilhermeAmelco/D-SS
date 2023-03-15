import Image from "next/image";
import styled, { css } from "styled-components";

export const NavGeneral = styled.nav`

    ${({ theme }) => css`

        font-size: ${theme.font.size.xnormal};
        max-height: 150px;
        margin-bottom: 56px;

        @media (min-width: ${theme.screen.xxTablet}) {

            width: 100%;
            transform: translateX(-2%);
            margin-top: 16px;
            margin-bottom: 0;
        };
    `};
`

export const NavList = styled.ul`

    ${({ theme }) => css`
        
        @media (max-width: ${theme.screen.Lmovel}) {

            margin: ${theme.gap.normal};
            word-wrap: break-word;
            display: flex;
            flex-direction: column;
            gap: ${theme.gap.large};
            text-align: center;
        }

        @media (min-width: ${theme.screen.Lmovel}) and (max-width: ${theme.screen.xxTablet}) {

            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: auto auto;
            text-align: center;
        };

        @media (min-width: ${theme.screen.xxTablet}) {

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 46px;
        };
    `};
`

export const Logo = styled(Image)`

    ${({theme}) => css`
        
        @media (max-width: ${theme.screen.Lmovel}) {

            order: -1;
            transform: translateX(10px);
        }

        @media (min-width: ${theme.screen.Lmovel}) and (max-width: ${theme.screen.xxTablet}) {

            order: -1;
            grid-column: span 4;
            justify-self: center;
            margin: ${theme.gap.normal};
        }
    `}
`

export const NavLink = styled.a`

    ${({theme}) => css`
        
        color: ${theme.colors.textInverted};

        &:hover {

            color: rgb(221, 208, 208);
        }
    `}
`