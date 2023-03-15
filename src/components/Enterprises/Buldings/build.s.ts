import Image from "next/image";
import styled, { css } from "styled-components";

export const BoxBuild = styled.div`

    ${({theme}) => css`

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        justify-items: center;
        color: ${theme.colors.green};
        align-items: center;
        margin: 0 ${theme.gap.normal};
        gap: ${theme.gap.normal};

        @media (min-width: ${theme.screen.Smovel}) {

            gap: 0;
        };
    `};
`

export const ImageLogo = styled(Image)`

    ${({theme}) => css`
    
        grid-column: span 3;
        margin: ${theme.gap.xlarge};
    `};
`

export const ImageBuild = styled(Image)`

    grid-column: span 3;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 3px;
`

export const TextBuild = styled.h3`

    ${({theme}) => css`
        
        grid-column: span 3;
        justify-self: flex-start;
        margin: 6px 8px;
        font-weight: 300;
        font-size: ${theme.font.size.large};
    `};
`

export const SubtitleBuild = styled.p`

    ${({theme}) => css`
        
        grid-column: span 3;
        font-family: ${theme.font.family.Montserrat};
        justify-self: flex-start;
        margin-left: 8px;

        @media (min-width: ${theme.screen.Smovel}) {

            grid-column: span 1;
            justify-self: flex-start;
            font-size: 1rem;
        }
    `};
`

export const LinkBuild = styled.a`

    ${({theme}) => css`
        
        justify-self: flex-start;
        margin-left: 8px;
        margin-left: 0;
        grid-column: span 3;

        @media (min-width: ${theme.screen.Smovel}) {

            justify-self: flex-end;
            grid-column: span 2;
            margin-right: 8px;
        };
    `};
`

export const LinkBuildText = styled.p`

    ${({theme}) => css`
            
        display: inline-block;
        margin-right: ${theme.gap.large};
        color: ${theme.colors.green};
        text-decoration: underline;
        font-size: ${theme.font.size.normal};
        font-family: ${theme.font.family.Montserrat};

        @media (max-width: ${theme.screen.Smovel}) {

            justify-self: flex-start;
            margin-left: ${theme.gap.normal};
        };
    `};
`   