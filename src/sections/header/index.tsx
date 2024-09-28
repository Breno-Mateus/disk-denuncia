import { HeaderStyle, DivLogos, IconMenu, ImageLogo, HeaderStyleMobile } from "./style"
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
            <HeaderStyle isOpen={isOpen}>
                <DivLogos>
                    <ImageLogo src={Logo}/>
                    
                    <IconMenu> <Hamburger toggled={isOpen} toggle={setOpen} /> </IconMenu>
                </DivLogos>

                {isOpen && 
                    <HeaderStyleMobile>
                        <Menu onClick={handleMenuItemClick}/>
                    </HeaderStyleMobile>
                }
            </HeaderStyle>

            
        </>
    )
}

export default Header