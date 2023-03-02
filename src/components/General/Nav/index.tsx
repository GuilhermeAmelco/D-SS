import Image from "next/image";
import styles from "./nav.module.css";

const Nav = function() {

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>


                <li className={styles.item}>
                    <a href="#Enterprises" className={styles.link}>Empreendimentos</a>
                </li>

                <li className={styles.item}>
                    <a href="#WhoWeAre" className={styles.link}>Quem somos</a>
                </li>

                <Image className={styles.logo} src='/assets/image/D&SS.png' alt="logo da D&SS" width={130} height={150}/>


                <li className={styles.item}>
                    <a href="/" className={styles.link}>Sobre Nós</a>
                </li>

                <li className={styles.item}>
                    <a href="#contactUs" className={styles.link}>Fale Conosco</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;