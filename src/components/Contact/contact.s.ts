import styled, { css } from "styled-components";

export const CreditsSection = styled.section`

    ${({ theme }) => css`

        font-family: ${theme.font.family.Fredoka};
        background: #eee;
        display: flex;
        flex-direction: column;
        padding: ${theme.gap.xlarge};
        justify-content: space-between;
        align-items: center;
        font-size: ${theme.font.size.xnormal};    
        min-height: 500px;
        word-break: break-all;

        @media (min-width: ${theme.screen.Tablet}) {

            height: 300px;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            line-height: 43px;
            min-height: auto;
        };
    `};
`

export const LinkFooter = styled.a`

    ${({theme}) => css`
        
        color: ${theme.colors.text};
        position: relative;

        @media (min-width: ${theme.screen.Tablet}) {

            &::after {

                content: '';
                position: absolute;
                background-color: ${theme.colors.orange};
                width: 0;
                height: 3px;
                left: 0;
                bottom: 10px;
                transition: ${theme.transition[300]};
                border-radius: 3px;
            };

            &:hover::after {

                width: 100%;
            };
        };
    `};
`

export const Midias = styled.div`

    ${({theme}) => css`
        
        margin-top: ${theme.gap.xxlarge};
        display: flex;
        justify-content: space-between;
        gap: ${theme.gap.large};
    `};
`

const atributeContact = css`

        ${({theme}) => css`

            display: flex;
            flex-direction: column;
            align-items: center;
            margin: ${theme.gap.normal} ${theme.gap.large};
        `};
`

export const FooterNav = styled.div`   

    ${atributeContact};
`

export const Companies = styled.div`

    ${atributeContact};
`

export const Divulgation = styled.div`

    ${atributeContact};
`
