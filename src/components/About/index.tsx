import AboutUs from "./AboutUs";
import styles from './about.module.css'

const About = function() {


    return(

        <section className={styles.boxAbout}>
            <h1 className={styles.boxAboutTitle}>Sobre nós</h1>

            <AboutUs />
        </section>
    )
}

export default About;