import { HeaderStyle, IconMenu, ImageLogo } from "./style"
import Logo from "../../assets/logo.svg"

const Header = () => {
    return(
        <HeaderStyle>
            <ImageLogo src={Logo}/>
            <IconMenu />
        </HeaderStyle>
    )
}

export default Header