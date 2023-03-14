import Image from "next/image"
import styled from "styled-components";

const IconWhatsapp = styled.a`

    position: fixed;
    right: 25px;
    bottom: 25px;
    transition: 200ms;

    &:hover {

        transition: 200ms;
        bottom: 30px;
    }
`

const Whatsapp = function () {

    return <IconWhatsapp href="https://wa.me/5547991185892"><Image src="/assets/image/whatsapp.png" alt="whatsapp" width={65} height={65}/></IconWhatsapp>
}

export default Whatsapp;