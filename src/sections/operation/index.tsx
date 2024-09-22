import { OperationSection, ImageComplaint, Title, Text, DivText } from "./style"
import Complaint from "../../assets/complaint.svg"

const Operation = () => {
    return(
        <OperationSection>
            <DivText>
                <Title>Como Funciona</Title><br />
                <Text>Nossa plataforma permite que você faça denúncias de forma segura e, se preferir, anônima. Basta descrever o incidente detalhadamente no formulário, incluindo informações como local e outros dados relevantes.</Text>
                <Text>Se optar por se identificar, podemos entrar em contato para esclarecer detalhes. Caso prefira o anonimato, sua privacidade será mantida e garantimos que a denúncia será tratada com seriedade.</Text>
                <Text>Todas as informações são protegidas, e não armazenamos dados pessoais em denúncias anônimas.</Text>
            </DivText>

            <ImageComplaint src={Complaint}/>
        </OperationSection>
    )
}

export default Operation