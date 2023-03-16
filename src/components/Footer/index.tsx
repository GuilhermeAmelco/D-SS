import Image from "next/image";
import { useEffect, useState } from "react";
import Credits from "../Contact";
import { CreditsPrincipal, FooterP, FooterPrincipal } from "./footer.s";



const Footer = function() {
    const [separation, setSeparation] = useState(<>-</>)


    useEffect( ()=> {
        const resize = (e:any) => {
            if (e.target.innerWidth < 425 )
                return setSeparation(<br/>)
            return setSeparation(<>-</>)

        }

        window.addEventListener('resize', resize)

        return () => {

            window.removeEventListener('resize', resize)
        }

    }, [])

    return (
        <>
            <Credits />
            <FooterPrincipal>
                <FooterP>D&SS © 2023 {separation} Todos os direitos reservados</FooterP>
                <CreditsPrincipal>
                    <p>Desenvolvido por</p>
                    <Image src="/assets/svg/iconCreator.svg" alt="ícone da desenvolvedora" width="31" height="31" />
                </CreditsPrincipal>
            </FooterPrincipal>
        </>
    )
}

export default Footer;