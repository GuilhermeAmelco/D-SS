import Image from "next/image";
import Credits from "../Contact";
import styles from "./footer.module.css";

const Footer = function() {

    return (
        <>
            <Credits />
            <footer className={styles.footer}>
                <p className={styles.p}>D&SS © 2023 - Todos os direitos reservados</p>
                <div className={styles.credits}>
                    <p>Desenvolvido por</p>
                    <Image className={styles.imageTest} src="/assets/svg/iconCreator.svg" alt="ícone da desenvolvedora" width="31" height="31" />
                </div>
            </footer>
        </>
    )
}

export default Footer;