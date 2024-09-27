import styled from "styled-components";


export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #283747;
   // background-color: rgba(0, 0, 0, 0.2);

    position: fixed;

    width: 100%;
`

export const HeaderStyleMobile = styled.header`
    display: flex;
    flex-direction: column;

    gap: 5rem;

    background-color: #283747;
`

export const DivLogosMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconMenu = styled.div`
    margin-right: 5%;
`

export const ImageLogo = styled.img`
    height: 5rem;
    width: 5rem;
    margin-left: 5%;
`