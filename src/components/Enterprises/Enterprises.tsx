import Btn from "../Btn";
import Buldings from "./Buldings";
import { BoxBuildsEnterprises, BoxEnterprises, BtnEnterprises, TitleEnterprises } from "./enterprises.s";

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
        <BoxEnterprises>

            <TitleEnterprises>Empreendimentos</TitleEnterprises>
            
            <BoxBuildsEnterprises id="Enterprises">
                
                <Buldings buldings={buldings} />
            </BoxBuildsEnterprises>
            
            <BtnEnterprises>
                <Btn text="Conhecer empreendimentos entregues"/>
            </BtnEnterprises>
        </BoxEnterprises>
    )
} 

export default Enterprises;