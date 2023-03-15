import Image from "next/image"
import { BoxMarketing, BoxMarketingText, BoxWwa, Details, IconArrowMarketing, WWA, WwaImage } from "./wwa.s";

const WhoWeAre = function () {

    return (

        <WWA id="WhoWeAre">

            <BoxWwa>
                <WwaImage src="/assets/image/imageWhoWeAre.png" alt="foto de uma paisagem" width={539} height={740} />

                <BoxMarketing>
                    <BoxMarketingText>Porquê investir num <strong>D&SS?</strong></BoxMarketingText>
                    <IconArrowMarketing><Image src="/assets/svg/arrow.svg" alt="seta pra direita" width="14" height="14"/></IconArrowMarketing>
                </BoxMarketing>
            </BoxWwa>
            <Details>

                <p>Detalhes pensados na praticidade<br></br> e comodidades para sua família</p>

                <WwaImage src="/assets/image/oldMan.png" alt="" width="539" height="355" />

                <p>Nossos projetos são<br></br> realizados de forma minuciosa</p>
            </Details>
        </WWA>
    )
}

export default WhoWeAre;