import { FormSection, Title, DivInput, DivForm, DivRadio, DivOptions, DivMessage, Message } from "./style"
import Input from "../../components/input"
import Textarea from "../../components/textarea"
import Button from "../../components/button"
import { useState } from "react"

const Form = () => {

    const [showForm, setShowForm] = useState(false);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowForm(event.target.value === 'nao');
    }

    const [isValid, setValid] = useState(false)

    const handleButton = () => {
        setValid(true)
    }

    return(
        <FormSection id="SectionForm">
            <Title>Formulário</Title>

            <DivForm>
                <DivInput>
                    <Input htmlForID="denuncia" textLabel="Título da denúncia:" type="text" placeholder="ex: Assédio no local de trabalho"/>
                </DivInput>

                <DivInput>
                    <Textarea htmlForID="descricao" textLabel="Descrição da denúncia:" placeholder="Descreva os detalhes do incidente, incluindo data, local e qualquer outra informação relevante."/>
                </DivInput>

                <DivInput>
                    <Input htmlForID="local" textLabel="Local do incidente:" type="text" placeholder="ex: Escritório central, 5º andar, sala 502 - Rua João Silva, 123, Bairro Centro, Cidade XYZ."/>
                </DivInput>

                <DivInput>
                    <Input htmlForID="data" textLabel="Data do incidente:" type="date"/>
                </DivInput>

                <DivInput>
                    <p>Deseja enviar de forma anônima?</p>
                    
                    <DivOptions>
                        <DivRadio>
                            <Input htmlForID="sim" textLabel="Sim" type="radio" name="anonima" onChange={handleRadioChange} value="sim"/>
                        </DivRadio>

                        <DivRadio>
                            <Input htmlForID="nao" textLabel="Não" type="radio" name="anonima" onChange={handleRadioChange} value="nao"/>
                        </DivRadio>
                    </DivOptions>
                </DivInput>

                {showForm && (
                    <>
                    <DivInput>
                        <Input htmlForID="nome" textLabel="Nome completo:" type="text" placeholder="ex: José Maria da Silva"/>
                    </DivInput>

                    <DivInput>
                        <Input htmlForID="contato" textLabel="Telefone para contato:" type="text" placeholder="ex: +5511957683249"/>
                    </DivInput>
                    </>
                )}
                
            </DivForm>

            <Button onClick={handleButton}/>

            {isValid && (
                <DivMessage>
                    <Message>Formulário enviado com sucesso!</Message>
                </DivMessage>
            )}            
        </FormSection>
    )
}

export default Form