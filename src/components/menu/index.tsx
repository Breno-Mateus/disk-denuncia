import { MenuNav, LinkStyled } from "./style"
import IMenuProps from "./type"

const Menu = ({onClick} : IMenuProps) =>{

    return(
        <MenuNav>
            <LinkStyled to="SectionOperation" smooth={true} duration={500} onClick={onClick}> Como Funciona </LinkStyled>
            <LinkStyled to="SectionForm" smooth={true} duration={500} onClick={onClick}> Formulário </LinkStyled>
        </MenuNav>
    )
}

export default Menu