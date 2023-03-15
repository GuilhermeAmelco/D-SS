import Btn from "../Btn";
import Nav from "./Nav";
import { DESS, H3Main, MainContent } from "./general.s";

const General = function() {

    return(

        <DESS>
            <Nav />
            <MainContent>
                <H3Main>Apenas 50 <br></br> metros da <strong>praia</strong></H3Main>
                <Btn text="Saiba mais"/>
            </MainContent>
        </DESS>
    )
}

export default General;