import styled from "styled-components";
import { Link } from "react-scroll"


export const MenuNav = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;

    height: 100vh;
    width: 100%;
`

export const LinkStyled = styled(Link)`
    font-size: 1.2rem;
    cursor: pointer;
`