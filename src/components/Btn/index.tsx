import styled, { css } from "styled-components"

interface Props {    
    text: String
}

const BtnStyle = styled.button`

    ${({theme}) => css`

        font-family: ${theme.font.family.Montserrat};
        background: ${theme.colors.green};
        color: ${theme.colors.textInverted};
        border: none;
        border-radius: 5px;
        font-size: 0.9rem;
        cursor: pointer;
        text-transform: uppercase;
        padding: 12px;
        margin: ${theme.gap.xlarge} 0;
        width: auto;
    `}
    
`

const Btn = function({text}: Props) {

    return (
        <BtnStyle>{text}</BtnStyle>
    )
}

export default Btn