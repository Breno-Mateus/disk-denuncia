import styled from "styled-components";

export const OperationSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 5rem;

    height: 100vh;
    width: 100%;

    @media(max-width: 900px){
        flex-direction: column;
        padding: 3rem;
    }
`

export const ImageComplaint = styled.img`
    height: 15rem;
    width: 15rem;

    @media(max-width: 900px){
        height: 8rem;
        width: 8rem;
    }
`

export const DivText = styled.div`
    display: flex;
    flex-direction: column;

    width: 50%;

    @media(max-width: 900px){
        width: 100%;
        margin-top: 3rem;
    }
`

export const Title = styled.h3`
    font-size: 2rem;
    text-transform: uppercase;

    @media(max-width: 900px){
        font-size: 1.5rem;
    }
`

export const Text = styled.p`
    font-size: 1rem;
    line-height: 1.5;

    @media(max-width: 900px){
        font-size: .8rem;
    }
`