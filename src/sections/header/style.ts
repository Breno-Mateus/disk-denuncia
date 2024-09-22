import styled from "styled-components";
import { MdMenu } from "react-icons/md";

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #283747;
   // background-color: rgba(0, 0, 0, 0.2);

    position: fixed;

    width: 100%;
`

export const IconMenu = styled(MdMenu)`
    font-size: 3rem;
    margin-right: 8rem;
`

export const ImageLogo = styled.img`
    height: 5rem;
    width: 5rem;
    margin-left: 8rem;
`