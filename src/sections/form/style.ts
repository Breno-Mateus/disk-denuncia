import styled from "styled-components";

export const FormSection = styled.form`
    background-color: #283747;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    padding: 4rem;

    width: 100%;
`

export const DivForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
`

export const Title = styled.h2`
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    width: 80%;
`

export const DivOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const DivRadio = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`

export const DivMessage = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    padding: 1rem;
    border-radius: 5px;
`

export const Message = styled.p`
    color: green;
`

export const InputStyle = styled.input`
    color: #fff;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 3rem;
    padding: 1rem;
    font-size: .9rem;
`

export const TextareaStyle = styled.textarea`
    height: 7rem;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 1rem;
    font-size: .9rem;
    border: none;
    border-radius: 5px;
`

export const ButtonStyle = styled.button`
    background-color: rgba(0, 0, 0, 0.2);
    width: 6rem;
    height: 3rem;
    border: none;
    border-radius: 8px;
    font-weight: 800;

    &:hover{
        background-color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }
`

export const MessageError = styled.p`
    color: red;
    font-size: .8rem;
`