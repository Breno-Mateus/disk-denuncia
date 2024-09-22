import { TextareaStyle, LabelStyle } from "./style"
import { ITextareaProps } from "./type"

const Textarea = ({htmlForID, textLabel, placeholder} : ITextareaProps) => {
    return(
        <>
            <LabelStyle htmlFor={htmlForID}>{textLabel}</LabelStyle>
            <TextareaStyle placeholder={placeholder} required/>
        </>
    )
}

export default Textarea