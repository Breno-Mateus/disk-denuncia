import styled from "styled-components";

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