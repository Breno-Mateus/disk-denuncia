import { HeaderStyle, IconMenu, ImageLogo, HeaderStyleMobile, DivLogosMobile } from "./style"
import Logo from "../../assets/logo.svg"
import { useState } from "react"
import Hamburger from 'hamburger-react'
import Menu from "../../components/menu"

const Header = () => {

    const [isOpen, setOpen] = useState(false)

    const handleMenuItemClick = () => {
        setTimeout(() => {setOpen(false)}, 600)
    }

    return(
        <>
            <HeaderStyle>
                <ImageLogo src={Logo}/>
                
                <IconMenu> <Hamburger toggled={isOpen} toggle={setOpen} /> </IconMenu>
            </HeaderStyle>

            {isOpen && 
            <HeaderStyleMobile>
                <DivLogosMobile>
                    <ImageLogo src={Logo}/>
                </DivLogosMobile>

                <Menu onClick={handleMenuItemClick}/>
            </HeaderStyleMobile>
            }
        </>
    )
}

export default Header