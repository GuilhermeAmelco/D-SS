import styled, { css } from "styled-components";

export const DESS = styled.section`

    background-image: url("/assets/image/general-image.png");
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    height: 100vh;
    width: 100%;

    display: grid;
    justify-items: center;
    grid: repeat(2, auto);
`

export const MainContent = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const H3Main = styled.h3`

    ${({theme}) => css`

        font-size: 3rem;
        color: #FFF;
        font-weight: 500;
        text-align: center;
        margin-bottom: ${theme.gap.normal};
    `}
`