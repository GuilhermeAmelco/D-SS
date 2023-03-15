import { Logo, NavGeneral, NavLink, NavList } from "./nav.s";

const Nav = function() {

    return (
        <NavGeneral>
            <NavList>


                <li>
                    <NavLink href="#Enterprises">Empreendimentos</NavLink>
                </li>

                <li>
                    <NavLink href="#WhoWeAre" >Quem somos</NavLink>
                </li>

                <Logo src='/assets/image/D&SS.png' alt="logo da D&SS" width={130} height={150}/>


                <li>
                    <NavLink href="/" >Sobre Nós</NavLink>
                </li>

                <li>
                    <NavLink href="#contactUs" >Fale Conosco</NavLink>
                </li>
            </NavList>
        </NavGeneral>
    )
}

export default Nav;