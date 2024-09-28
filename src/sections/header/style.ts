import styled from "styled-components";


export const HeaderStyle = styled.header<{isOpen: boolean}>`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    background-color: #283747;
    position: fixed;
    width: 100%;
    height: ${(props) => (props.isOpen ? '100%' : '11%')};
`

export const DivLogos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderStyleMobile = styled.header`
    display: flex;
    flex-direction: column;

    gap: 5rem;

    background-color: #283747;
`

export const IconMenu = styled.div`
    margin-right: 5%;
`

export const ImageLogo = styled.img`
    height: 4rem;
    width: 4rem;
    margin-left: 5%;
`