import Image from "next/image";
import styled, { css } from "styled-components";

export const WWA = styled.section`

    ${({theme}) => css`

        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        background: ${theme.colors.gray};
        padding: 107px 0;
        font-size: 1.5rem;
        color: ${theme.colors.green};
        font-weight: 700;
    `};
`

export const WwaImage = styled(Image)`

    max-width: 80vw;
    object-fit: cover;
`

export const BoxWwa = styled.div`

    ${({theme}) => css`

        position: relative;
        margin: ${theme.gap.xlarge};
    `}
`

export const BoxMarketing = styled.div`

    ${({theme}) => css`
    
        position: absolute;
        background:#F2F2F2;
        max-width: 70%;
        padding: 34px 26px;
        border-radius: 3px;
        min-height: 250px;
        display: flex;
        flex-direction: column;
        top: 65%;
        right: -5%;

        @media (min-width: ${theme.screen.Smovel}) {
 
            min-height: auto;
            width: 403px;
        }
    `}
`

export const BoxMarketingText = styled.p`

    ${({theme}) => css`
        
        display: block;
        font-weight: normal;

        @media ( min-width: ${ theme.screen.Smovel }) {

            display: inline;
        }
    `}
`

export const IconArrowMarketing = styled.i `

    ${({theme}) => css`
        
        position: absolute;
        height: 38px;
        width: 38px;
        bottom: 20px;
        right: auto;
        text-align: center;
        background-color: ${theme.colors.orange};
        border-radius: 3px;

        @media (min-width: ${theme.screen.Smovel}) {
   
            right: 5px;
            cursor: pointer;
            bottom: auto;
        }
    `}
`

export const Details = styled.div`

    ${({theme}) => css`
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        margin: ${theme.gap.xlarge};
        min-height: 600px;
        word-wrap: break-word;
    `}
`