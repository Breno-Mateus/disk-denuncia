import { InputStyle, LabelStyle } from "./style"
import { IInputProps } from "./type"

const Input = ({htmlForID, textLabel, type, placeholder, name} : IInputProps) => {
    return(
        <>
            <LabelStyle htmlFor={htmlForID}>{textLabel}</LabelStyle>
            <InputStyle type={type} id={htmlForID} placeholder={placeholder} name={name} required/>
        </>
    )
}

export default Input