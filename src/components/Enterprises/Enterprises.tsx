import Btn from "../Btn";
import Buldings from "./Buldings";
import styles from "./enterprises.module.css"

const Enterprises = function() {

    const buldings = [{

        imageLogo: "/assets/image/BrizzaSerena.png",
        image: "/assets/image/general-image.png",
        text: "50m do mar",
        subtitle: "Itapema / SC",
        link: "ver mais",
        length: 152,
        height: 126
    },{

        imageLogo: "/assets/image/DiFrance.png",
        image: "/assets/image/DiFranceBuild.png",
        text: "50m do mar",
        subtitle: "Itapema / SC",
        link: "ver mais",
        length: 150,
        height: 60
    }, {

        imageLogo: "/assets/image/Blue.png",
        image: "/assets/image/BlueBuild.png",
        text: "50m do mar",
        subtitle: "Bombinhas / SC",
        link: "ver mais",
        length: 161,
        height: 161    
    }]
    return (
        <div className={styles.boxEnterprises}>

            <h1>Empreendimentos</h1>
            
            <div id="Enterprises" className={styles.boxBuildsEnterprises}>
                
                <Buldings buldings={buldings} />
            </div>
            
            <div className={styles.btn}>
                <Btn text="Conhecer empreendimentos entregues" length={500} height={40} />
            </div>
        </div>
    )
} 

export default Enterprises;