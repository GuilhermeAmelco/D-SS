import Image from "next/image"
import styles from "./wwa.module.css"

const WhoWeAre = function () {

    return (

        <section id="WhoWeAre" className={styles.wwa}>

            <div className={styles.box_wwa}>
                <Image src="/assets/image/imageWhoWeAre.png" alt="foto de uma paisagem" width={539} height={740} />

                <div className={styles.boxMarketing}>
                    <p>Porquê investir num <strong>D&SS?</strong></p>
                    <i className={styles.iconArrow}><Image src="/assets/svg/arrow.svg" alt="seta pra direita" width="14" height="14"/></i>
                </div>
            </div>
            <div className={styles.details}>

                <p>Detalhes pensados na praticidade<br></br> e comodidades para sua família</p>

                <Image src="/assets/image/oldMan.png" alt="" width="539" height="355" />

                <p>Nossos projetos são<br></br> realizados de forma minuciosa</p>
            </div>
        </section>
    )
}

export default WhoWeAre;