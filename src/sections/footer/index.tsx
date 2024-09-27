import { FooterSection, Text, DivMidia } from "./style"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
    return(
        <FooterSection>
            <DivMidia>
                <FaInstagram size={40}/>
                <FaFacebookSquare size={40}/>
                <FaSquareXTwitter size={40}/>
            </DivMidia>
            
            <Text>Copyright©2024 Breno Mateus | Todos os direitos reservados</Text>
        </FooterSection>
    )
}

export default Footer