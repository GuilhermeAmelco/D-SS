import Image from "next/image";
import Credits from "../Contact";
import { CreditsPrincipal, FooterP, FooterPrincipal } from "./footer.s";

const Footer = function() {

    return (
        <>
            <Credits />
            <FooterPrincipal>
                <FooterP>D&SS © 2023 - Todos os direitos reservados</FooterP>
                <CreditsPrincipal>
                    <p>Desenvolvido por</p>
                    <Image src="/assets/svg/iconCreator.svg" alt="ícone da desenvolvedora" width="31" height="31" />
                </CreditsPrincipal>
            </FooterPrincipal>
        </>
    )
}

export default Footer;