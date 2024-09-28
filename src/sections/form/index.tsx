import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormSection, Title, DivInput, DivForm, DivRadio, DivOptions, DivMessage, Message, InputStyle, TextareaStyle, ButtonStyle, MessageError } from "./style";

interface FormData {
    title: string;
    description: string;
    location: string;
    date: string;
    name: string;
    phone: string;
}

const Form = () => {
    const [showForm, setShowForm] = useState(false);
    const [isValid, setValid] = useState(false);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowForm(event.target.value === "nao");
    };

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        setValid(true);
    };

    return (
        <FormSection id="SectionForm" onSubmit={handleSubmit(onSubmit)}>
            <Title>Formulário</Title>

            <DivForm>
                <DivInput>
                    <label htmlFor="denuncia">Título da denúncia:</label>
                    <InputStyle id="denuncia" type="text" placeholder="ex: Assédio no local de trabalho" {...register("title", { required: true })}
                    />
                    {errors?.title && <MessageError className="error-message">O campo de título é obrigatório.</MessageError>}
                </DivInput>

                <DivInput>
                    <label htmlFor="descricao">Descrição da denúncia:</label>
                    <TextareaStyle id="descricao" placeholder="Descreva os detalhes do incidente..." {...register("description", { required: true })} />
                    {errors?.description && <MessageError className="error-message">O campo de descrição é obrigatória.</MessageError>}
                </DivInput>

                <DivInput>
                    <label htmlFor="local">Local do incidente:</label>
                    <InputStyle id="local" type="text" placeholder="ex: Escritório central, 5º andar, sala 502..." {...register("location", { required: true })} />
                    {errors?.location && <MessageError className="error-message">O campo de local é obrigatório.</MessageError>}
                </DivInput>

                <DivInput>
                    <label htmlFor="data">Data do incidente:</label>
                    <InputStyle id="data" type="date" {...register("date", { required: true })} />
                    {errors?.date && <MessageError className="error-message">A data é obrigatória.</MessageError>}
                </DivInput>

                <DivInput>
                    <p>Deseja enviar de forma anônima?</p>
                    <DivOptions>
                        <DivRadio>
                            <label>
                                <input type="radio" name="anonima" onChange={handleRadioChange} value="sim" />
                                Sim
                            </label>
                        </DivRadio>
                        
                        <DivRadio>
                            <label>
                                <input type="radio" name="anonima" onChange={handleRadioChange} value="nao" />
                                Não
                            </label>
                        </DivRadio>
                    </DivOptions>
                </DivInput>

                {showForm && (
                    <>
                        <DivInput>
                            <label htmlFor="nome">Nome completo:</label>
                            <InputStyle id="nome" type="text" placeholder="ex: José Maria da Silva" {...register("name", { required: true })} />
                            {errors?.name && <MessageError className="error-message">O campo de nome é obrigatório.</MessageError>}
                        </DivInput>

                        <DivInput>
                            <label htmlFor="contato">Telefone para contato:</label>
                            <InputStyle id="contato" type="text" placeholder="ex: +5511957683249" {...register("phone", { required: true })} />
                            {errors?.phone && <MessageError className="error-message">O campo de telefone é obrigatório.</MessageError>}
                        </DivInput>
                    </>
                )}

                <ButtonStyle type="submit">Enviar</ButtonStyle>

                {isValid && (
                    <DivMessage>
                        <Message>Formulário enviado com sucesso!</Message>
                    </DivMessage>
                )}
            </DivForm>
        </FormSection>
    );
};

export default Form;