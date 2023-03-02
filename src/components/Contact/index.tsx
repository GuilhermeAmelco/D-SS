import Image from 'next/image';
import styles from './contact.module.css'

const Credits = function(){

    return (
        <section id='contactUs' className={styles.creditsSection}>

            <Image className={styles.logo} src='/assets/svg/logoD&SS.svg' alt='logo da D&SS' height='66' width='119' />

            <div className={styles.Companies}>

                <p>Di France Residence</p>
                <p>Brizza Serena Residence</p>
                <p>Residence Infinity Blue</p>
                <p>Residencial Eunice Costa</p>
            </div>
            <div className={styles.footerNav}>

                <a href='/'>Oportunidades</a>
                <a href='#WhoWeAre'>Quem somos</a>
                <a href='/'>Nossa região</a>
                <a href='#contactUs'>Fale conosco</a>
            </div>
            <div className={styles.divulgation}>

                <p>Trabalhe conosco</p>
                <p>CUB / SC</p>

                <div className={styles.midias}>

                    <i>
                        <a href='https://www.instagram.com/guilherme_amelco/'><Image src='/assets/svg/iconInstagram.svg' alt='' height='30' width='30' /></a>
                    </i>
                    <i>
                        <a href='https://www.facebook.com/'><Image src='/assets/svg/iconFacebook.svg' alt='' height='30' width='30' /></a>
                    </i>
                    <i>
                        <a href='https://www.youtube.com/'><Image src='/assets/svg/iconYoutube.svg' alt='' height='30' width='30' /></a>
                    </i>
                </div>
            </div>
        </section>
    )
}

export default Credits;