import { ButtonStyle } from "./style"
import IButtonProps from "./type"

const Button = ({onClick} : IButtonProps) => {
    return(
        <ButtonStyle onClick={onClick}>Enviar</ButtonStyle>
    )
}

export default Button