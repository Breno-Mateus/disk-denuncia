import styled from "styled-components";

export const FormSection = styled.section`
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
    gap: 1rem;
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