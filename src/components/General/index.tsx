import Btn from "../Btn";
import Nav from "./Nav";
import styles from "./general.module.css"

const General = function() {

    return(

        <section className={styles.dEss}>
            <Nav />
            <main className={styles.mainContent}>
                <h3>Apenas 50 <br></br> metros da <strong>praia</strong></h3>
                <Btn text="Saiba mais" length={122} height={54}/>
            </main>
        </section>
    )
}

export default General;