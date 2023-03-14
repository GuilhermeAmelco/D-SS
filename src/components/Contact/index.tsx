import Image from 'next/image';
import { Companies, CreditsSection, Divulgation, FooterNav, LinkFooter, Midias } from './contact.s';

const Credits = function(){

    return (
        <CreditsSection id='contactUs' >

            <Image src='/assets/svg/logoD&SS.svg' alt='logo da D&SS' height='66' width='119' />

            <Companies>

                <p>Di France Residence</p>
                <p>Brizza Serena Residence</p>
                <p>Residence Infinity Blue</p>
                <p>Residencial Eunice Costa</p>
            </Companies>
            <FooterNav>

                <LinkFooter href='/'>Oportunidades</LinkFooter>
                <LinkFooter href='#WhoWeAre'>Quem somos</LinkFooter>
                <LinkFooter href='/'>Nossa região</LinkFooter>
                <LinkFooter href='#contactUs'>Fale conosco</LinkFooter>
            </FooterNav>
            <Divulgation>

                <p>Trabalhe conosco</p>
                <p>CUB / SC</p>

                <Midias>

                    <i>
                        <a href='https://www.instagram.com/guilherme_amelco/'><Image src='/assets/svg/iconInstagram.svg' alt='' height='30' width='30' /></a>
                    </i>
                    <i>
                        <a href='https://www.facebook.com/'><Image src='/assets/svg/iconFacebook.svg' alt='' height='30' width='30' /></a>
                    </i>
                    <i>
                        <a href='https://www.youtube.com/'><Image src='/assets/svg/iconYoutube.svg' alt='' height='30' width='30' /></a>
                    </i>
                </Midias>
            </Divulgation>
        </CreditsSection>
    )
}

export default Credits;